import "./Library.css";

function Library() {
  return (
    <div className="library__sidebar">
      <p className="library">Library</p>
      <div className="library__options">
        <ul className="library__games">
          <li>
            <a
              className="library__games library__minecraft"
              aria-label="Minecraft"
            ></a>
          </li>
          <li>
            <a className="library__games library__cod"></a>
          </li>
          <li>
            <a className="library__games library__creed"></a>
          </li>
          <li>
            <a className="library__games library__fortnite"></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Library;
