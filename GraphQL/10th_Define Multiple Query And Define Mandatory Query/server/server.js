
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import data from "./data.js";

// Schema
/* 
To make a field maindatory we have to add (!) mark
*/
const typeDefs = gql`
    type Query {
        users :[User]

        comments : [Comment]
    }
    type User {
        id : ID!
        firstName : String
        lastName : String
        email : String 
    }
    type Comment {
        commentId : ID
        userId : String
        commentText : String
    }
`
// To Resolve the Query We have to create resolver
const resolvers = {
    Query : {
        users : () => data.userData,
        comments : () => data.commentData    
    }   
}

// Apollo Server Creation :
// Define the typeDefs, resolvers inside ApolloServer 
const server = new ApolloServer({
    typeDefs : typeDefs,
    resolvers : resolvers,
    // Dashboard will run on our localhost server
    plugins : [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({ url }) => {
    console.log(`Server is listening at ${url}`)
}).catch((error) => console.log("error in server connection :", error));