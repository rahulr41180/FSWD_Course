
import express from "express";

const router = express.Router();
import { 
    gettingAllOrderController 
} from "../controllers/braintreePaymentGatewayOrdersController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

// Getting All Respective Order Of User
router.get("/getting-all-orders", requireSignIn, gettingAllOrderController);


export default router;