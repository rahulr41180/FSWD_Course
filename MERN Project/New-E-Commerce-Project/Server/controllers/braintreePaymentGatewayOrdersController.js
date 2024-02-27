
import braintreePaymentGatewayOrdersModel from "../models/braintreePaymentGatewayModel.js";

const gettingAllOrderController = async (req, res) => {

    try {
        const orders = await braintreePaymentGatewayOrdersModel.find({buyer : req.user?._id})
        .populate({path : "products.product", select : "name price"});

        if(orders) {
            res.status(200).send({
                status : true,

                orders : orders
            })
        }
    } catch(error) {
        console.log('error:', error.message);
        res.status(500).send({
            status : false,
            message : "Something went wrong to getting all orders",
            error : error.message

        })

    }
}

const gettingAllUsersOrderController = async (req, res) => {
    try {
        const orders = await braintreePaymentGatewayOrdersModel.find({})
        .populate([{path : "products.product", select : "name price"}, {path : "buyer", select : "name email"}])

        .sort({ createdAt : "-1"})

        if(!orders) {
            return res.status(500).send({
                status : false,
                message : "Something went wrong please try again letter",
                error : error.message
            })
        } else {
            res.status(200).send({
                status : true,

                orders : orders
            })
        }
    } catch(error) {
        res.status(500).send({
            status : false,

            message : "Something went wrong please try again letter",
            error : error.message
        })
    }

}

export {
    gettingAllOrderController,
    gettingAllUsersOrderController
}