
import { gql } from "apollo-server";

/* 
commentId Type:
In your GraphQL schema, commentId is defined as a String!, which is fine if the commentId is a string type. However, 
it's important to ensure that your database (commentModels.findOne({ _id: commentId })) is expecting a string or an ObjectId type. 
If commentId is supposed to be an ObjectId in your MongoDB schema, it should ideally be passed as an ID! type in GraphQL.

Your GraphQL mutation type for deleteSingleComment has a small issue in terms of syntax. 
The deleteSingleComment mutation should return an object with a field deletedMessage as you intend, 
but the syntax for the return type is not quite correct.

Not Correct:
deleteSingleComment(commentId: ID!): { deletedMessage: String }

Correct:
deleteSingleComment(commentId: ID!): DeleteCommentResponse
type DeleteCommentResponse {
    deletedMessage: String
}
*/

const typeDefs = gql`
    type Query {
        getAllUsersQuery : [User] 
        getSingleUserByIdQuery(userId : ID!) : User
        getAllCommentsQuery : [Comment]
        getRespectiveUserCommentsQuery(userId : ID!) : [Comment]
        getUserProfileWithCommentQuery: User
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

    type UserToken {
        token: String
    }

    type DeleteCommentResponse  {
        deletedMessage: String
    }

    type Mutation {
        createNewUserMutation(
            newUserInputData: inputDefinitionForNewUserInputs!
        ): User
        logInUserMutation(
            logInUserInputData: inputDefinitionForLogInUserInputData!
        ): UserToken
        createNewCommentMutation(
            newCommentInputData: inputDefinitionForNewCommentInputs!
        ): Comment
        deleteSingleCommentMutation(commentId: ID!): DeleteCommentResponse
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