import Preloader from "../Preloader/Preloader";
import "./Main.css";

function Main({ handleRecentlyPlayed, data, isLoading, error }) {
  return (
    <div className="main__container">
      <div className="main__image">
        <div className="overlay__image"></div>
      </div>
      <div className="main__game-info">
        <div className="main__headset"></div>
        <div className="main__game-text">
          <h2 className="games__title">Recently Played Games:</h2>
          <button onClick={handleRecentlyPlayed}>
            {" "}
            Load Recently Played Games
          </button>
          <Preloader isLoading={isLoading} />
          {error && <p>Error loading games: {error.message}</p>}
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
