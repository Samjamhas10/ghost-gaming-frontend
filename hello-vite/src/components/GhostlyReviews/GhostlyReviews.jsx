import { Reviews } from "../../utils/constants.js";
import "./GhostlyReviews.css";

function GhostlyReviews() {
  console.log(Reviews);
  return (
    <section className="ghostly__reviews" aria-lable="Game Reviews">
      <h1 className="reviews__title">Ghostly Reviews:</h1>
      {/* Add the review styling and key*/}
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
  );
}

export default GhostlyReviews;
