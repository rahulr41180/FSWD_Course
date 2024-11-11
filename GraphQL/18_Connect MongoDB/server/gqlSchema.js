
import { gql } from "apollo-server";

/* 

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