import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Register a new user
export const registerUser = async (req, res) => {
  console.log("Trying to register a user");
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  console.log("Trying to log in");
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });
    const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
    console.log("Successfully logged in");
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err.message });
    console.log(err);
  }
};
