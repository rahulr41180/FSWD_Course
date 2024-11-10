
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import data from "./data.js";

// Schema
/* 
We will do query like users and which will return array type data

which is [User] but we haven't defined the User type
Means we have to defined the User type explicity.
const typeDefs = gql`

    type Query {
        users :[User]
    }
`
*/

// Define User Type Here
/* 
User is also a query like Query but User query will query by users:[User] when we will do query for users.
Why we have to defined the User type because users: will be array of object and we are defining that object with [User] 
and User having multiple property and property are also having different type if users: will return a single value like number 
or String than we don't need to define User query
id : ID here ID is refer to String type which is internally handle by GraphQL.
*/
const typeDefs = gql`
    type Query {
        users :[User]
    }

    type User {
        id : ID
        firstName : String
        lastName : String
        email : String 
    }
`
// To Resolve the Query We have to create resolver
/*
const resolvers = {
    Query : {
        greet : () => {
            return "Hello World!"
        }       
    }   
}
*/

// Whatever query will queried from client those we have to handle in resolver 

/*
for that we have to define the users: query in the resolvers.
*/
const resolvers = {
    Query : {
        users : () => data.userData     
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