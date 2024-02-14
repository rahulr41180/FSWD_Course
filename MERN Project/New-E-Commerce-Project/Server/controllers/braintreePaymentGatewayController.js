
import dotenv from "dotenv";

dotenv.config();
import braintree from "braintree";
import orderModel from "../models/braintreePaymentGatewayModel.js";
// Payment Gateway

var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BRAINTREE_MERCHANTID,
    publicKey: process.env.BRAINTREE_PUBLICKEY,

    privateKey: process.env.BRAINTREE_PRIVATEKEY
})


const braintreePaymentClientTokenGenerateController = async (req, res) => {
    try {
        // console.log("req.user :", req.user);

        gateway.clientToken.generate({
            
        }, (error, response) => {
            if (error) {
                return res.status(500).send({
                    status: false,
                    message: "Something went wrong please try again letter"
                })
            } else {

                res.status(200).send({
                    status: true,
                    clientToken: response
                })
            }
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: error.message
        })
    }
}

const braintreePaymentReceiveFromClientController = async (req, res) => {

    try {
        const { cart, braintreeNonce, totalPrice } = req.body;
        const newTransaction = gateway.transaction.sale({
            amount: totalPrice,
            paymentMethodNonce: braintreeNonce,
            options: {
                submitForSettlement: true
            }
        }, (error, result) => {

            console.log("result :", result);
            if (error) {
                return res.status(500).send({
                    status: false,
                    message: "Something went wrong in payment. Please try again letter",
                    error: error.message
                })
            } else {
                const newOrder = new orderModel({

                    products: cart,
                    payment: result,
                    buyer: req.user._id,
                }).save();
                res.status(201).send({
                    status: true,
                    order: newOrder
                })
            }

        })
    } catch (error) {

        res.status(500).send({
            status: false,
            message: "Something went wrong please try again letter",
            error: error.message
        })
    }
}

export {
    braintreePaymentClientTokenGenerateController,

    braintreePaymentReceiveFromClientController
}