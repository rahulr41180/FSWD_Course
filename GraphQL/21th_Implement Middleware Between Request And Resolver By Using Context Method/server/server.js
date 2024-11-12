
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

// Apollo Server Creation :
// Define the typeDefs, resolvers inside ApolloServer 
/* 
I want to implement middleware for authorization, authentication or for validation.
Those middleware should run before resolver or after request done by client.

We have to add context in ApolloServer to implement the Middleware
For handle authorization, authentication and validation.

In the context callback we have req, res those we can destructed to take data

So this context will run everytime for each type of request so because of that
We should not throw any type of error inside the context.

Ex. : If I want to get all user in that we will not send any token in req.headers so in that case our middleware should not run but
middleware will run and as we are not receiving any token and if I am writing our code in a way to check that our token is present or not
in that senerio there would be problem occures.

like this :
if(!token) {
    throw new Error("Error-UnAuthorized request!")    
}
This line of code we should not write.
*/
connectDB().then(() => {
    const server = new ApolloServer({
        typeDefs: gqlSchema.typeDefs,
        resolvers: resolvers,
        context: ({ req, res }) => {
            // We can take the token from authorization and authorization present in req.headers.
            const token = req.headers.authorization;
            console.log('token:', token)
            // This line of code we should not write in context.
            // if(!token) {
                //     throw new Error("Error-UnAuthorized request!")
                // }
                if(token && token.length > 0) {
                    try {
                        const isAuthenticated = jwt.verify(token, process.env.SECRET_KEY)
                        console.log('isAuthenticated:', isAuthenticated)
                        return { authenticatedUserId: isAuthenticated?._id }
                    } catch(error) {
                        console.log("error :", error.message);
                        return { error : "Please do login to access this!"}
                    }
                }
                console.log("Here");
            return {};
        },
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