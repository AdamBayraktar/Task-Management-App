import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "styles/components/NavBar.css";

const Navbar = () => {
  const [isLogged, setLogged] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogged(false);
  };

  return (
    <nav className="navbar">
      {!isLogged ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/Register">Register</Link>
        </>
      ) : (
        <>
          <Link to="/dashboard">Tasks</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/" onClick={handleLogout} className="logout">
            Logout
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
