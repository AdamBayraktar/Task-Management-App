// import { app } from "./app.js";
import express from "express";
import path from "path";

export const app = express();
const port = 3000;

app.use(express.static(path.join("..", "task-manager-frontend/build")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
