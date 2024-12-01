import React from "react";
import { Link } from "react-router-dom";
import "styles/components/NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {!localStorage.getItem("token") ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/Register">Register</Link>
        </>
      ) : (
        <>
          <Link to="/dashboard">Tasks</Link>
          <Link to="/profile">Profile</Link>
          <Link
            to="/logout"
            onClick={() => localStorage.removeItem("token")}
            className="logout"
          >
            Logout
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
