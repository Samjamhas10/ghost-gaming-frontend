import { Link } from "react-router-dom";
import "./Library.css";

function Library() {
  return (
    <div className="library__sidebar">
      <p className="library__title">Ghost Library:</p>
      <div className="library__options">
        <ul className="library__games">
          <li>
            <Link
              className="library__games library__minecraft"
              aria-label="Minecraft"
            ></Link>
            <p>Minecraft</p>
          </li>
          <li>
            <Link className="library__games library__fall-guys"></Link>
            <p>Fall Guys</p>
          </li>
          <li>
            <Link className="library__games library__creed"></Link>
            <p>Assassin Creed 2</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Library;
