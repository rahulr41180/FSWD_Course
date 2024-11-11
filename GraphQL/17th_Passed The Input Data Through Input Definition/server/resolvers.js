
import data from "./data.js";
import { randomBytes } from "crypto"

/* 
    Now we don't need to destructured the input fields in resolver instead of that we just have to passed the input defination.

    We have to passed the input data in query variable
*/

const resolvers = {
    Query: {
        users: () => data.userData,
        getSingleUserById : (doesNotHaveParent, {userId}) => data?.userData?.find((user) => user.id === userId),

        comments: () => data.commentData,
        getRespectiveUserComments : (doesNotHaveParent, {userId}) => data?.commentData?.filter((comment) => comment?.userId === userId)
    },
    User: {
        comments: (user) => data?.commentData?.filter((element) => element.userId === user.id)
    },
    Mutation: {
        createNewUser: (doesNotHaveParent, {
            newUserInputData
        }) => {
            const id = randomBytes(5).toString("hex") 
            data?.userData.push({
                id,
                ...newUserInputData
            })
            return data?.userData.find((user) => user.id === id)
        }
    }
}

export default resolvers;