import authController from "../controllers/auth.controller.js";
import express from "express";
import validateSchema from "../libs/auth.schema.js";
import validate from "../middlewares/validator.js";

const router = express.Router();

router.post("/register",validate(validateSchema.registerSchema), authController.registerUser);
router.get("/users", authController.fetchUser);
router.post("/login", validate(validateSchema.loginSchema), authController.loginUser);
router.put("/update/:id", authController.updateUser)
router.delete("/delete/:id", authController.deleteUser)

export default router;