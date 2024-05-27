
import { useState, useEffect } from "react";
import { data } from "./data";

export const SearchResults = ({ query }) => {
    
    if(query === "") return null

    const res = data(query);
    console.log('res:', res)

    return (
        <div>
            
        </div>
    )
}

// const use = (promise) => {
//     console.log('promise:', promise.status)
//     if(promise.status === "fulfilled") {
//         console.log(true);
//     }
// }