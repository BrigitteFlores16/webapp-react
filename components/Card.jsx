import { Link } from "react-router-dom";

export default function Card({ image, title, subtitle, description, link }) {
  const cardContent = () => (
    <>
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ objectFit: "cover", height: "200px", width: "100%" }}
        />
      )}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {subtitle && <h6 className="card-subtitle mb-2">{subtitle}</h6>}
        {description && <div className="card-text">{description}</div>}
      </div>
    </>
  );

  return (
    <div className="card h-100">
      {link && link.to ? (
        <Link to={link.to}>{cardContent()}</Link>
      ) : (
        cardContent()
      )}
    </div>
  );
}
