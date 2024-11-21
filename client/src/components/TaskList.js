import React from "react";
import "../styles/main.css";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p className={`status ${task.completed ? "" : "pending"}`}>
            {task.completed ? "Completed" : "Pending"}
          </p>
          <button className="edit" onClick={() => onEdit(task)}>
            Edit
          </button>
          <button className="delete" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
