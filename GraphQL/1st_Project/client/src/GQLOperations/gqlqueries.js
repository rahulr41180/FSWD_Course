
import { gql } from "@apollo/client";

/* 
This is the convention that we follow to write query in GraphQL.

gql is a function it is for to create or make query.
*/

const GET_ALL_COMMENTS = gql`
    query getAllCommentsQueryName{
        comments:getAllCommentsQuery {

            _id
            userId {
                firstName
                lastName
            }
            commentText
        }
    }
`

const GET_USER_PROFILE_WITH_COMMENT = gql`
    query getUserProfileWithCommentQueryName {
        userProfile: getUserProfileWithCommentQuery {
            _id
            firstName
            lastName
            email
            comments {
                _id
                commentText
            }
        }
    }
`

export default {
    GET_ALL_COMMENTS,
    GET_USER_PROFILE_WITH_COMMENT
}