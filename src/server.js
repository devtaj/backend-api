import express from "express";
import config from "./config/config.js";   
import authRoutes from "./routes/auth.route.js"; 
import connectDatabase from "./config/db.js";
import logger from "./middlewares/logger.js";
import heroRoute from "./routes/hero.route.js";
import aboutRoute from "./routes/about.route.js";
import cultureAndTraditionRoute from "./routes/cultureAndTradition.route.js"; 
import storyRoute from "./routes/story.route.js";
import multer from "multer";
import connectCloudinary from "./config/cloudinary.js";


const app = express();
app.use(express.json());

const upload= multer({dest:'uploads'});



connectDatabase();
connectCloudinary();

app.use("/api/tajpuriya-samaj/auth", logger, authRoutes);
app.use("/api/tajpuriya-samaj/hero", logger,upload.array("images", 5),heroRoute);
app.use("/api/tajpuriya-samaj/about",logger, aboutRoute);
app.use("/api/tajpuriya-samaj/culture-and-tradition", logger, cultureAndTraditionRoute);
app.use("/api/tajpuriya-samaj/stories", storyRoute)
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});