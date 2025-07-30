import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ handleSearch, searchData, searchLoading, searchError }) {
  const [query, setQuery] = useState("");

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
      <button className="search__games" onClick={handleSearch}></button>
      {searchLoading && <p>Loading...</p>}
      {searchError && <p>Error loading games: {error.message}</p>}
      {searchData.map((game) => (
        <div key={game.id} className="game">
          <h3>{game.name}</h3>
        </div>
      ))}
    </form>
  );
}

export default SearchBar;
