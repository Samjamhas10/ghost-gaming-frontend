import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ handleSearch, searchData, searchLoading, searchError }) {
  const [query, setQuery] = useState("");
  const [gameResults, setGameResults] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__bar"
        placeholder="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      ></input>
      <button
        className="modal__submit modal__submit-search"
        onSubmit={handleSearch}
      ></button>
      {searchLoading && <p>Loading...</p>}
      {searchError && <p>Error loading games: {searchError.message}</p>}
      {searchData.map((game) => (
        <div key={game.id} className="game">
          <h2>{game.name}</h2>
        </div>
      ))}
    </form>
  );
}

export default SearchBar;
