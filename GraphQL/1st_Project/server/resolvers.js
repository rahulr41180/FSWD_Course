
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
        getAllUsersQuery: async () => {
            try {
                const getAllUsers = await schemaModels.userModels.find({});
                return getAllUsers;
            } catch(error) {
                console.log('error:', error.message);
                if(error.message.startsWith("Error-")) {
                    throw new Error(error.message.split("-")[1])
                }
                throw new Error("Something went wrong! Please try again leter!")
            }
        },
        getSingleUserByIdQuery : async (doesNotHaveParent, {userId}) => {
            // data?.userData?.find((user) => user._id === userId),
            try {
                const getSingleUser = await schemaModels.userModels.findOne({ _id : userId});
                return getSingleUser
            } catch(error) {
                console.log('error:', error.message);
                if(error.message.startsWith("Error-")) {
                    throw new Error(error.message.split("-")[1])
                }
                throw new Error("Something went wrong! Please try again leter!")
            }
        },
        getAllCommentsQuery: async () => {
            try {
                const getAllComments = await schemaModels.commentModels.find({}).populate([{path: "userId", select: "firstName lastName email"}]);
                return getAllComments;
            } catch(error) {
                console.log('error:', error.message);
                if(error.message.startsWith("Error-")) {
                    throw new Error(error.message.split("-")[1])
                }
                throw new Error("Something went wrong! Please try again leter!")
            }
        },
        getRespectiveUserCommentsQuery : async (doesNotHaveParent, {userId}) => {
            try {
                const getRespectiveUserComments = await schemaModels.commentModels.find({userId : userId});
                return getRespectiveUserComments;
            } catch(error) {
                console.log('error:', error.message);
                if(error.message.startsWith("Error-")) {
                    throw new Error(error.message.split("-")[1])
                }
                throw new Error("Something went wrong! Please try again leter!")
            }
        },
        getUserProfileWithCommentQuery: async (doesNotHaveParent, {}, context) => {
            try {
                const { authenticatedUserId } = context;
                if(!authenticatedUserId) {
                    throw new Error("Error-Please logIn before access this!")
                }

                const loggedUserProfile = await schemaModels.userModels.findOne({ _id: authenticatedUserId });
                return loggedUserProfile
            } catch(error) {
                console.log('error:', error.message);
                if(error.message.startsWith("Error-")) {
                    throw new Error(error.message.split("-")[1])
                }
                throw new Error("Something went wrong! Please try again leter!")
            }
        }
    },
    User: {
        comments: async (user) => {
            try {
                const getRespectiveUserComments = await schemaModels.commentModels.find({userId : user._id});
                return getRespectiveUserComments;
            } catch(error) {
                console.log('error:', error.message);
                if(error.message.startsWith("Error-")) {
                    throw new Error(error.message.split("-")[1])
                }
                throw new Error("Something went wrong! Please try again leter!")
            }
        } 
        // data?.commentData?.filter((element) => element.userId === user._id)
    },
    Mutation: {
        createNewUserMutation: async (doesNotHaveParent, {
            newUserInputData
        }) => {
            try {
                console.log('newUserInputData:', newUserInputData)
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
        logInUserMutation: async (doesNotHaveParent, {
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
                return { token }
            } catch(error) {
                console.log('error:', error.message);
                if(error.message.startsWith("Error-")) {
                    throw new Error(error.message.split("-")[1])
                }
                throw new Error("Something went wrong! Please try again leter!")
            }
        },
        createNewCommentMutation: async (doesNotHaveParent, {
            newCommentInputData
        }, context) => {
            try { 
                // console.log('context:', context)
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
        },
        deleteSingleCommentMutation: async(doesNotHaveParent, { 
            commentId
        }, context) => {
            try {
                const { authenticatedUserId } = context;
                if(!authenticatedUserId) {
                    throw new Error("Error-Please logIn before access this!")
                }
                const isCommentExist = await schemaModels.commentModels.findOne({_id : commentId});
                if(!isCommentExist) {
                    throw new Error("Error-Comment is not getting delete!")
                }
                const deleteStatus = await isCommentExist.deleteOne();
                if(deleteStatus.deletedCount === 0) {
                    throw new Error("Error-Failed to delete comment")
                }

                return {
                    deletedMessage: "Comment has been deleted!"
                }
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