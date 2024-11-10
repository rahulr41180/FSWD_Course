
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import data from "./data.js";

// Schema
/* 
Now we have to Defined which comment is created by which user

One user can have multiple comment because of that we will get array of comments

But we have to resolve the 'type User { comments : [Comment] }' in resolver explicity because GraphQL does not resolve it automatically.

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
User : {
    comments : () => data.commentData
}
inside callback function we will get parent object and 
for 'comment : () => data.commentData' callback function the parent is User object which we will get when we will do users : query in Query type
like :
'comment : (user) => data.commentData' 

We have to do filter because we want that comments query will only return respective user comment
*/
const resolvers = {
    Query: {
        users: () => data.userData,
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