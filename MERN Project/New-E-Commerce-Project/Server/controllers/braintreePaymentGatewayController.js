
import braintree from "braintree";

// Payment Gateway

var gateway = new braintree.BraintreeGateway({
    environment : braintree.Environment.Sandbox,
    merchantId : "9w7qxt98s62m69jt",
    publicKey : "9phvxqxd67x8f4fj",
    privateKey : "17dd428806a0c30c605f7f2e6e7dbc44"
})


const braintreePaymentClientTokenGenerateController = async (req, res) => {
    try {
        gateway.clientToken.generate({}, (error, response) => {
            if(error) {
                return res.status(500).send({
                    status : false,
                    message : "Something went wrong please try again letter"
                })
            } else {

                res.status(200).send({
                    status : true,
                    clientToken : response
                })
            }
        })
    } catch(error) {
        res.status(500).send({
            status : false,
            message : error.message
        })
    }
}

const braintreePaymentReceiveFromClientController = async (req, res) => {

    try {

    } catch(error) {

        res.status(500).send({
            status : false,
            message : "Something went wrong please try again letter",
            error : error.message
        })
    }
}

export {
    braintreePaymentClientTokenGenerateController,

    braintreePaymentReceiveFromClientController
}