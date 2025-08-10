import Preloader from "../Preloader/Preloader";
import mainGame from "../../assets/main-game.svg";
import overlayImage from "../../assets/space-marine.svg";
import "./Main.css";

function Main({ data, isLoading, error }) {
  return (
    <main className="main">
      <div className="main__images">
        <img src={mainGame} alt="Main Game" className="main__image" />
        <img src={overlayImage} alt="Space Marine" className="overlay__image" />
      </div>
      <section className="main__game-info">
        <h2 className="main__games-title">Recently Played Games:</h2>
        <Preloader isLoading={isLoading} />
        {/* {error && <p>Error loading games: {error.message}</p>} */}
        <ul className="main__recent-games">
          {data.map((game) => (
            <li key={game.id} className="game__card">
              <h3>{game.name}</h3>
            </li>
          ))}
        </ul>
      </section>
      <section className="main__suggestions">
        <h4 className="main__suggestions-title"></h4>
        <div className="main__suggestions-1"></div>
        <div className="main__suggestions-2"></div>
        <div className="main__suggestions-3"></div>
      </section>
    </main>
  );
}

export default Main;
