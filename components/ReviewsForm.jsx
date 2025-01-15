import { useState } from "react";

export default function ReviewsForm({ movieId, updateReviews }) {
  const formInitialData = {
    name: "",
    vote: "",
    text: "",
  };

  const [reviewForm, setReviewForm] = useState(formInitialData);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (validateForm(reviewForm)) {
      const storeReviewUrl =
        import.meta.env.VITE_API_URL + `/movies/${movieId}/reviews`;

      fetch(storeReviewUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewForm),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "OK") {
            updateReviews((prevReviews) => [
              ...prevReviews,
              { ...reviewForm, vote: parseInt(reviewForm.vote) },
            ]);

            setReviewForm(formInitialData);
            window.location.reload();
          } else {
            alert(data.message);
          }
        });
    } else {
      alert("Form non valido");
    }
  };

  const validateForm = ({ name, text, vote }) => {
    const nameWithoutSpaces = name.trim();
    if (!nameWithoutSpaces || nameWithoutSpaces.includes(" ")) return false;
    if (!text) return false;
    if (isNaN(parseInt(vote)) || vote < 1 || vote > 5) return false;

    return true;
  };

  const handleFormChange = (e) => {
    setReviewForm({
      ...reviewForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="row align-items-end g-3 mb-4"
      onSubmit={handleReviewSubmit}
    >
      <div className="col-3">
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={reviewForm.name}
          onChange={handleFormChange}
          required
          pattern="\S+"
          title="Il nome non può contenere spazi"
        />
      </div>
      <div className="col-3">
        <label htmlFor="vote" className="form-label">
          Voto
        </label>
        <input
          type="number"
          min="1"
          max="5"
          required
          className="form-control"
          id="vote"
          name="vote"
          value={reviewForm.vote}
          onChange={handleFormChange}
        />
      </div>
      <div className="col-4">
        <label htmlFor="text" className="form-label">
          Testo
        </label>
        <input
          type="text"
          className="form-control"
          id="text"
          name="text"
          value={reviewForm.text}
          onChange={handleFormChange}
        />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary">
          Invia
        </button>
      </div>
    </form>
  );
}
