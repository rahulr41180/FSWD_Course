
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import dotenv from "dotenv";
import gqlSchema from "./gqlSchema.js";

import userModels from "./models/user.model.js";
import commentModels from "./models/comment.model.js";
import resolvers from "./resolvers.js";
import connectDB from "./config/db.js";

dotenv.config();

// Apollo Server Creation :
// Define the typeDefs, resolvers inside ApolloServer 

connectDB().then(() => {
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
}).catch((error) => {
    console.log(`Error in database connection!`)
})

/* 
    If we want to do GET request then we have to do 'Query'
    If we want to do POST, PUT, DELETE then we have to do 'Mutation'
*/