import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <div>
        <h1 className="header__title"></h1>
      </div>
      <div className="header__notification"></div>
      <div className="header__chat"></div>
    </div>
  );
}

export default Header;
