// import React Router
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// import auth & api
import { register, authorize, checkToken } from "../../utils/auth";
import api from "../../utils/IGDBApi";

// import components
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Preloader from "../Preloader/Preloader";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import UpdateProfileModal from "../UpdateProfileModal/UpdateProfileModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// import styles
import "./App.css";

function App() {
  // default state variables
  const [activeModal, setActiveModal] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedGames, setSavedGames] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  // runs everytime the token changes
  useEffect(() => {
    if (token) {
      checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
          setIsSignedIn(true);
        })
        .catch((err) => {
          console.error("Token validation failed:", err);
          localStorage.removeItem("token");
        });
    }
  }, [token]);

  const openRegisterModal = () => {
    setActiveModal("signup");
  };

  const openLoginModal = () => {
    setActiveModal("signin");
  };

  const openUpdateProfileModal = () => {
    setActiveModal("update");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  // fetch recently played games
  useEffect(() => {
    api
      .getRecentlyPlayedGames()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // fetch saved games
  useEffect(() => {
    if (!token) {
      return;
    }
    api
      .getSavedGames(token)
      .then((data) => {
        setSavedGames(data);
      })
      .catch((err) => {
        // handle 401 return
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  // fetch search games
  const handleSearch = (query) => {
    setSearchLoading(true);
    api
      .searchGames(query)
      .then((data) => {
        setSearchData(data);
        setSearchError(null);
        setSearchPerformed(true);
      })
      .catch((err) => {
        console.error(err);
        setSearchError(err);
      })
      .finally(() => {
        setSearchLoading(false);
        // setSearchPerformed(false);
      });
  };

  const handleSignUp = ({ email, password, username, avatarUrl }) => {
    if (!email || !password || !username || !avatarUrl) {
      return; // Return some other message
    }
    register(email, password, username, avatarUrl)
      .then(() => {
        closeActiveModal();
        return handleSignIn({ email, password });
      })
      .catch(console.error);
  };

  const handleSignIn = ({ email, password }) => {
    if (!email || !password) {
      return Promise.reject();
    }
    authorize(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        checkToken(data.token).then((userData) => {
          setCurrentUser(userData);
          setIsSignedIn(true);
          closeActiveModal();
        });
      })
      .catch(console.error);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("token");
    setToken(null);
  };

  const handleProfile = (formData) => {
    console.log("Original formData:", formData);
    const { username, bio, avatarUrl } = formData;
    console.log("Sending to backend:", { username, bio, avatarUrl });
    if (!token) {
      console.error("No authentication token available");
      return Promise.reject("No authentication token available");
    }
    // API call
    return fetch(`${BACKEND_URL}/users/me`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username, bio, avatarUrl }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Profile update failed");
        }
        return checkToken(token);
      })
      .then((userData) => {
        console.log("Updated user data:", userData);
        setCurrentUser(userData); // update the state
        setIsSignedIn(true);
      });
  };

  // TODO: Implement save/unsave game functionality
  const handleGameLike = (game) => {
    console.log(game);
    const isLiked = savedGames.some((savedGame) => savedGame.id === game.id);
    if (!isLiked) {
      api
        .addGameLike(token, game.id)
        .then(() => {
          console.log("Saving game:", game.id);
          // Handle successful like here
          // update isLiked state
        })
        .catch((err) => {
          console.error(err);
          alert("Could not like game. Please try again");
        });
    } else {
      api
        .removeGameLike(token, game.id)
        .then(() => {
          console.log("Unsaving game:", game.id);
          // Handle successful unlike here
          // update isLiked state
        })
        .catch((err) => {
          console.error(err);
          alert("Could not unlike game. Please try again");
        });
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <div className="app__column">
          <Header
            openRegisterModal={openRegisterModal}
            openLoginModal={openLoginModal}
            currentUser={currentUser}
            handleSearch={handleSearch}
            searchData={searchData}
            searchLoading={searchLoading}
            searchError={searchError}
            searchPerformed={searchPerformed}
            handleSaveGame={handleGameLike}
          />
          <Preloader isLoading={searchLoading} onSearch={handleSearch} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  data={data}
                  isLoading={isLoading}
                  error={error}
                  isSignedIn={isSignedIn}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isSignedIn={isSignedIn}>
                  <Profile
                    handleSignOut={handleSignOut}
                    openUpdateProfileModal={openUpdateProfileModal}
                    currentUser={currentUser}
                    savedGames={savedGames}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          <div>
            <RegisterModal
              isOpen={activeModal === "signup"}
              onClose={closeActiveModal}
              openLoginModal={openLoginModal}
              handleSignUp={handleSignUp}
            />
            <LoginModal
              isOpen={activeModal === "signin"}
              onClose={closeActiveModal}
              openRegisterModal={openRegisterModal}
              handleSignIn={handleSignIn}
            />
            <UpdateProfileModal
              isOpen={activeModal === "update"}
              onClose={closeActiveModal}
              openUpdateProfileModal={openUpdateProfileModal}
              handleProfile={handleProfile}
            />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
