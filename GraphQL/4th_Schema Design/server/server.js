
import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

// Schema
/* 
gql`` : tag temparal literal.
gql is a function.
`` it is a temparel literal.

const typeDefs = gql``
*/

// What we can write in Schema.
/* 
In the Schema we are mentioning the type

First type is
type Query {
        
}

In this Query type we are defining that what we will do query from client.

const typeDefs = gql`
    type Query {

    }
`

*/

// What type of Query we can do
/* 
Here we are telling that User is doing query for greet which will return a String value because we have explicity defined the type of Query.
*/
const typeDefs = gql`
    type Query {
        greet: String
    }
`