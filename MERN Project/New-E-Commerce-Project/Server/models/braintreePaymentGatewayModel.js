
import mongoose from "mongoose";

const braintreePaymentGatewayOrderSchema = new mongoose.Schema({
    products : [
        {
            product : {
                type : mongoose.ObjectId,
                ref : "product"
            },
            quantity : {
                type : Number,

                required : true
            }
        }
    ],
    payment : {},
    buyer : {
        type : mongoose.ObjectId,
        ref : "users"
    },
    
    orderStatus : {
        type : String,
        default : "Not Process",
        enum : ["Not Process", "Processing", "Shipped", "Delivered", "Canceled"]
    }
}, {

    timestamps : true
});


export default mongoose.model("braintree-payment-order", braintreePaymentGatewayOrderSchema);