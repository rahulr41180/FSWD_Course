
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
        _id : ID
        firstName : String
        lastName : String
        email : String
        comments : [Comment]
    }
    type Comment {
        _id : ID
        userId : User
        commentText : String
    }

    type UserWithToken {
        token: String
        userData: User
    }

    type Mutation {
        createNewUser(
            newUserInputData: inputDefinitionForNewUserInputs!
        ): User
        logInUser(
            logInUserInputData: inputDefinitionForLogInUserInputData!
        ): UserWithToken
        createNewComment(
            newCommentInputData: inputDefinitionForNewCommentInputs!
        ): Comment
    }

    input inputDefinitionForNewCommentInputs {
        commentText: String!
    }

    input inputDefinitionForNewUserInputs {
        firstName: String!
        lastName: String! 
        email: String!
        password: String!
    }
    input inputDefinitionForLogInUserInputData {
        email: String!
        password: String!
    }
`

export default {
    typeDefs
}