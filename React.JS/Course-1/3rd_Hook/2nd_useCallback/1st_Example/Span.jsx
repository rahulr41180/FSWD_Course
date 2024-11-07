
import { memo } from "react";

const Span = ({children}) => {

    console.log("Span Component");
    return(
        <span>{children}</span>

    )
}


export default memo(Span)