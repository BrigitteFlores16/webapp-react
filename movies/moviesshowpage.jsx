import { useState, useEffect } from "react";
export default function movieIndexPage() {
  const [movie, setmovie] = useState(null);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL + "/movies/";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setmovie(data.movie);
      });
  }, []);
  return (
    <div className="container pt-5">
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie) => (
          <link key={movie.id}>{movie.title}</link>
        ))}
      </ul>
    </div>
  );
}
