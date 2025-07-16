import homeIcon from "../../assets/home-icon.png";
import "./Navigation.css";

function Navigation() {
  return (
    <Navigation className="nav">
      <div>
        <ul className="nav__list">
          <li className="nav__home">Home</li>
          <li className="nav__reviews">Reviews</li>
          <li className="nav__top-games">Top Games</li>
          <li className="nav__collection">Collection</li>
        </ul>
      </div>
    </Navigation>
  );
}

export default Navigation;
