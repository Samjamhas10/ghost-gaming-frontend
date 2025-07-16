// import components
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

// import styles
import "./App.css";

function App() {
  return (
    <div classNae="app__wrapper">
      <div className="full__background">
        <Header />
        <Navigation />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
