import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

export default function MovieShowPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/movies/${id}`;

    fetch(url)
      .then((res) => {
        if (res.movie) {
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

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container pt-5">
      <Card
        image={movie.image}
        title={movie.title}
        subtitle="Reviews"
        description={movie.reviews.map((review, index) => (
          <div key={index}>
            <strong>{review.name}</strong>: {review.text} (vote: {review.vote})
          </div>
        ))}
      />
    </div>
  );
}
