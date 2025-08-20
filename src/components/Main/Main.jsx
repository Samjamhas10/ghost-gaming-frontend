import Preloader from "../Preloader/Preloader";
import mainGame from "../../assets/main-game.svg";
import overlayImage from "../../assets/space-marine.svg";
import "./Main.css";

function Main({ data, isLoading }) {
  return (
    <main className="main">
      <div className="main__images">
        <img src={mainGame} alt="Main Game" className="main__image" />
        <img src={overlayImage} alt="Space Marine" className="overlay__image" />
      </div>
      <div className="main__content">
        <section className="main__game-info">
          <h2 className="main__games-title">Recently Played Games:</h2>
          <Preloader isLoading={isLoading} />
          <ul className="main__recent-games">
            {data.map((game) => (
              <li key={game.id} className="game__card">
                <h3>{game.name}</h3>
              </li>
            ))}
          </ul>
        </section>
        <div className="main__headset"></div>
      </div>
    </main>
  );
}

export default Main;
