
import { memo } from "react";

/*
export const Button = ({ clickHandler, children }) => {

    console.log("Button Component");
    return(
        <>
            <button onClick={clickHandler}>{ children }</button>
        </>
    )

}
*/

// --------------------------------------------


const Button = ({ clickHandler, children }) => {

    console.log("Button Component");

    return(
        <>
            <button onClick={clickHandler}>{ children }</button>
        </>
    )
}

export default memo(Button);