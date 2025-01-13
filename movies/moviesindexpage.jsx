import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={"/movies/" + movie.id}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
