
import { memo } from "react";

const Button = ({children, clickHandle}) => {

    console.log("Button Component")
    return (
        <>
            <button onClick={clickHandle}>{children}</button>
        </>
    )
}

export default memo(Button);