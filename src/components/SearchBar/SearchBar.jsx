import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import "./SearchBar.css";
import searchIcon from "../../assets/search-icon.svg";

function SearchBar({
  handleSearch,
  searchData,
  searchLoading,
  searchError,
  searchPerformed,
  // handleSaveGame
}) {
  const [query, setQuery] = useState(""); // store what is typed

  // TODO: Implement escape/outside click functionality for search results
  // const closeSearchResultsModal = (evt) => {
  //   setQuery("");
  //   handleSearch("");
  // };
  // useEffect(() => {
  //   const handleClickOutside = (evt) => {
  //     if (isOpen) {
  //       document.addEventListener("mousedown", handleClickOutside);
  //       onClose();
  //     }
  //   };
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [onClose]);


  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <>
      {searchPerformed && (
        <div
          className="search__overlay"
          // onClick={closeSearchResultsModal} // TODO
        ></div>
      )}
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__bar"
          placeholder="Search"
          aria-label="Search Games"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
        <button type="submit" className="search__icon-button">
          <img src={searchIcon} alt="search" />
        </button>
        {searchLoading && <Preloader searchLoading={searchLoading} />}
        {!searchLoading && searchError && (
          <p className="search__error-data">
            Sorry, something went wrong during the request. There may be a
            connection issue or the server may be down. Please try again later.
          </p>
        )}
        {!searchLoading &&
          !searchError &&
          searchPerformed &&
          searchData.length === 0 && (
            <p className="search__error">Nothing Found</p>
          )}{" "}
        <div className="search__results-overlay">
          {!searchLoading &&
            !searchError &&
            searchData.length > 0 &&
            searchData.map((game) => (
              <div
                key={game.id}
                className="search__game-results"
                // onClick={close}
              >
                {/* <div className="search__save-game" onClick={()=> handleSaveGame(game)} ></div> */} 
                <h2 className="game__name">{game.name}</h2>
                {game.image && (
                  <img
                    src={game.image}
                    alt="game image"
                    className="game__image"
                  />
                )}
              </div>
            ))}
        </div>
      </form>
    </>
  );
}

export default SearchBar;
