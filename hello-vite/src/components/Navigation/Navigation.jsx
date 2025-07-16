import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <div className="nav__bar">
        <ul className="nav__list">
          <li>
            <a href="/" className="nav__item nav__home" aria-label="Home"></a>
          </li>
          <li>
            <a
              href="/user"
              className="nav__item nav__user"
              aria-label="User"
            ></a>
          </li>
          <li>
            <a
              href="/top-games"
              className="nav__item nav__top-games"
              aria-label="Top Games"
            ></a>
          </li>
          <li>
            <a
              href="/reviews"
              className=" nav__item nav__reviews"
              aria-label="Reviews"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
