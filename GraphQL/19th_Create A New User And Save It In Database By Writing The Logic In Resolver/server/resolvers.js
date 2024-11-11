
import data from "./data.js";
import { randomBytes } from "crypto";
import schemaModels from "./models/export.js";
import bcrypt from "bcryptjs";

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
        }
    }
}

export default resolvers;