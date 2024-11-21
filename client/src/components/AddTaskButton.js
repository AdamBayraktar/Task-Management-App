import React from "react";
import "../styles/main.css";

const AddTaskButton = ({ onClick }) => {
  return (
    <button className="add-task-btn" onClick={onClick}>
      +
    </button>
  );
};

export default AddTaskButton;
