import "./SearchBar.css";
import searchIcon from "../../assets/search.svg";

function SearchBar() {
  return (
    <div className="search">
      <input className="search__bar" placeholder="Search"></input>
      <img src={searchIcon} className="search__icon" alt="search" />
    </div>
  );
}

export default SearchBar;
