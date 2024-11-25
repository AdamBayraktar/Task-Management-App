// import { app } from "./app.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import run from "./db.js";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

export const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "..", "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  run();
});
