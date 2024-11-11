
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`Database has een connected successfully!`);
    } catch(error) {

        console.log("Error in database connection!")
        throw error;
    }
}

export default connectDB;