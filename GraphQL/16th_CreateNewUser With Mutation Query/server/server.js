
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import gqlSchema from "./gqlSchema.js";
import resolvers from "./resolvers.js";

// Apollo Server Creation :
// Define the typeDefs, resolvers inside ApolloServer 
const server = new ApolloServer({
    typeDefs: gqlSchema.typeDefs,
    resolvers: resolvers,
    // Dashboard will run on our localhost server

    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({ url }) => {
    console.log(`Server is listening at ${url}`)
}).catch((error) => console.log("error in server connection :", error));

/* 
    If we want to do GET request then we have to do 'Query'
    If we want to do POST, PUT, DELETE then we have to do 'Mutation'
*/