import authController from "../controllers/auth.controller.js";
import express from "express";
import validateSchema from "../libs/auth.schema.js";
import validate from "../middlewares/validator.js";
import auth from "../middlewares/auth.js"
import roleBasedAuth from "../middlewares/roleBasedAuth.js";

const router = express.Router();

router.post("/register",validate(validateSchema.registerSchema), authController.registerUser);
router.get("/users", auth,roleBasedAuth,authController.fetchUser);
router.post("/login", validate(validateSchema.loginSchema), authController.loginUser);
router.put("/update/:id", auth, roleBasedAuth, authController.updateUser);
router.delete("/delete/:id", auth, roleBasedAuth, authController.deleteUser);

export default router;