import React, { useState } from "react";
import "../styles/main.css";

const TaskModal = ({ isVisible, onClose, onSave, task }) => {
  const [form, setForm] = useState(
    task || { title: "", description: "", completed: false }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="modal">
      <h2>{task ? "Edit Task" : "Add Task"}</h2>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Task Title"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Task Description"
      ></textarea>
      <button onClick={handleSubmit}>
        {task ? "Save Changes" : "Add Task"}
      </button>
      <button
        onClick={onClose}
        style={{ backgroundColor: "#ccc", color: "#000" }}
      >
        Cancel
      </button>
    </div>
  );
};

export default TaskModal;
