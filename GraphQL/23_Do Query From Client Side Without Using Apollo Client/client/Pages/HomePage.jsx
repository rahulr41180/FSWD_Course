
import { useEffect } from "react";

export const HomePage = () => {

    /* 
    Here I am doing query with Apollo Server without using Apolo Client

    What happened here when we visit first time on homepage then our useEffect run and it do a network request this things think okay 
    suppose I am getting comment list here when we visit on homepage.
    Suppose I try to visit on another tab and suppose I didn't post any comment or no any comment got added into my database and 
    I visit on homepage again in that If I am doing network request by using fetch to Apollo Server or to Express Server in that 
    
    case again a network request went to server to get same data.

    But if we use Apollo Client to do network request on frontend then what happened when we visit or do first time request to server then
    frontend successfully do a network request and suppose If I visit on another tab and I didn't add any data on that respective network
    call and I again visit on same tab now what happened Apollo Client will not do again network request to Apollo Server for same data
    instead of do network request what Apollo Client will do Apollo Client will catched the response data into catche memory
    When we visit on same tab again and if any request happening in that tab in that case Apollo Server return data from their catched memory

    This will work if we are doing network request from Apollo Client in frontend and to Apollo Server in backend 
    It will not work with
    GraphQL APIs call with Fetch on client side to Apollo Server
    GraphQL APIs call with Apollo Client on client side to Express Server
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