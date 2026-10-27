import express from "express";
import auth from "../middlewares/auth.js";
import cultureAndTraditionController from "../controllers/cultureAndTradition.controller.js";

const router= express.Router();

router.post("/post",auth, cultureAndTraditionController.createCultureandTraditins);
router.get("/", cultureAndTraditionController.fetchCultureandTraditins);
router.put("/update/:id", cultureAndTraditionController.updateCultureandTraditions);
router.delete("/delete/:id", cultureAndTraditionController.deleteCultureandTraditions);
export default router;
