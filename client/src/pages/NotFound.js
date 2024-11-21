import React from "react";
import { Link } from "react-router-dom";
import "styles/pages/NotFound.css";
import NotFoundImage from "assets/404.svg";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <img
        src={NotFoundImage}
        alt="Page Not Found"
        className="not-found-image"
      />
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
