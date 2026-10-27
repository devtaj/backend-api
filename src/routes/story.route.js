import storyController from "../controllers/story.controller.js";
import auth from "../middlewares/auth.js";

import express from "express"

const router= express.Router();


router.post("/post", auth, storyController.createStory);
router.get("/", storyController.fetchStory);
router.put("/update/:id", storyController.updatStory);
router.delete("/delete/:id", storyController.deleteStory)

export default router;