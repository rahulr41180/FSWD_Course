
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

// Schema

const typeDefs = gql`
    type Query {
        greet: String
    }
`
// To Resolve the Query We have to create resolver

/*
const resolvers = {}
*/

// How to Resolve the Query for we have to write :

/*
const resolvers = {
    Query : {

    }   
}
*/

// Resolve the type Query 

/*
which query we have to resolve we have to resolve the greet query :
greet query will return a string value.
*/
const resolvers = {
    Query : {
        greet : () => {
            return "Hello World!"
        }       
    }   
}