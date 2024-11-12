
import data from "./data.js";
import { randomBytes } from "crypto";
import schemaModels from "./models/export.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* 
    The resolver callback have parent data or undefined(if query in root level) as in their first arguments.
    InputData that are coming from client side that we will get in second arguments.
    Middleware return data from context that we will get in third arguments.
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
                console.log('error:', error.message);
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
                if(!existsUser) {
                    throw new Error("Error-This email and password are wrong! Please try again with correct email and password!") 
                }
                const passwordMatched = await bcrypt.compare(logInUserInputData.password, existsUser?.password);
                if(!passwordMatched) {
                    throw new Error("Error-Email and Password are wrong! Please try again leter!");
                }
                const token = jwt.sign({ _id : existsUser?._id }, process.env.SECRET_KEY);
                return { token, userData: existsUser }
            } catch(error) {
                console.log('error:', error.message);
                if(error.message.startsWith("Error-")) {
                    throw new Error(error.message.split("-")[1])
                }
                throw new Error("Something went wrong! Please try again leter!")
            }
        },
        createNewComment: async (doesNotHaveParent, {
            newCommentInputData
        }, context) => {
            try { 
                console.log('context:', context)
                const { authenticatedUserId } = context;
                if(!authenticatedUserId) {
                    throw new Error("Error-Please logIn before access this!")
                }

                const newComment = await new schemaModels.commentModels({
                    commentText: newCommentInputData?.commentText,
                    userId: authenticatedUserId
                }).save();

                return newComment;
                
            } catch(error) {
                console.log('error:', error.message);
                if(error.message.startsWith("Error-")) {
                    throw new Error(error.message.split("-")[1])
                }
                throw new Error("Something went wrong! Please try again leter!")
            }
        }
    }
}

export default resolvers;