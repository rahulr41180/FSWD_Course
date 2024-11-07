
// A special method, "all" is provided by Express to handle all types of http methods at a particular route using the same function.

// http://localhost:8080/product/getting-all-products
// Here "/getting-all-products" is the subroute of "/product".

import express from "express";

const app = express();

app.all("/text", async (req, res) => {
    try {
        res.status(200).send({
            status : true    
        })

    } catch(error) {
        console.log(error.message);
    }
})

app.listen(8080, async () => {
    try {
        console.log("Server is listening on port 8080");
    } catch(error) {

        console.log(error.message);
    }
})