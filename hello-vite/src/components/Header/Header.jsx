import { Link } from "react-router-dom";
import "./Header.css";

function Header({ handleRegisterModal, handleLoginModal }) {
  return (
    <div>
      <div>
        <h1 className="header__title"></h1>
      </div>
      <button className="header__signup">Signup</button>
      <button className="header__login">Login</button>
    </div>
  );
}

export default Header;
