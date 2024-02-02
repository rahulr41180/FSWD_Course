
import { useState, useRef, useEffect } from "react";

/*
export const RefDemo = () => {

    const refToInput = useRef();
    console.log('refToInput:', refToInput)

    return (
        <>
            <span>Name :</span>
            <input type="text" name="" id="" />

            <button>Show Name</button>
        </>
    )
}

-> With useRef hook we can easily access DOM element direclty.
-> useRef is using a ref variable and this ref variable store reference of DOM element.
-> We are useRef() and we haven't assign any value inside useRef() so it will return undefined and store it in given refToInput variable.

-> It will return a object with current key and as we haven't assign any value to useRef() so it will return { current : undefined }.
*/

/*
export const RefDemo = () => {
    const refToInput = useRef("Hello");
    console.log('refToInput:', refToInput)

    return (

        <>
            <span>Name :</span>
            <input type="text" name="" id="" />

            <button>Show Name</button>
        </>
    )
}


-> As I have assign a string to useRef hook so Now it will return { current : "Hello" }
*/

export const RefDemo = () => {
    const refToInput = useRef();
    console.log('refToInput1:', refToInput)


    // useEffect(() => {

    //     console.log("refToInput2 :", refToInput);

    // },[refToInput])

    const clickHandler = () => {
        console.log("refToInput3 :", refToInput);
        console.log("refToInput4 :", refToInput.current);
    }

    
    return (
        <>
            <span>Name :</span>

            <input type="text" name="" id="" ref={refToInput} />
            <button onClick={clickHandler}>Show Name</button>
        </>
    )
}