
import { memo } from "react";

const Span = ({children}) => {

    console.log("Span Component");
    return(
        <span>{children[0]}</span>

    )
}


export default memo(Span)