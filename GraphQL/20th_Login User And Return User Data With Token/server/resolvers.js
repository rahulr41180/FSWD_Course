
import data from "./data.js";
import { randomBytes } from "crypto";
import schemaModels from "./models/export.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* 

*/

const resolvers = {

    Query: {
        users: () => data.userData,
        getSingleUserById : (doesNotHaveParent, {userId}) => data?.userData?.find((user) => user._id === userId),
        comments: () => data.commentData,
        getRespectiveUserComments : (doesNotHaveParent, {userId}) => data?.commentData?.filter((comment) => comment?.userId === userId)
    },
    User: {
        comments: (user) => data?.commentData?.filter((element) => element.userId === user._id)
    },
    Mutation: {
        createNewUser: async (doesNotHaveParent, {
            newUserInputData
        }) => {
            try {
                const existedUser = await schemaModels.userModels.findOne({ email : newUserInputData?.email });
                if(existedUser) {
                    throw new Error("Error-This email is already exists! Please use different email!") 
                }
                const hashedPassword = await bcrypt.hash(newUserInputData.password, 10);

                const newUser = await new schemaModels.userModels({
                    ...newUserInputData,
                    password : hashedPassword
                }).save();

                return newUser;
            } catch(error) {
                // console.log('error:', error.message);
                if(error.message.startsWith("Error-")) {
                    throw new Error(error.message.split("-")[1])
                }
                throw new Error("Something went wrong! Please try again leter!")
            }
        },
        logInUser: async (doesNotHaveParent, {
            logInUserInputData
        }) => {
            try {
                const existsUser = await schemaModels.userModels.findOne({ email : logInUserInputData?.email });
                console.log('existsUser:', existsUser)
                if(!existsUser) {
                    throw new Error("Error-This email and password are wrong! Please try again with correct email and password!") 
                }

                // console.log('logInUserInputData.password:', logInUserInputData.password)
                // console.log('existsUser?.password:', existsUser?.password)
                const passwordMatched = await bcrypt.compare(logInUserInputData.password, existsUser?.password);
                if(!passwordMatched) {
                    throw new Error("Error-Email and Password are wrong! Please try again leter!");
                }
                // console.log('passwordMatched:', passwordMatched)

                const token = jwt.sign({ _id : existsUser?._id }, process.env.SECRET_KEY);
                console.log('token:', token)

                return { token, userData: existsUser }
                 
            } catch(error) {
                // console.log('error:', error.message);
                if(error.message.startsWith("Error-")) {
                    throw new Error(error.message.split("-")[1])
                }
                console.log('error:', error.message);
                throw new Error("Something went wrong! Please try again leter!")
            }
        }
    }
}

export default resolvers;