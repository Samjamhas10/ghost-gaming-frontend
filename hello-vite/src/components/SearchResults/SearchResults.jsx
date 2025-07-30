import "./SearchResults.css";

function SearchResults() {
  return (
    <div>
      {" "}
      <div className="game__not-loaded">Game not found</div>
      <button className="game__results">Show More</button>
    </div>
  );
}

export default SearchResults;
