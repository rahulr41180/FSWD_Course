
import { gql } from "@apollo/client";

/* 
Here I am doing mutation query to create a new user in database to Apollo Server
I have given a alias name which user: to createNewUser()
*/
const SIGNUP_NEW_USER = gql`
    mutation createNewUserMutationName($userInputData: inputDefinitionForNewUserInputs!){
        user:createNewUserMutation(newUserInputData : $userInputData) {
            _id
            firstName

            lastName
            email
        }
    }
`

const LOGIN_USER = gql`
    mutation logInUserMutationName($userInputData: inputDefinitionForLogInUserInputData!) {
        user:logInUserMutation(logInUserInputData: $userInputData) {
            token
        }
    }
`

const CREATE_COMMENT = gql`
    mutation createNewCommentMutationName($userInputData: inputDefinitionForNewCommentInputs!) {
        comment:createNewCommentMutation(newCommentInputData: $userInputData) {
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