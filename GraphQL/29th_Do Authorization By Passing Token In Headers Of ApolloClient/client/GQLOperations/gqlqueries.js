
import { gql } from "@apollo/client";

/* 
This is the convention that we follow to write query in GraphQL.

gql is a function it is for to create or make query.
*/

const GET_ALL_COMMENTS = gql`
    query getAllComments{
        comments {
            _id
            userId {
                firstName
                lastName
            }
            commentText
        }
    }
`

export default {
    GET_ALL_COMMENTS
}