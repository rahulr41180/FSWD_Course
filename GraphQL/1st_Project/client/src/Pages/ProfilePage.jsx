
import { useState, useEffect } from "react";
import gqlqueries from "../GQLOperations/gqlqueries";
import { useQuery } from "@apollo/client";

export const ProfilePage = () => {
    const [userData, setUserData] = useState("")
    console.log('userData:', userData)

    const { data, loading, error } = useQuery(gqlqueries.GET_USER_PROFILE_WITH_COMMENT);
    console.log('data:', data)


    
    if(loading) {
        return (
            <div>
                <h1>Loading.....</h1>
            </div>
        )
    }
    return (
        <div className="container myContainer">
            <div className="center-align">
                <img style={{ border: "2px solid", marginTop: "10px"}} className="circle" src={`https://robohash.org/${data?.userProfile?.firstName}.png?size=200x200`} alt="Pic" />
                <h5>{data?.userProfile?.firstName+" "+data?.userProfile?.lastName}</h5>
                <h6>{data?.userProfile?.email}</h6>
            </div>
            <h3>Your Comments</h3>
            {
                data?.userProfile?.comments.map((comment, index) => {
                    return (
                        <>
                            <blockquote>
                                <h6>{comment?.commentText}</h6>
                            </blockquote>
                        </>
                    )
                })
            }
        </div>
    )
}