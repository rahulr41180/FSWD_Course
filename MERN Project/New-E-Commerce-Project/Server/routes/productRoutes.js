
import express from "express";

const router = express.Router();
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import { createProductController } from "../controllers/productController.js";
// formidable is use for managing image file.
import formidable from "express-formidable";

// Create Product || METHOD : POST
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

export default router;