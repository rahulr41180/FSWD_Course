
import { memo } from "react";

/*

export const Span = ({children}) => {

    console.log("Span Component");
    return(
        <span>{children}</span>
    )
}

*/

// -----------------------------------------------

/*
const Span = ({children}) => {
    console.log("Span Component");
    return(
        <span>{children}</span>

    )
}

export default memo(Span)
*/

// ---------------------------------------------

const Span = ({children}) => {

    console.log("Span Component");
    return(
        <span>{children[0]}</span>

    )
}

export default memo(Span)