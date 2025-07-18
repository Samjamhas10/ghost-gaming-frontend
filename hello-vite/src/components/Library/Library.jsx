import { Link } from "react-router-dom";
import "./Library.css";

function Library() {
  return (
    <div className="library__sidebar">
      <p className="library__title">Ghost Library:</p>
      <div className="library__games-saved" aria-label="Downloads"></div>
      <ul className="library__games-list">
        <li className="library__game library__minecraft">
          <Link
            to="/profile"
            aria-label="Minecraft"
            className="library__game-image"
          />
          <div className="library__game-info">
            <p className="library__game-title">Minecraft</p>
            <p className="library__game-platforms">PS5 & Xbox & PC</p>
          </div>
        </li>
        <li className="library__game library__fall-guys">
          <Link
            to="/profile"
            aria-label="Fall Guys"
            className="library__game-image"
          />
          <div className="library__game-info">
            <p className="library__game-title">Fall Guys</p>
            <p className="library__game-platforms">PS5 & Xbox & PC</p>
          </div>
        </li>
        <li className="library__game library__creed">
          <Link
            to="/profile"
            aria-label="Assassin Creed 2"
            className="library__game-image"
          />
          <div className="library__game-info">
            <p className="library__game-title">Assassin Creed 2</p>
            <p className="library__game-platforms">Xbox & PC</p>
          </div>
        </li>
        <li className="library__game library__space-marine">
          <Link
            to="/profile"
            aria-label="Space Marine"
            className="library__game-image"
          />
          <div className="library__game-info">
            <p className="library__game-title">Space Marine</p>
            <p className="library__game-platforms">PS5 & Xbox & PC</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Library;
