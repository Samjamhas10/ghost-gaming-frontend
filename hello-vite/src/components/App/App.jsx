// import React Router
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
  return (
    <BrowserRouter>
      <div className="app__grid">
        <Navigation />
        <div className="main__column">
          <Header />
          <SearchBar />
          <div className="app__wrapper">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/top-games" element={<TopGames />} />
              <Route path="/reviews" element={<GhostlyReviews />} />
            </Routes>
            <RegisterModal />
            <LoginModal />
            {/* <Library /> */}
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
