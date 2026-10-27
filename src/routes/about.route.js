import express from "express";
import aboutController from "../controllers/about.controller.js";
import aboutService from "../services/about.service.js";


const router= express.Router();


router.post("/post", aboutController.createAbout);
router.get("/", aboutController.fetchAbout);
router.put("/update/:id", aboutController.updateAbout);
router.delete("/delete/:id", aboutController.deleteAbout);

export default router;