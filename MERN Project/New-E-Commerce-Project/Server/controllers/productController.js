
import productModel from "../models/productModel.js";

// fs module for managing the image file.
import fs from "fs";
import slugify from "slugify";

// Create Product || METHOD : POST

const createProductController = async (req, res) => {
    try {
        // Before I was getting data from req.body.

        // Here I am using req.fields because we will get the data from form-data.
        // Here, I am getting the data like : name, category etc.. from req.fields.
        // And Here, I am getting the file data like : image, document etc.. from req.files.
        // req.fields is comes under express-formidable module.

        // console.log('req.fields:', req.fields)
        const {name, slug, description, price, category, quantity, shipping } = req.fields;
        // console.log('req.files:', req.files)
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

        // return;
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

// Getting All Product

const getProductController = async (req, res) => {
    try {
        const product = await productModel.find({})

        .populate("category")
        .select("-photo")
        .limit(12)
        .sort({createdAt : -1});

        res.status(200).send({
            status : true,
            message : "Successfully getting all the products",
            product_count : product.length,

            product : product,
        })

    } catch(error) {
        return res.status(500).send({
            status : false,
            error : error.message,
            message : "Something went wrong! Please try again.."   
        });
        
    }
}

// Getting Single Product

const getSingleProductController = async (req, res) => {
    try {
        const product = await productModel
        .findOne({slug : req.params.slug})

        .populate("category")
        .select("-photo");

        res.status(200).send({
            status : true,
            message : "Successfully getting single product..",
            product : product
        })


    } catch(error) {
        return res.status(500).send({
            status : false,
            error : error.message,
            message : "Something went wrong! Please try again.." 
        })
    }
}


// Getting Product Photo

const getProductPhotoController = async (req, res) => {
    try {
        const productPhoto = await productModel.findById(req.params.pid)
        .select("photo");
        console.log('productPhoto:', productPhoto)
        
        if(productPhoto.photo.data) {

            // console.log('productPhoto:', productPhoto.photo.data);
            // console.log(true);
            // console.log('productPhoto.photo.contentType:', productPhoto.photo.contentType)
            res.set("Content-type", productPhoto.photo.contentType);
            // console.log('res.set("Content-type", productPhoto.photo.contentType):', res.set("Content-type", productPhoto.photo.contentType))
            return res.status(200).send(
                productPhoto.photo.data
            )
        }

    } catch(error) {
        return res.status(500).send({
            status : false,
            error : error.message,
            message : "Something went wrong! Please try again.." 
        })
    }
}


// Deleting Product

const deleteProductController = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.pId)
        .select("-photo");

        return res.status(200).send({
            success : true,

            message : "Product has been deleted successfully",
            product : product
        })

    } catch(error) {
        return res.status(500).send({
            status : false,
            error : error.message,
            message : "Something went wrong! Please try again.."

        })
    }
}

// Updating Product

const updateProductController = async (req, res) => {
    try {
        const {name, slug, description, price, category, quantity, shipping } = req.fields;

        const { photo } = req.files;
        // console.log('photo:', photo)

        switch(true) {
            case !name : return res.status(500).send({message : "Name is require"});
            case !description : return res.status(500).send({message : "Description is require"});
            case !price : return res.status(500).send({message : "Price is require"});
            case !category : return res.status(500).send({message : "Category is require"});
            case !quantity : return res.status(500).send({message : "Quantity is require"});

            case !photo && photo.size < 100000: return res.status(500).send({message : "Photo is require and It should be less than 1 MB"});
        }

        const product = await productModel.findByIdAndUpdate(req.params.pId, {
            ...req.fields, slug : slugify(name),
        }, {new : true});

        if(photo) {
            product.photo.data = fs.readFileSync(photo.path);
            
            product.photo.contentType = photo.type
        }

        const result = await product.save();

        return res.status(201).send({
            success : true,
            message : "Product has been updated successfully",
            product : product,

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
    createProductController,
    getProductController,
    getSingleProductController,
    getProductPhotoController,
    deleteProductController,
    updateProductController
    
}