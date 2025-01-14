import { Link } from "react-router-dom";

export default function Card({ image, title, director, abstract, link }) {
  return (
    <div className="card-container">
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body">
        {title && (
          <h5 className="card-title">
            <strong>{title}</strong>
          </h5>
        )}
        {director && (
          <div className="card-text">
            <strong>Director:</strong> {director}
          </div>
        )}
        {abstract && (
          <div className="card-text">
            <strong>Abstract:</strong> {abstract}
          </div>
        )}
      </div>
      {link && link.to && (
        <div className="card-footer">
          <Link to={link.to} className="btn btn-primary">
            Vai al Movie
          </Link>
        </div>
      )}
    </div>
  );
}
