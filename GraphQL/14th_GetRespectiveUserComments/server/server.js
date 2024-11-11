
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import data from "./data.js";

// Schema
/* 
    Write a query for getRespectiveUserComments for that we have to pass the iD of user
    getRespectiveUserComments(userId : ID!) : [Comment] will return array of comment.
*/
const typeDefs = gql`
    type Query {

        users : [User]
        getSingleUser(userId : ID!) : User
        comments : [Comment]
        getRespectiveUserComments(userId : ID!) : [Comment]
    }
    type User {
        id : ID!
        firstName : String
        lastName : String
        email : String
        comments : [Comment]
    }
    type Comment {
        commentId : ID
        userId : String
        commentText : String
    }
`
// To Resolve the Query We have to create resolver
/* 

*/
const resolvers = {
    Query: {
        users: () => data.userData,
        getSingleUser : (doesNotHaveParent, {userId}) => data?.userData?.find((user) => user.id === userId),
        comments: () => data.commentData,
        getRespectiveUserComments : (doesNotHaveParent, {userId}) => data?.commentData?.filter((comment) => comment?.userId === userId)
    },
    User: {
        comments: (user) => data?.commentData?.filter((element) => element.userId === user.id)
    }
}

// Apollo Server Creation :
// Define the typeDefs, resolvers inside ApolloServer 
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    // Dashboard will run on our localhost server
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({ url }) => {
    console.log(`Server is listening at ${url}`)
}).catch((error) => console.log("error in server connection :", error));