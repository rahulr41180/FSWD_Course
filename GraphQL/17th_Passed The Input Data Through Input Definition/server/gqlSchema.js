
import { gql } from "apollo-server";

/* 
We can take the input for newUserCreation by creating the 
input inputForNewUserCreation {} and
We can take the input from input defination and now we just have to pass that input definition name in Mutation query as argument of Mutation query
*/

const typeDefs = gql`
    type Query {
        users : [User] 

        getSingleUserById(userId : ID!) : User
        comments : [Comment]
        getRespectiveUserComments(userId : ID!) : [Comment]
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

    type Mutation {
        createNewUser(
            newUserInputData: inputDefinitionForNewUserInputs!
        ): User
    }

    input inputDefinitionForNewUserInputs {
        firstName: String!, 
        lastName: String!, 
        email: String!,
        password: String!
    }
`

export default {
    typeDefs
}