import { useState } from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/search-icon.svg";

function SearchBar({ handleSearch, searchData, searchLoading, searchError }) {
  const [query, setQuery] = useState(""); // store what is typed
  const [gameResults, setGameResults] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div>
        <input
          className="search__bar"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
        <button type="submit" className="search__icon-button">
          <img src={searchIcon} alt="search" />
        </button>
      </div>
      {searchLoading && <p>Loading...</p>}
      {searchError && <p>Error loading games: {searchError.message}</p>}
      {searchData.map((game) => (
        <div key={game.id} className="search__game-outcome">
          <h2 className="game__name">{game.name}</h2>
          {/* add image here */}
        </div>
      ))}
    </form>
  );
}

export default SearchBar;
