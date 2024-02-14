
import { Layout } from "../components/Layout/Layout";

import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import DropIn from "braintree-web-drop-in-react";
import { useCartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Checkout = () => {

    const [clientToken, setClientToken] = useState("");
    // console.log('clientToken:', clientToken)
    const [cartItems, setCartItems, handleCart, handleCartQuantity, handleRemoveItem, totalCartPriceQuantity, setTotalCartPriceQuantity] = useCartContext();
    const [auth] = useAuth();
    const { tqtp } = useParams();
    // console.log('tqtp:', tqtp);
    const [instance, setInstance] = useState("");
    // console.log('instance:', instance)
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const gettingClientToken = async () => {
            try {
                const { data } = await axios.get("/api/v1/payment/braintree-payment/client-token-generate");
                // console.log('data:', data)
                if (data.status) {
                    setClientToken(data?.clientToken?.clientToken);
                    setLoading(true);

                }
            } catch (error) {
                console.log('error:', error.message);
                toast.error(error.response.data.message);

            }
        }
        gettingClientToken();
    }, [auth])

    const handlePayment = () => {
        console.log("payment");

    }

    return (
        <Layout title={"Checkout | rR e-Com"}>
            <div className="container-fluid c_container p-2 d-flex">
                <div className="width60 height100 border_blue p-2">

                    <h4 className="text-center m-0 mb-2">Please complete your payment for selected products</h4>
                    <div className="width80 height70 border_Silver p-3 m-auto">
                        {clientToken ?
                            <DropIn
                                options={{
                                    authorization: clientToken,
                                    paymentOptionPriority: ["card", "paypal"],
                                    paypal: { flow: "vault" },
                                }}
                                onInstance={(instance) => { return setInstance(instance) }}

                            />
                            :
                            ""
                        }
                        <button className="btn btn-primary" onClick={handlePayment} disabled={""}>Make Payment</button>

                    </div>
                </div>

                <div className="width40 height100 border_blue p-3">
                    {auth?.user ? <p className="fs-5 m-0 mb-2">Hi {auth?.token && auth?.user?.name}</p> : ""}
                    <p className="fs-5 m-0 mb-2">Total item quanties in your cart : {tqtp?.split("-")[0]}</p>
                    <p className="fs-5 m-0 mb-2">Total Price : ₹ {tqtp?.split("-")[1]}</p>
                </div>
            </div>
        </Layout>
    )
}