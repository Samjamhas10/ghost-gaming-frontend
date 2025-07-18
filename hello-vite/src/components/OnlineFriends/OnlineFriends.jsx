import { Link } from "react-router-dom";
import "./OnlineFriends.css";

function OnlineFriends() {
  return (
    <div className="friends__sidebar">
      <p className="friends__title">Online Friends:</p>
      <div>
        <ul className="online__friends-list">
          <li className="online__friend online__friend-1">
            <Link
              to="/profile"
              aria-label="Good Boi"
              className="online__friend-image"
            />
          </li>
          <li className="online__friend online__friend-2">
            <Link
              to="/profile"
              aria-label="I am Goat"
              className="online__friend-image"
            ></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OnlineFriends;
