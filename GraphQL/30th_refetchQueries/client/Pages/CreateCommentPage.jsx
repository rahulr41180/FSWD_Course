
import { useState } from "react";
import { useMutation } from "@apollo/client";
import gqlmutation from "../GQLOperations/gqlmutation";
import gqlqueries from "../GQLOperations/gqlqueries";

export const CreateCommentPage = () => {
    const [comment, setComment] = useState("");
    
    /* 
        When we do mutation query means suppose.
        When we create a new comment and we navigate to homepage then we can observe that we are not getting all comment all comment means

        the new one that we have created new.

        We are getting the same data when we first time visit on that tab means ApolloClient fetched the data once and then it catched data 
        their catched memory and when we visit again on that tab than we might supposed to get catched data not data with new created one.

        But we want data with new created data and for that we want that Apollo Client should do again new query to get updated data.
        Means we have to tell to ApolloClient that when we do some mutation query than fetched the respective data gain.

        In the second argument of useMutation() we have to mentioned things to do the respective query.

        In the second argument of useMutation() we have refetchQueries: [] in the
        refetchQueries: [] array we have to passed queries and that we have defined in client side
        and the 'query' or 'query name' both are okay
    */
    const [createNewCommentFn, { data, loading, error }] = useMutation(gqlmutation.CREATE_COMMENT, {
        refetchQueries: [
            gqlqueries.GET_ALL_COMMENTS,
            "getAllCommentsQueryNam" // this could be 'query' or 'query name'  
        ]        
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        createNewCommentFn({
            variables: {
                userInputData: {
                    commentText: comment
                }
            },
            
        })
    }

    if(loading) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }
    return (
        <div className="container myContainer">
            {error && (
                <div className="red card-panel">
                    {error.message}
                </div>
            )}
            {data && (
                <div className="green card-panel">
                    {data?.comment.commentText} has been successfully created!
                </div>
            )}
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={comment} onChange={(event) => setComment(event.target.value)} name="comment" id="" />
                <button className="btn green">Create</button>
            </form>
        </div>
    )
}