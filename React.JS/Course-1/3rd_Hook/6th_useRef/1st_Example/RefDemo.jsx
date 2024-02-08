
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

/*
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

-> Here I want give a DOM element reference to refToInput reference variable for doing this.
-> In to use ref key in element as a prop and in the ref key I have to give that variable reference where I want to store the DOM element reference.
-> In initial render the refToInput1 value will be undefined because after first re-render the React assign the variable and Input element is below than refToInput and we haven't give any value to useRef() so it initialised it with undefined.
-> Once React will reach to Input element then it will re-initialised the refToInput value with input element refernce
-> means first refToInput have { current : undefined } but after re-initialised the refToInput have { current : input }
-> why I am not getting update value of refToInput because useRef have second property that if we change the value of useRef variable useRef hook will not re-render the component again and this is good property but on another hand this is wrong because we want automatically show the update value.
-> So for seeing the value we need to again print the refToInput value.
-> That's why I am using button to do this by clicking on button we are printing the refToInput3 and refToInput3 would print the value { current : input };

-> refToInput4 would print the value refToInput.current value.

Note : 1. useRef is use for creating a reference variable where we can store the DOM element reference.
2. useRef is use for update the useRef() value without re-render the component again.
*/

export const RefDemo = () => {
    const refToInput = useRef();

    console.log('refToInput1:', refToInput)

    const clickHandler = () => {
        console.log("refToInput3 :", refToInput);
        console.log("refToInput4 :", refToInput.current);
        console.log("refToInput5 :", refToInput.current.value);
    }

    return (

        <>
            <span>Name :</span>
            <input type="text" name="" id="" ref={refToInput} />
            <button onClick={clickHandler}>Show Name</button>
        </>
    )
}

/* 

-> Now if I want to print the entered value in input element then again we need to print the refToInput value forcedfully.
-> As we know if we re-initialised or update the useRef() value it will not re-render the component again if component does not re-render again then we won't be able to see updated value of useRef();
-> If we want to print the entered value of input element than we will use button means after clicked the button the refToInput5 value will give us entered value of input element.
-> refToInput5 have entered value.
*/