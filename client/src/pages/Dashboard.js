import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "components/TaskList";
import AddTaskButton from "components/AddTaskButton";
import TaskModal from "components/TaskModal";
import API from "api";
import "styles/pages/Dashboard.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      navigate("/"); // Redirect to landing page if logged in
    }
  }, [navigate]);

  // Fetch tasks on load
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await API.get("/tasks");
      setTasks(data);
      console.log("fds");
    };
    fetchTasks();
  }, []);

  const handleAddTask = () => {
    setCurrentTask(null);
    setShowModal((val) => !val);
  };

  const handleSaveTask = async (task) => {
    if (task._id) {
      await API.put(`/tasks/${task.id}`, task); // Update
    } else {
      await API.post("/tasks", task); // Create
    }
    const { data } = await API.get("/tasks");
    setTasks(data);
    setShowModal(false);
    setCurrentTask(null);
  };

  const handleDeleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    const { data } = await API.get("/tasks");
    setTasks(data);
  };

  return (
    <div className="dashboard">
      <h1>Task Dashboard</h1>
      <TaskList
        tasks={tasks}
        onEdit={(task) => {
          setCurrentTask(task);
          setShowModal(true);
        }}
        onDelete={handleDeleteTask}
      />
      <AddTaskButton onClick={handleAddTask} />
      <TaskModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveTask}
        task={currentTask}
      />
    </div>
  );
};

export default Dashboard;
