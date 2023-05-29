
import JWT from "jsonwebtoken";

import userModel from "../models/userModel.js";

// Protected Routes Token Based
const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        console.log('decode:', decode);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(404).send({
            status : false,
            message : "Please do login to access this"
        })
    }
}

// Protected Role For Admin Access
const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1) {
            return res.status(401).send({
                status : false,
                message : "UnAuthorized access"
            })
        } else {
            next();
        }
    } catch (error) {
        return res.status(404).send({
            status : false,
            message : "Error In Protected Role For Admin Access"
        })
    }
}

export {
    requireSignIn,

    isAdmin
}