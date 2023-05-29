
import userModel from "../models/userModel.js";

import { hashPassword, comparePassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

// POST METHOD FOR REGISTRATION
const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        // validation
        if(!name) {

            return res.status(404).send({
                error : "Name is required"
            })
        }
        if(!email) {
            return res.status(404).send({
                error : "email is required"
            })
        }
        if(!password) {
            return res.status(404).send({
                error : "password is required"
            })
        }
        if(!phone) {
            return res.status(404).send({
                error : "phone number is required"
            })
        }
        if(!address) {
            return res.status(404).send({
                error : "address is required"
            })
        }

        // Checking. She/He is exisiting user.
        const exisitingUser = await userModel.findOne({email})
        if(exisitingUser) {
            return res.status(200).send({
                status : true,
                message : "Already user has been registered please login.."
            })
        }

        // User registration

        // Password hashing
        const hashedPassword = await hashPassword(password);

        console.log("hashedPassword :", hashedPassword);
        // Save
        const user = await new userModel({name, email, phone, address, password : hashedPassword}).save();
        console.log("user", user);


        res.status(201).send({
            message : "User registered sucessfully",
            user : user,
            status : true
        })

    } catch (error) {
        console.log("error in registerController :", error);
        res.status(500).send({
            message : "error in registeration",
            status : false,
            errorMessage : error.message
        })
    }

}

// METHOD POST FOR LOGIN
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validation
        if(!email || !password) {
            return res.status(404).send({

                status : false,
                message : "Please enter email or password"
            })
        }

        // Check User is exists or not
        const user = await userModel.findOne({email : email});
        if(!user) {
            return res.status(404).send({
                status : false,

                message : "User is not registered please registered"
            })
        }

        // Password Verification
        const match = await comparePassword(password, user.password);
        if(!match) {
            return res.status(200).send({

                status : false,
                message : "Invalid email or password"
            })
        }
        
        // Token
        const token = await JWT.sign({_id : user._id}, process.env.JWT_SECRET, {
            expiresIn : "7d",
        })

        res.status(200).send({
            status : true,
            message : "Login has successfully done.",
            user : {
                name : user.name,
                email : user.email,
                address : user.address,
                phone : user.phone,

                role : user.role
            },
            token : token
        })

    } catch (error) {
        res.status(500).send({
            status : false,
            message : "Error in login controller",

            error : error.message
        })
    }
}

const testController = async (req, res) => {
    try {
        return res.status(200).send({
            status : true,

            message : "Successfully, have done the test part, Thank You"
        })
    } catch (error) {

        return res.status(500).send({
            status : false,
            message : "Error in test Controller",
            error : error.message
        })

    }
}


export { registerController, loginController, testController };