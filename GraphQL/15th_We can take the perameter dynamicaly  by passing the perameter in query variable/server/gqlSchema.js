
import { gql } from "apollo-server";

/* 
To do POST, PUT and DELETE request we have to do Mutation.

I want to create new user then we have to do Mutation.
We will get user information throw argument of Mutation query
Here Mutation query for create user is : createNewUser(): User
Which will return us User(User query type we have already been defined above)
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
            firstName: String!, 
            lastName: String!, 
            email: String!,
            password: String!
        ): User
    }
`

export default {
    typeDefs
}