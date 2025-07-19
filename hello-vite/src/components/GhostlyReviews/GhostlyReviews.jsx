import { useState } from "react";
import { Reviews } from "../../utils/constants.js";
import Preloader from "../Preloader/Preloader.jsx";
import "./GhostlyReviews.css";

function GhostlyReviews() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (game, value) => {
    setIsLoading(true);
    // API call
    // setIsLoading(false);
  };

  console.log(Reviews);
  return (
    <div>
      <Preloader isLoading={isLoading} onSearch={handleSearch} />
      <section className="ghostly__reviews">
        <h1 className="reviews__title">Ghostly Reviews:</h1>
        <div className="reviews__grid">
          {Reviews.map((review) => (
            <div key={review.id} className="review__card">
              <h3 className="review__gamer">{review.gamer}</h3>
              <p className="review__text">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="reviews__image-1"></div>
      </section>
    </div>
  );
}

export default GhostlyReviews;
