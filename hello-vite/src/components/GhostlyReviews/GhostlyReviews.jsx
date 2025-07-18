import { Link } from "react-router-dom";
import { Reviews } from "../../utils/constants.js";
import "./GhostlyReviews.css";

function GhostlyReviews() {
  console.log(Reviews)
  return (
    <div className="ghostly__reviews">
      <h1 className="reviews__title">Ghostly Reviews:</h1>
      <div className="reviews__image-1"></div>
      {/* Add the review styling and key*/}
      {Reviews.map((review) => (
        <div> review.id</div>
      ))}
      <p className="reviews__text">{Reviews.review}</p>
      <div></div>
    </div>
  );
}

export default GhostlyReviews;
