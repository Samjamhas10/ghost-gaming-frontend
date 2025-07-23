import "../Footer/Footer";
import "./Main.css";

function Main() {
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
          <div className="recent__games"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
