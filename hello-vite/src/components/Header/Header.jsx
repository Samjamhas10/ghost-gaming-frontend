import "./Header.css";

function Header({ openLoginModal, openRegisterModal, currentUser }) {
  return (
    <header className="header">
      <div>
        <h1 className="header__title"></h1>
      </div>
      {currentUser ? (
        <div>{currentUser.name}</div>
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
