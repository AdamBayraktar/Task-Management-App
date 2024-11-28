import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "styles/pages/Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard"); // Redirect to dashboard if logged in
    }
  }, [navigate]);

  return (
    <div className="landing-page">
      <h1>Welcome to Task Manager</h1>
      <p>Organize your tasks and boost your productivity.</p>
      <div className="actions">
        <Link to="/login" className="btn btn-primary">
          Log In
        </Link>
        <Link to="/register" className="btn btn-secondary">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Landing;
