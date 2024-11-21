import React from "react";
import "../styles/main.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/tasks">Tasks</a>
      <a href="/profile">Profile</a>
      <a href="/logout" className="logout">
        Logout
      </a>
    </nav>
  );
};

export default Navbar;
