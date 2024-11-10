
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import data from "./data.js";

// Schema
/* 
    Write Query For Get Single User
    We will return single user based on user id and user id will get as a perameter of query and that perameter should be mandatory like :
    getSingleUser(perameter : type Of Peramter(like : String, Number, ID(this is also a type of String)))
    getSingleUser(id : ID!)

    When we will do getSingleUser(id : ID!) that will return single User that why I have written like 

    getSingleUser(id : ID!) : User(single user and their User type already we have defined)
    getSingleUser(id : ID!) : [User] (We don't need to return array of single User object because it will not make any sence to return array of single User object)
    id : ID! we will send it from client side.
*/
const typeDefs = gql`
    type Query {
        users : [User]
        getSingleUser(id : ID!) : User
        comments : [Comment]
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
    getSingleUser is a root level query means that query which is defined inside Query or that query which wll do from client.
    that query will comes under root level query means that query will not have parent means when we resolve that query inside
    resolver than query callback have undefined as it's first argument and that query have perameter which we will pass from client side as it's second arguments.
*/
const resolvers = {
    Query: {
        users: () => data.userData,
        getSingleUser : (doesNotHaveParent, {id}) => data?.userData?.find((user) => user.id === id),
        comments: () => data.commentData
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