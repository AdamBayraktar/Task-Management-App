import { Task } from "../models/Task.js";

// Get all tasks for the logged-in user
export const getTasks = async (req, res) => {
  console.log("Trying to get tasks");
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
    console.log("Tasks retrieved successfully!");
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving tasks", error: err.message });
    console.log("Error retrieving tasks");
    console.log(err);
  }
};

// Create a new task
export const createTask = async (req, res) => {
  console.log("Trying to create a task");
  const { title, description } = req.body;
  try {
    const task = new Task({ title, description, user: req.user.id });
    await task.save();
    res.status(201).json(task);
    console.log("Task created successfully!");
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating task", error: err.message });
    console.log("Error creating task");
    console.log(err);
  }
};

// Update a task
export const updateTask = async (req, res) => {
  console.log("Trying to update a task");
  console.log(req.params);
  console.log(req.body);
  // console.log(req);
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );
    res.json(task);
    console.log("Successfully updated task with id: " + id);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating task", error: err.message });
    console.log("Error updating task");
    console.log(err);
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  console.log("Trying to delete a task");
  console.log(req.params);
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: err.message });
    console.log("Error deleting task");
    console.log(err);
  }
};
