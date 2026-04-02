import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import "./SearchBar.css";
import searchIcon from "../../assets/search-icon.svg";
import { SEARCH_MESSAGES } from "../../utils/constants";

function SearchBar({
  handleSearch,
  searchData,
  searchLoading,
  searchError,
  searchPerformed,
  closeSearchResultsModal,
}) {
  const [query, setQuery] = useState(""); // store what is typed
  const [savedGames, setSavedGames] = useState([]); // store saved games

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  const closeSearchResults = () => {
    setQuery("");
    closeSearchResultsModal();
  };

  const handleSaveGame = async (game) => {
    try {
      if (savedGames.includes(game.id)) {
        // Unsave game
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/unsave`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ gameId: game.id }),
        });
        setSavedGames((prev) => prev.filter((id) => id !== game.id));
      } else {
        // Save game
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/save`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ gameId: game.id }),
        });
        setSavedGames((prev) => [...prev, game.id]);
      }
    } catch (error) {
      console.error("Error saving/unsaving game:", error);
    }
  };

  return (
    <>
      {searchPerformed && !searchError && searchData.length > 0 && (
        <div
          className="search__overlay"
          onClick={closeSearchResults}
          aria-hidden="true"
        ></div>
      )}
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__bar"
          placeholder="Search"
          aria-label="Search Games"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="submit"
          className="search__icon-button"
          aria-label="Submit Search"
        >
          <img src={searchIcon} alt="Search Icon" />
        </button>
        {searchLoading && <Preloader searchLoading={searchLoading} />}
        {!searchLoading && searchError && (
          <p className="search__error-data">{SEARCH_MESSAGES.SEARCH_ERROR}</p>
        )}
        {!searchLoading &&
          !searchError &&
          searchPerformed &&
          searchData.length === 0 && (
            <p className="search__error">{SEARCH_MESSAGES.NOTHING_FOUND}</p>
          )}
        {searchPerformed && !searchError && searchData.length > 0 && (
          <ul className="search__results-overlay">
            {searchData.map((game) => (
              <li key={game.id} className="search__game-results">
                <h2 className="game__name">{game.name}</h2>
                {game.image && (
                  <img
                    src={game.image}
                    alt={`Image of ${game.name}`}
                    className="game__image"
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}

export default SearchBar;
