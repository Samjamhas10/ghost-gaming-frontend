import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav__bar">
      <ul className="nav__list">
        <li>
          <Link
            to="/"
            className="nav__item nav__logo"
            aria-label="Nav Logo"
          ></Link>
        </li>
        <li>
          <Link
            to="/"
            className="nav__item nav__home"
            aria-label="Home"
            title="Homepage"
          ></Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="nav__item nav__user"
            aria-label="User"
            title="User Profile"
          ></Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
