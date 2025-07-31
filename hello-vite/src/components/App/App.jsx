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
import Preloader from "../Preloader/Preloader";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import GamesCollection from "./GamesCollection/GamesCollection";
import GhostlyReviews from "../GhostlyReviews/GhostlyReviews";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Library from "../Library/Library";
import Footer from "../Footer/Footer";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

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
  const [searchError, setSearchError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  console.log(searchData);
  const openRegisterModal = () => {
    setActiveModal("signup");
  };

  const openLoginModal = () => {
    setActiveModal("signin");
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
      .then((data) => {
        closeActiveModal("");
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
        checkToken(data.token).then((userData) => {
          setCurrentUser(userData);
          setIsSignedIn(true);
        });
        closeActiveModal("");
      })
      .catch(console.error);
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
          <SearchBar
            handleSearch={handleSearch}
            searchData={searchData}
            searchLoading={searchLoading}
            searchError={searchError}
          />
          <div className="app__wrapper">
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    onClick={handleRecentlyPlayed}
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
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/saved" element={<GamesCollection />} />
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
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
