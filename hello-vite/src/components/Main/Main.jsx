import { useState, useEffect } from "react";
import "../Footer/Footer";
import "./Main.css";
import api from "../../utils/IGDBApi";

function Main() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleRecentlyPlayed = () => {
    api
      .getRecentlyPlayedGames()
      .then((data) => {
        setData(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    api
      .getRecentlyPlayedGames()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main__container">
      <div className="main__image">
        <div className="overlay__image"></div>
        <h2 className="main__image-title">
          Assassin's Creed Valhalla: Survive At All Costs
        </h2>
      </div>
      <div className="main__game-info">
        <div className="main__headset"></div>
        <div className="main__game-text">
          <h2 className="games__title">Recently Played</h2>
          <button onClick={handleRecentlyPlayed}>
            {" "}
            Load Recently Played Games
          </button>
          <div className="recent__games">
            {data.map((game) => (
              <div key={game.id} className="game__card">
                <h3>{game.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
