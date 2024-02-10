
import { Layout } from "../components/Layout/Layout";

import "../css/CartPage.css";
import { useCartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const CartPage = () => {

    const [cartItems, setCartItems, handleCart, handleCartQuantity] = useCartContext();

    const [auth] = useAuth();
    // console.log('auth:', auth)

    const navigate = useNavigate();

    useEffect(() => {
        const objectArray = Object.entries(cartItems);
        console.log('Object.entries(cartItems):', Object.entries(cartItems))
        console.log('objectArray:', objectArray)

    },[])

    return (
        <Layout title={"Cart | rR e-Com"}>
            <div className="container-fluid border_blue cp_container d-flex p-0 m-0">
                <div className="width70 border_blue p-4">
                    <div className="table-responsive border_blue">

                        <table className="table border_Silver table-hover table-bordered">
                            <thead className="table-dark">
                                <tr className="align-middle text-center">
                                    <th scope="col" className="width4">#</th>
                                    <th scope="col" className="width18">Product</th>
                                    <th scope="col" className="width10">Item Price</th>
                                    <th scope="col" className="width1">Total Quantity</th>
                                    <th scope="col" className="width10">Total Items Price</th>
                                    <th scope="col" className="width14">Manage Quantity</th>

                                    <th scope="col" className="width10">Delete Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(cartItems)?.map((element, index) => {
                                    return (
                                        <tr key={element[0]} className="align-middle text-center">
                                            <th scope="row">{index + 1}</th>
                                            <th className="cp_table_row_image_box border_black d-flex p-0"><img className="cp_table_row_image border_blue width100 height100" src={`/api/v1/product/get-product-photo/${element[1][0]?._id}`} alt="" /></th>
                                            <th className="fs-6">₹ {element[1][0]?.price}</th>
                                            <th className="fs-6">{element[1][1]}</th>

                                            <th className="fs-6">₹ {element[1][0]?.price * element[1][1]}</th>
                                            <th className="cp_table_row_quantity_manage_box">
                                                <div className="width100 height100 d-flex gap-2 justify-content-center align-items-center">
                                                    <button className="btn btn-danger btn1" onClick={() => { handleCartQuantity(element, "subtract"); }}>-</button>
                                                    <p className="fs-6 m-0 p-0">{element[1][1]}</p>

                                                    <button className="btn btn-primary btn2" onClick={() => { handleCartQuantity(element, "addition"); }}>+</button>
                                                </div>
                                            </th>

                                            <th className="cp_table_row_delete_item">
                                                <div className="width100 heigth100 d-flex justify-content-center align-items-center">
                                                    <button className="btn btn-danger btn3">Remove</button>
                                                </div>
                                            </th>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="width30 border_blue p-4">

                    <p className="fs-5 m-0 mb-2">Hi {auth?.token && auth?.user?.name}</p>
                    <p className="fs-5 m-0 mb-2">Total items in your cart : {Object.keys(cartItems)?.length}</p>
                </div>
            </div>
        </Layout>
    )

}