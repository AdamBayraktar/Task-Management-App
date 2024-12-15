import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { router as taskRoutes } from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

export const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

// Routes
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// Serve static assets if in production
app.use(express.static(path.join(__dirname, "..", "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
