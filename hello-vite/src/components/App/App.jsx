// import React Router
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

// import auth & api
import { register, authorize, checkToken } from "../../utils/auth";
import api from "../../utils/IGDBApi";

// import components
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Preloader from "../Preloader/Preloader";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
//import UpdateProfileModal from "../UpdateProfileModal/UpdateProfileModal";
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
  const [isSignedOut, setIsSignedOut] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchOutcome, setSearchOutcome] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  console.log(searchData);

  useEffect(() => {
    const token = localStorage.getItem("token");
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

  const openRegisterModal = () => {
    setActiveModal("signup");
  };

  const openLoginModal = () => {
    setActiveModal("signin");
  };

  const openUpdateProfileModal = () => {
    console.log("button clicked");
    setActiveModal("update");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRecentlyPlayed = () => {
    api
      .getRecentlyPlayedGames()
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
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

  const handleSearch = (query) => {
    if (!query) return;
    setSearchLoading(true);
    api
      .searchGames(query)
      .then((data) => {
        console.log(data);
        setSearchData(data);
        setSearchError(null);
        setSearchPerformed(true);
        setSearchOutcome(true);
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

  const handleProfile = () => {
    const token = localStorage.getItem("token");
  };

  return (
    <BrowserRouter>
      <div className="app__grid">
        <Navigation />
        <div className="main__column">
          <Header
            openRegisterModal={openRegisterModal}
            openLoginModal={openLoginModal}
            currentUser={currentUser}
          />
          <Preloader isLoading={searchLoading} onSearch={handleSearch} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar
                    handleSearch={handleSearch}
                    searchData={searchData}
                    searchLoading={searchLoading}
                    searchError={searchError}
                    searchPerformed={searchPerformed}
                  />
                  <SearchResults
                    handleSearch={handleSearch}
                    searchData={searchData}
                    searchLoading={searchLoading}
                    searchError={searchError}
                    searchPerformed={searchPerformed}
                    searchOutcome={searchOutcome}
                  />
                  <div className="app__wrapper">
                    <Main
                      handleRecentlyPlayed={handleRecentlyPlayed}
                      data={data}
                      isLoading={isLoading}
                      error={error}
                      isSignedIn={isSignedIn}
                    />
                  </div>
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isSignedIn={isSignedIn}>
                  <Profile
                    handleSignOut={handleSignOut}
                    isSignedOut={setIsSignedOut}
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
            {/* <UpdateProfileModal
              isOpen={activeModal === "update"}
              onClose={closeActiveModal}
              openUpdateProfileModal={openUpdateProfileModal}
            /> */} 
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
