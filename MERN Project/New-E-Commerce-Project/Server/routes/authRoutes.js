
import express from "express";

// router object
const router = express.Router();

import { registerController, loginController, testController } from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// routing 
// Register || Method : POST
router.post("/register", registerController);

// Login || Method : POST
router.post("/login", loginController);

// Test || Method : GET
router.get("/test", requireSignIn, isAdmin, testController);

export default router;