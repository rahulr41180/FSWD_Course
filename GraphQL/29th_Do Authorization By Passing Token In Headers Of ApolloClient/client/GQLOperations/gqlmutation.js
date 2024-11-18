
import { gql } from "@apollo/client";

/* 
Here I am doing mutation query to create a new user in database to Apollo Server
I have given a alias name which user: to createNewUser()
*/
const SIGNUP_NEW_USER = gql`
    mutation createNewUser($userInputData: inputDefinitionForNewUserInputs!){
        user:createNewUser(newUserInputData : $userInputData) {
            _id
            firstName

            lastName
            email
        }
    }
`

const LOGIN_USER = gql`
    mutation logInUser($userInputData: inputDefinitionForLogInUserInputData!) {
        user:logInUser(logInUserInputData: $userInputData) {
            token
            userData {
                _id
                firstName
            }
        }
    }
`

const CREATE_COMMENT = gql`
    mutation createNewComment($userInputData: inputDefinitionForNewCommentInputs!) {
        comment:createNewComment(newCommentInputData: $userInputData) {
            _id
            userId {
                _id
                firstName
                lastName
            }
            commentText
        }
    }
`

export default {
    SIGNUP_NEW_USER,
    LOGIN_USER,
    CREATE_COMMENT
}