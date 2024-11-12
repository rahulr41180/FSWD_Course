
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import gqlSchema from "./gqlSchema.js";

import userModels from "./models/user.model.js";
import commentModels from "./models/comment.model.js";
import resolvers from "./resolvers.js";
import connectDB from "./config/db.js";


dotenv.config();

// Middleware :
const context = ({ req, res }) => {
    // We can take the token from authorization and authorization present in req.headers.
    const token = req.headers.authorization;
    // console.log('token:', token)
    // This line of code we should not write in context.
    // if(!token) {
        //     throw new Error("Error-UnAuthorized request!")
        // }
        if(token && token.length > 0) {
            try {
                const isAuthenticated = jwt.verify(token, process.env.SECRET_KEY)
                // console.log('isAuthenticated:', isAuthenticated)
                return { authenticatedUserId: isAuthenticated?._id }
            } catch(error) {
                console.log("error :", error.message);
                return { error : "Please do login to access this!"}
            }
        }
        // console.log("Here");
    return {};
}

// Apollo Server Creation :
// Define the typeDefs, resolvers inside ApolloServer 
/* 

*/
connectDB().then(() => {
    const server = new ApolloServer({
        typeDefs: gqlSchema.typeDefs,
        resolvers: resolvers,
        context: context,
        // Dashboard will run on our localhost server
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground()
        ]
    })
    server.listen().then(({ url }) => {
        console.log(`Server is listening at ${url}`)
    }).catch((error) => console.log("error in server connection :", error));
}).catch((error) => {
    console.log(`Error in database connection!`, error);
})

/* 
    If we want to do GET request then we have to do 'Query'
    If we want to do POST, PUT, DELETE then we have to do 'Mutation'
*/