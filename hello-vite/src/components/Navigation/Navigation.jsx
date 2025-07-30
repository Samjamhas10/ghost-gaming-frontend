import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
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
            ></Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="nav__item nav__user"
              aria-label="Profile"
            ></Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className=" nav__item nav__reviews"
              aria-label="Reviews"
            ></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
