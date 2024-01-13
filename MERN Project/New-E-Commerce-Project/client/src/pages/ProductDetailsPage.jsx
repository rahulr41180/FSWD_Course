
import "../css/ProductDetailsPage.css"

import { Layout } from "../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProductDetailsPage = () => {

    const [selectProduct, setSelectProduct] = useState({});
    console.log('selectProduct:', selectProduct)
    const { pId } = useParams();
    // console.log('pId:', pId)

    useEffect(() => {
        getSelectedProduct();
    }, [])

    const getSelectedProduct = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/get-single-product/${pId}`);
            // console.log('data:', data)
            if(data) {

                setSelectProduct(data);
            }
        } catch (error) {

            console.log(error.message);
        }
    }

    return (
        <Layout title={"Product Details || rR e-Com"}>
            <div className="container-fluid p-4 single_product_details" style={{ border : "1px solid blue"}}>
                <div className="row single_product_details_row height100" style={{border : "1px solid blue"}}>
                    <div className="col-md-5 border p-2 height100">Image</div>
                    <div className="col-md-7 border p-2 height100">Details</div>
                </div>
            </div>
            <div className="container-fluid p-4 mt-4 similar_product">

                <p className="text-center fs-4 ms-0">Similar Products</p>
                <div className="row height100 similar_product_list"></div>
            </div>
        </Layout>
    )
}