import config from "../config/config.js";
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const cookie = req.headers.cookie;

    if (!cookie) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized user!",
      });
    }

    const authToken = cookie
      .split("; ")
      .find((item) => item.startsWith("authToken="))
      ?.substring("authToken=".length);

    if (!authToken) {
      return res.status(401).json({
        success: false,
        message: "Authentication token missing",
      });
    }

    const decoded = jwt.verify(authToken, config.jwtSecret);

    console.log("Decoded JWT:", decoded);

    req.user = decoded;

    console.log("User ID:", req.user._id);

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default auth;