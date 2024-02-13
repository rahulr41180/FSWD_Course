
import mongoose from "mongoose";

const braintreePaymentGatewayOrderSchema = new mongoose.Schema({
    products : [
        {
            type : mongoose.ObjectId,
            ref : "product"
        }
    ],
    payment : {},
    buyer : {

        type : mongoose.ObjectId,
        ref : "user"
    },
    orderStatus : {
        type : String,
        default : "Not Process",
        enum : ["Not Process", "Processing", "Shipped", "Delivered", "Cancer"]
    }
}, {

    timestamps : true
});


export default mongoose.model("braintree-payment", braintreePaymentGatewayOrderSchema);