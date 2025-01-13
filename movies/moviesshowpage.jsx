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
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <h2>Reviews:</h2>
      <ul>
        {movie.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.name}</strong>: {review.text} (vote: {review.vote})
          </li>
        ))}
      </ul>
    </div>
  );
}
