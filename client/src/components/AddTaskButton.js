import React from "react";
import "styles/components/AddTaskButton.css";

const AddTaskButton = ({ onClick }) => {
  return (
    <button className="add-task-btn" onClick={onClick}>
      +
    </button>
  );
};

export default AddTaskButton;
