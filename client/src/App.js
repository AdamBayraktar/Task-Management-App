import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "components/NavBar";
import Login from "pages/Login";
import Register from "pages/Register";
import Dashboard from "pages/Dashboard";
import Landing from "pages/Landing";
import Test from "pages/Test";

// Lazy-Load 404 Page
const NotFound = React.lazy(() => import("pages/NotFound"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
