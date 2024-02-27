
import express from "express";

const router = express.Router();
import { 
    gettingAllOrderController,
    gettingAllUsersOrderController
} from "../controllers/braintreePaymentGatewayOrdersController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// Getting All Respective Order Of User
router.get("/getting-user-orders", requireSignIn, gettingAllOrderController);


// Getting All Users Orders For Admin
router.get("/getting-all-users-orders", requireSignIn, isAdmin,  gettingAllUsersOrderController);

export default router;