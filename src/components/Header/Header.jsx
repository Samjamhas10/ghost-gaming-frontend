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
        />
        <h1 className="header__title"></h1>
      </div>
      {currentUser ? (
        <div className="header__current-user">{currentUser.name}</div>
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
