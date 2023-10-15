
import express from "express";

const router = express.Router();
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import { 
    createProductController, 
    getProductController, 
    getSingleProductController, 
    getProductPhotoController,
    deleteProductController,
    updateProductController
} from "../controllers/productController.js";

// formidable is use for managing image file.
import formidable from "express-formidable";

// Create Product || METHOD : POST
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

// Getting Product || METHOD : GET
router.get("/get-product", getProductController);


// Getting Single Product || METHOD : GET
router.get("/get-single-product/:slug", getSingleProductController);

// Getting Product Photo || METHOD : GET
router.get("/get-product-photo/:pid", getProductPhotoController);

// Deleting Product || METHOD : DELETE
router.delete("/delete-product/:pId", requireSignIn, isAdmin,  deleteProductController);


// Updating Product || METHOD : PUT
router.put("/update-product/:pId", requireSignIn, isAdmin, formidable(), updateProductController);

export default router;