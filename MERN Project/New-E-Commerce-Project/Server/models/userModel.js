
import mongoose from "mongoose";

import colors from "colors";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true, // from triming the white space
    },
    email : {

        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {

        type : String,
        required : true
    },
    address : {
        type : String
    },
    role : {
        type : Number,
        default : 0
    }
},{
    timestamps : true
});

export default mongoose.model("users", userSchema);