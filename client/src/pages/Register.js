import React, { useState } from "react";
import API from "api";
import { Link } from "react-router-dom";
import classes from "styles/pages/Register.module.css";

const Register = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await API.post("/users/register", form);
      setMessage("Registration successful! You can now log in.");
      setForm({ username: "", password: "" });
      setTimeout(() => (window.location = "/login"), 3000);
    } catch (err) {
      setMessage("Error during registration." + err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes["register-page"]}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          required
          title="test"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
          title="Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)."
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </button>
        <Link to="/login" className={`btn ${classes["btn-login"]}`}>
          Login
        </Link>
      </form>
      {message && (
        <p
          className={
            message.startsWith("Error") ? classes.error : classes.success
          }
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Register;
