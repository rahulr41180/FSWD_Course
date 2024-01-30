
import { memo } from "react";


const Button = ({ clickHandler, children, btn }) => {

    console.log("Button Component :", btn);

    return(
        <>
            <button onClick={clickHandler}>{ children }</button>
        </>
    )
}

export default memo(Button);