import "./Preloader.css";

function Preloader({ isLoading }) {
  return (
    <>
      {isLoading && (
        <div className="circle-preloader-wrapper">
          <div className="circle-preloader" aria-label="Loading"></div>
          <section className="preloader__title"></section>
        </div>
      )}
    </>
  );
}

export default Preloader;
