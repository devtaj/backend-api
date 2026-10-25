import express from "express";
import config from "./config/config.js";   
import authRoutes from "./routes/auth.route.js"; 
import connectDatabase from "./config/db.js";
import logger from "./middlewares/logger.js";

const app = express();
app.use(express.json());

connectDatabase();

app.use("/api/auth", logger, authRoutes);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});