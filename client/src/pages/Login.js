import React, { useState } from "react";
import API from "api";
import { Link } from "react-router-dom";
// styles
import classes from "styles/pages/Login.module.css";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/users/login", form);
      localStorage.setItem("token", data.token);
      window.location = "/dashboard"; // Redirect to dashboard
    } catch (err) {
      setError(err.response.data.message || "Login failed");
    }
  };

  return (
    <div className={classes["login-page"]}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && <p className="error">{error}</p>}
        <button className={classes["btn-submit"]} type="submit">
          Login
        </button>
        <Link to="/register" className={`btn ${classes["btn-register"]}`}>
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
