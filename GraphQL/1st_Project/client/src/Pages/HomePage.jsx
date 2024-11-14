
import { useEffect } from "react";
import gqlqueries from "../GQLOperations/gqlqueries";
import { useQuery } from "@apollo/client";

export const HomePage = () => {
    /* 
        useQuery is used to mae query to server
    */
    const { loading, error, data } = useQuery(gqlqueries.GET_ALL_COMMENTS);
    if (loading) return (

        <div>
            <h1>Loading....</h1>
        </div>
    )
    if (error) return (
        <div>
            <h1>{error.message}</h1>
        </div>
    )
    return (
        <div className="container">
            {
                data?.comments?.map((comment) => {
                    return (
                        <blockquote>
                            <h6>{comment?.commentText}</h6>
                            <p className="right-align">~{comment?.userId?.firstName+" "+comment?.userId?.lastName}</p>
                        </blockquote>
                    )
                })
            }
        </div>
    )
}