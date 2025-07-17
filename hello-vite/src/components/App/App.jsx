// import React Router
import { Routes, Route, BrowserRouter } from "react-router-dom";

// import components
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import Library from "../Library/Library";
import Footer from "../Footer/Footer";

// import styles
import "./App.css";

function App() {
  return (
    <div className="app__grid">
      <div className="nav">
        <Navigation />
      </div>
      <div className="main__column">
        {" "}
        <Header />
        <SearchBar />
        <div className="app__wrapper">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <RegisterModal />
            <LoginModal />
            <Library />
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
