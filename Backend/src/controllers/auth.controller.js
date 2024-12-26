import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All FIelds Are Required!" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password Must be at least 6 characters" });
    }
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email Already Exists" });

    const salt = await bcrypt.genSalt(10);
    const HashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: HashedPass,
    });
    if (newUser) {
      // geneerate new token JWT
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
      //   res.send("signup route");
    } else {
      res.status(400).json({ message: "Invalid User Data " });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const login = (req, res) => {
  res.send("signup route");
};
export const logout = (req, res) => {
  res.send("signup route");
};
