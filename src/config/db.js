import mongoose from "mongoose";
import config from "./config.js";

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.mongodbUrl);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error.message);

    process.exit(1);
  }
};

export default connectDatabase;