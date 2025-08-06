import Preloader from "../Preloader/Preloader";
import "./Main.css";

function Main({ handleRecentlyPlayed, data, isLoading, error }) {
  return (
    <main className="main">
      <section className="main__image">
        <div className="overlay__image"></div>
      </section>
      <section className="main__game-info">
        <h2 className="main__games-title">Recently Played Games:</h2>
        <button className="main__games-load" onClick={handleRecentlyPlayed}>
          Load Recently Played Games
        </button>
        <Preloader isLoading={isLoading} />
        {error && <p>Error loading games: {error.message}</p>}
        <ul className="main__recent-games">
          {data.map((game) => (
            <li key={game.id} className="game__card">
              <h3>{game.name}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section className="main__suggestions">
        <h4 className="main__suggestions-title">You Might Also Like:</h4>
        <div className="main__suggestions-1"></div>
        <div className="main__suggestions-2"></div>
        <div className="main__suggestions-3"></div>
      </section>
    </main>
  );
}

export default Main;
