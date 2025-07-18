import { Link } from "react-router-dom";
import "./TopGames.css";

function TopGames() {
  return (
    <div className="top__games">
      <h1 className="top__games-title">Top Rated Games:</h1>

      <div>
        <ul className="o">
          <li className="top__game top__game-1">
            <Link
              to="/top-games"
              aria-label="Call of Duty Black Ops"
              className="top__games-image"
            />
          </li>
          <li className="top__game top__game-2">
            <Link
              to="/top-games"
              aria-label="Fortnite"
              className="top__games-image"
            ></Link>
          </li>
          <li className="top__game top__game-3">
            <Link
              to="/top-games"
              aria-label="Overwatch"
              className="top__games-image"
            ></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopGames;
