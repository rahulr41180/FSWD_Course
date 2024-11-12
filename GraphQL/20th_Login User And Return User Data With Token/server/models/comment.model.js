
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    commentText: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
}, {
    timestamps : true
})

const commentModels = mongoose.model("comment", commentSchema);
export default commentModels