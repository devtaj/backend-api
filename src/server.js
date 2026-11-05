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

// const upload= multer({dest:'uploads'});
const upload= multer({storage:multer.memoryStorage()});



connectDatabase();
connectCloudinary();

app.use("/api/tajpuriya-samaj/auth", logger, upload.single("image"), authRoutes);
app.use("/api/tajpuriya-samaj/hero", logger,upload.array("images", 5),heroRoute);
app.use("/api/tajpuriya-samaj/about",logger, upload.array("images", 5), aboutRoute);
app.use("/api/tajpuriya-samaj/culture-and-tradition", upload.array("images", 5), logger, cultureAndTraditionRoute);
app.use("/api/tajpuriya-samaj/stories",upload.array("images", 5),logger,  storyRoute);
app.get("/", (req, res) => {
  res.json({
    status:"ok",
    version:"0.1.0",
    port:config.port,
    project:"tajpuriya_samaj"
  })
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});