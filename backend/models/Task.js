import mongoose from "mongoose";

export const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const Task = mongoose.model("Task", TaskSchema);
