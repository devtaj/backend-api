import dotenv from "dotenv";

dotenv.config();

console.log("MongoDB URL loaded:", Boolean(process.env.MONGODB_URL));

const config = {
  port: process.env.PORT || 8000,
  mongodbUrl: process.env.MONGODB_URL || "",
  jwtSecret:process.env.JWT_SECRET || ""
};

export default config;