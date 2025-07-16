// import components
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import Main from "../Main/Main";
import Library from "../Library/Library";
import Footer from "../Footer/Footer";

// import styles
import "./App.css";

function App() {
  return (
    <div className="app__wrapper">
      <div className="full__background">
        <Navigation />
        <Header />
        <SearchBar />
        <Main />
        <Library />
        <Footer />
      </div>
    </div>
  );
}

export default App;
