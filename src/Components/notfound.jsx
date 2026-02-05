// src/pages/NotFound.jsx
//404 page or notfound page
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-page">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <Link to="/" className="home-link">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
