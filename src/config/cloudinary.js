
import cloudinary from "cloudinary";
import config from "./config.js";

const connectCloudinary = () => {
  cloudinary.v2.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinarySecretKey,
  });

  console.log("Cloudinary configured successfully");
};

export default connectCloudinary;
