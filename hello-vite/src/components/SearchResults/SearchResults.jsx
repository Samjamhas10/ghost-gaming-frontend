// import react hooks/ css styling
import { useState, useEffect } from "react";
import "./SearchResults.css";

function SearchResults({
  searchData, // total available
  searchLoading,
  searchError,
  searchPerformed, // search was performed
}) {
  // state to control how many results to show
  const [count, setCount] = useState(3);

  // slice results
  const displayResults = searchData.slice(0, count);

  useEffect(() => {
    setCount(3); // count set to 3 when the component first renders
  }, []);

  const handleShowMore = () => {
    setCount((prev) => prev + 3);
    console.log("button clicked");
  };

  return (
    <div className="search__results-containter">
      {displayResults.map((item, index) => (
        <div key={index} className="search__result-item">
          {item.game}
        </div>
      ))}
      {!searchLoading &&
        !searchError &&
        searchPerformed &&
        displayResults &&
        searchData.length < 3 &&
        count < searchData.length && (
          <button className="search__results" onClick={handleShowMore}>
            Show More
          </button>
        )}
    </div>
  );
}

// export the component
export default SearchResults;
