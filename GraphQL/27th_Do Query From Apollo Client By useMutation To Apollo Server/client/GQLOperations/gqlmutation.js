
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

export default {
    SIGNUP_NEW_USER
}