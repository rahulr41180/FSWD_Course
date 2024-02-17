
import { Layout } from "../../components/Layout/Layout";

import { UserMainu } from "../../components/Layout/UserMainu";
import { useState, useEffect } from "react";
import axios from "axios";

export const UserOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        gettingAllOrders();

    },[])

    const gettingAllOrders = async () => {
        try {
            const { data } = await axios.get("/api/v1/braintree-payment-orders/getting-all-orders");
            console.log('data:', data)
        } catch(error) {
            console.log('error:', error.message);
        }

    }

    return (
        <Layout title={"Your Orders | rR e-Com"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMainu />
                    </div>
                    
                    <div className="col-md-9">
                        <h1>All Orders</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}