import "./Library.css";

function Library() {
  return (
    <div className="library__sidebar">
      <p className="library__title">Ghost Library:</p>
      <div className="library__options">
        <ul className="library__games">
          <li>
            <a
              className="library__games library__minecraft"
              aria-label="Minecraft"
            ></a>
            <p>Minecraft</p>
          </li>
          <li>
            <a className="library__games library__fall-guys"></a>
            <p>Fall Guys</p>
          </li>
          <li>
            <a className="library__games library__creed"></a>
            <p>Assassin Creed 2</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Library;
