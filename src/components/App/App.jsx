// import React Router
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const token = localStorage.getItem("token");
  // default state variables
  const [activeModal, setActiveModal] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSignedOut, setIsSignedOut] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [saveGames, setSavedGames] = useState(true);

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
  }, []);

  // useEffect(() => {
  //   checkToken()
  //     .then((user) => setCurrentUser(user))
  //     .finally(() => setIsUserLoading(false));
  // }, []);

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

  useEffect(() => {
    api
      .getSavedGames(token)
      .then((data) => {
        setSavedGames(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    if (!query) return;
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
      });
  };

  const handleSignUp = ({ email, password, name, avatarUrl }) => {
    if (!email || !password || !name || !avatarUrl) {
      return;
    }
    register(email, password, name, avatarUrl)
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
        });
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("token");
  };

  const handleProfile = (formData) => {
    const { username, bio, avatarUrl } = formData;

    console.log("Form data:", formData);
    console.log("Extracted data:", { username, bio, avatarUrl });
    console.log("Token exists:", !!token);

    if (!token) {
      console.error("No authentication token available");
      return Promise.reject("No authentication token available");
    }
    // API call
    return fetch("http://localhost:3004/users/me", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ username, bio, avatarUrl }),
    })
      .then((response) => {
        console.log("Response status:", response.status);
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
                    isSignedOut={setIsSignedOut}
                    openUpdateProfileModal={openUpdateProfileModal}
                    currentUser={currentUser}
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
