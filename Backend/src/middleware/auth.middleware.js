import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    // Access the JWT from the cookies
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Provided" });
    }

    // Verify the JWT token
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decode);

    if (!decode) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    // Find the user based on the decoded userId
    const user = await User.findById(decode.userID).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // Attach the user to the request object
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in ProtectRoute middleware", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
