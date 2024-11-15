
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database has been connected successfully!`);
    } catch(error) {
        console.log("Error in database connection!", error.message);
        throw error;
    }
}

export default connectDB;