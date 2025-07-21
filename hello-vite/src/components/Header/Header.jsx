import { Link } from "react-router-dom";
import "./Header.css";

function Header({ openLoginModal, openRegisterModal }) {
  return (
    <header className="header">
      <div>
        <h1 className="header__title">Ghost</h1>
      </div>
      <div className="header__buttons">
        <button
          className="header__signup"
          onClick={openRegisterModal}
          aria-label="Sign Up"
        >
          Signup
        </button>
        <button className="header__login" onClick={openLoginModal} aria-label="Log In">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
