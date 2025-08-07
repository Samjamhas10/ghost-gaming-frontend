import { useState } from "react";
import "./GamesCollection.css";
import Preloader from "../Preloader/Preloader";

function GamesCollection() {
  const [isLoading, setIsLoading] = useState(false);
  const [collections, setCollections] = useState([]);

  // const fetchSaveGame = async (game) => {
  //   const token = localStorage.getItem("token");
  //   try {
  //     return fetch("http://localhost:3004/games", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Client-ID": "1wsoeud8986qp5or7yfy7442oggme9",
  //         Authorization: `Bearer ${ACCESS_TOKEN}`,
  //       },
  //     }
  // };

  const fetchDeleteGame = async (gameId) => {
    const token = localStorage.getItem("token");
  };

  const handleSearch = async (game, value) => {
    setIsLoading(true);
    try {
      // API CALL
    } catch (err) {
      console.error("Error fetching saved games");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Preloader isLoading={isLoading} onSearch={handleSearch} />
      <section className="saved__games">
        <h1 className="saved__games-title">Saved Games</h1>
        <div className="reviews__grid">
          {collections.map((game) => (
            <div key={game.id} className="collection__card">
              <h3 className="collection__title">{game.title}</h3>
              <p className="collection__genre">{game.genre}</p>
              <p className="collection__platform">{game.platform}</p>
            </div>
          ))}
        </div>
        <div className="collection__image-1"></div>
      </section>
    </div>
  );
}

export default GamesCollection;
