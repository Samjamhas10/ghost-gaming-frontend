import "./Preloader.css";

function Preloader({ isLoading, onSearch }) {
  const handleClick = (e) => {
    onSearch();
  };

  return (
    <>
      {/* <button onClick={handleClick}>Search Reviews Here</button> */}
      {isLoading && (
        <div className="circle-preloader-wrapper">
          <div className="circle-preloader" aria-label="Loading"></div>
          <section className="preloader__title">Searching</section>
        </div>
      )}
    </>
  );
}

export default Preloader;
