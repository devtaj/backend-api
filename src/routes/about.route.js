import express from "express";
import aboutController from "../controllers/about.controller.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import auth from "../middlewares/auth.js";



const router= express.Router();


router.post("/post", auth, roleBasedAuth, aboutController.createAbout);
router.get("/", aboutController.fetchAbout);
router.put("/update/:id", aboutController.updateAbout);
router.delete("/delete/:id", aboutController.deleteAbout);

export default router;