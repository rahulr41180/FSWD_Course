
import data from "./data.js";
import { randomBytes } from "crypto"

/* 
I want to do create new user for that we have to do Mutation query and we have already been defined
it's schema in gqlSchema.js and now we have to resolve that Mutation query in resolver.

As we have written 'createNewUser:' Mutation query at root level of Mutation in that case we will get first argument of 'createNewUser:() => {};' callback function undefined and we will get form data in second argument.
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
            firstName, 
            lastName,
            email,
            password
        }) => {
            const id = randomBytes(5).toString("hex") 
            data?.userData.push({
                firstName,
                lastName,
                email,
                password,
                id
            })
            return data?.userData.find((user) => user.id === id)
        }
    }
}

export default resolvers;