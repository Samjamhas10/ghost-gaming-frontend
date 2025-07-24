// import React Router
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

// import auth
import { register, authorize } from "../../utils/auth";

// import components
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import TopGames from "../TopGames/TopGames";
import GhostlyReviews from "../GhostlyReviews/GhostlyReviews";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Library from "../Library/Library";
import Footer from "../Footer/Footer";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

// import styles
import "./App.css";

function App() {
  // default useState
  const [activeModal, setActiveModal] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const openRegisterModal = () => {
    setActiveModal("signup");
  };

  const openLoginModal = () => {
    setActiveModal("signin");
  };

  const closeActiveModal = () => {
    setActiveModal("");
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
          />
          <SearchBar />
          <div className="app__wrapper">
            <Routes>
              <Route path="/" element={<Main isSignedIn={isSignedIn} />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isSignedIn={isSignedIn}>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/top-games" element={<TopGames />} />
              <Route path="/reviews" element={<GhostlyReviews />} />
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
