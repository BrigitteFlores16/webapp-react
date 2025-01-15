import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../components/Card";
import ReviewsForm from "../components/ReviewsForm";

export default function MovieShowPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/movies/${id}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [id]);

  const updateReviews = (reviews) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      reviews,
    }));
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-show-page container pt-5">
      <Card image={movie.image} title={movie.title} />
      <hr />
      <div className="reviews mt-4">
        <h3>Reviews</h3>
        {movie.reviews && movie.reviews.length > 0 ? (
          movie.reviews.map((review, index) => (
            <div key={index} className="review-item mb-3">
              <strong>{review.name}</strong>: {review.text}
              <div className="stars">
                {Array.from({ length: review.vote }, (_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
                {Array.from({ length: 5 - review.vote }, (_, i) => (
                  <span key={i}>&#9734;</span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div>No reviews yet.</div>
        )}
      </div>
      <ReviewsForm movieId={id} updateReviews={updateReviews} />

      <div className="mt-4">
        <Link to="/movies" className="btn btn-secondary">
          Ritorna alla lista
        </Link>
      </div>
    </div>
  );
}
