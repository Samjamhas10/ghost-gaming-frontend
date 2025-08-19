import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

function Header({
  openLoginModal,
  openRegisterModal,
  currentUser,
  handleSearch,
  searchData,
  searchLoading,
  searchError,
  searchPerformed,
  handleSaveGame,
  closeSearchResultsModal,
}) {
  return (
    <header className="header">
      <div>
        <SearchBar
          handleSearch={handleSearch}
          searchData={searchData}
          searchLoading={searchLoading}
          searchError={searchError}
          searchPerformed={searchPerformed}
          handleSaveGame={handleSaveGame}
          closeSearchResultsModal={closeSearchResultsModal}
        />
      </div>
      {currentUser ? (
        <div className="header__user">
          <img
            src={currentUser.avatarUrl}
            alt="Current User's Avatar"
            style={{ width: "50px" }}
            className="header__current-avatar"
          ></img>
          <div className="header__current-user">{currentUser.username}</div>
        </div>
      ) : (
        <div className="header__buttons">
          <button
            className="header__signup"
            onClick={openRegisterModal}
            aria-label="Sign Up"
          >
            Signup
          </button>
          <button
            className="header__login"
            onClick={openLoginModal}
            aria-label="Log In"
          >
            Login
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
