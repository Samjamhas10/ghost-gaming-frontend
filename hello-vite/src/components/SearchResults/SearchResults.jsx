import { useState, useEffect } from "react";
import "./SearchResults.css";

function SearchResults({
  searchData,
  searchLoading,
  searchError,
  searchPerformed,
  searchOutcome,
}) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    setCount(3);
  }, []);

  const handleShowMore = () => {};

  return (
    <div>
      {" "}
      {!searchLoading &&
        !searchError &&
        searchPerformed &&
        searchData.length > 3 && (
          <button className="search__results">Show More</button>
        )}
    </div>
  );
}

export default SearchResults;
