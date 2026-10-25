import config from "../config/config.js";
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const cookie = req.headers.cookie;

    const authToken = cookie.split("=")[1];
    if (!cookie) {
      return res.json("Unauthorized user!");
    }
    if (!authToken) {
      return res.json("Unauthorized user!");
    }
    const data = jwt.verify(authToken, config.jwtSecret);
    console.log(data);
    req.user = data;
    next();
  } catch (err) {
    return res.json("Unauthorized user!");
  }
};

export default auth;
