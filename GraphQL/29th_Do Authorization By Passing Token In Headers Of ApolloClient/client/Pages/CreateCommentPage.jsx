
import { useState } from "react";
import { useMutation } from "@apollo/client";
import gqlmutation from "../GQLOperations/gqlmutation";

export const CreateCommentPage = () => {
    const [comment, setComment] = useState("");
    const [createNewCommentFn, { data, loading, error }] = useMutation(gqlmutation.CREATE_COMMENT, {
        onCompleted(data) {
            console.log('error:', error)
        }
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