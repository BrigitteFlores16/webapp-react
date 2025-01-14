import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function MovieIndexPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_API_URL + "/movies";
    console.log(url);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div className="container pt-5">
      <h1>Movies List</h1>
      <div className="row justify-content-start">
        {movies.map((movie) => (
          <div className="col-md-4 col-sm-6 col-12 mb-4" key={movie.id}>
            <Card
              image={movie.image}
              title={movie.title}
              link={{ to: `/movies/${movie.id}` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
