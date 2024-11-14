
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String
    },
    email : {
        
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
}, {
    timestamps : true
})

const userModels = mongoose.model("users", userSchema)
export default userModels;