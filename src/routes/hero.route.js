import express from "express";
import heroController from "../controllers/hero.controller.js";
import auth from "../middlewares/auth.js"
import roleBasedAuth from "../middlewares/roleBasedAuth.js";

const router= express.Router();


router.post("/post",auth,roleBasedAuth, heroController.postHeroData );
router.get("/", heroController.fetchHeroData);
router.put("/update/:id",auth, roleBasedAuth, heroController.updateHeroData);
router.delete("/delete/:id",auth, roleBasedAuth, heroController.deleteHeroData);


export default router;