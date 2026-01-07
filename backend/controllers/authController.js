import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) return res.json({ msg: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);

    user = await User.create({
      name,
      email,
      password: hashed,
    });

    res.json({
      msg: "Registered",
      token: generateToken(user._id),
      user,
    });
  } catch (e) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.json({ msg: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ msg: "Invalid credentials" });

    res.json({
      msg: "Logged in",
      token: generateToken(user._id),
      user,
    });
  } catch (e) {
    res.status(500).json({ msg: "Server error" });
  }
};

