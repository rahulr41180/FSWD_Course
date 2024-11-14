
import { useEffect } from "react";

export const HomePage = () => {

    /* 
    Here I am doing query with Apollo Server without using Apolo Client
    */
    useEffect(() => {
        fetch("http://localhost:4000", {
            method: "POST",
            headers: {

                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // To define the query architecture based on GraphQL we have to passed our query definition
                query: `
                    query getSingleUserById($userInputData: ID!) {
                        getSingleUserById(userId : $userInputData) {
                            _id
                            firstName
                            lastName
                            email
                            comments {
                                _id
                                userId {
                                    _id
                                    firstName
                                    lastName
                                    email
                                }
                                commentText
                            }
                        }
                    }
                `,
                // If we want to send query variable to query then we can send variable by using variable property
                variables: {
                    userInputData: "673319e27d450262937c0633"
                }
            })
        }).then((res) => {
            return res.json()
        }).then((data) => console.log("data :", data))
    }, [])

    return (
        <div className="container">
            <blockquote>
                <h6>If it works don't touch it</h6>
                <p className="right-align">~User2 Text2</p>
            </blockquote>
            <blockquote>
                <h6>If it works don't touch it</h6>
                <p className="right-align">~User2 Text2</p>

            </blockquote>
        </div>
    )
}