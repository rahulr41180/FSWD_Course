
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

// Schema
const typeDefs = gql`
    type Query {
        greet: String
    }
`
// To Resolve the Query We have to create resolver

const resolvers = {
    Query : {
        greet : () => {
            return "Hello World!"
        }       
    }   
}

// Apollo Server Creation :

/*
const server = new ApolloServer({})
*/

// Define the typeDefs, resolvers inside ApolloServer 

const server = new ApolloServer({
    typeDefs : typeDefs,
    resolvers : resolvers
})

server.listen().then(({ url }) => {
    console.log(`Server is listening at ${url}`)
}).catch((error) => console.log("error in server connection :", error));