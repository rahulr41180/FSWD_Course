
import productModel from "../models/productModel.js";

// fs module for managing the image file.
import fs from "fs";
import slufigy from "slugify";

// Create Product || METHOD : POST

const createProductController = async (req, res) => {
    try {
        // Before I was getting data from req.body.

        // Here I am using req.fields because we will get the data from form-data.
        // Here, I am getting the data like : name, category etc.. from req.fields.
        // And Here, I am getting the file data like : image, document etc.. from req.files.
        // req.fields comes under express-formidable module.

        const {name, slug, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;

        // Validation

        switch(true) {
            case !name : return res.status(500).send({message : "Name is require"});
            case !description : return res.status(500).send({message : "Description is require"});
            case !price : return res.status(500).send({message : "Price is require"});
            case !category : return res.status(500).send({message : "Category is require"});
            case !quantity : return res.status(500).send({message : "Quantity is require"});
            case !photo && photo.size < 100000: return res.status(500).send({message : "Photo is require and It should be less than 1 MB"});
        }


        const product = new productModel({
            // Here I have create copy of data with the help of spread operator.
            ...req.fields, slug:slugify(name)
        })

        if(photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type
        }

        const result = await product.save();

        res.status(201).send({
            status : true,
            message : "Product has been created successfully",
            product : product,
            result : result
        })


    } catch(error) {
        return res.status(500).send({
            status : false,
            error : error.message,
            message : "Something went wrong! Please try again.."
        })
    }
}


export {
    createProductController
}