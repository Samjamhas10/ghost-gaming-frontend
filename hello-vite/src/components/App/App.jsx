// import React Router
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

// import api
// import { register, login } from "../../utils/api";

// import components
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import TopGames from "../TopGames/TopGames";
import GhostlyReviews from "../GhostlyReviews/GhostlyReviews";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Library from "../Library/Library";
import Footer from "../Footer/Footer";

// import styles
import "./App.css";

function App() {
  // default useState
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openRegisterModal = () => {
    setActiveModal("signup");
  };

  const openLoginModal = () => {
    setActiveModal("login");
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
    login(email, password)
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
              <Route path="/" element={<Main />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/top-games" element={<TopGames />} />
              <Route path="/reviews" element={<GhostlyReviews />} />
            </Routes>
            <RegisterModal
              isOpen={activeModal === "signup"}
              onClose={closeActiveModal}
              openLoginModal={openLoginModal}
              handleSignUp={handleSignUp}
            />
            <LoginModal
              isOpen={activeModal === "login"}
              onClose={closeActiveModal}
              openRegisterModal={openRegisterModal}
              handleSignIn={handleSignIn}
            />
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
