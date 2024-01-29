
import { useState } from "react";

import Span from "./Span";
import Button from "./Button"

/*
export const Demo = () => {

    const [count, setCount] = useState(0);

    const incrementHandler = () => {

        setCount(count + 1);
    }

    const decrementHandler = () => {
        setCount(count - 1);
    }

    console.log("Demo Component");
    return(

        <div>
            <button onClick={decrementHandler}>-</button>
            <Span>10</Span>
            <button onClick={incrementHandler}>+</button>
        </div>
    )
}

1. Here we are seeing that if count state value of Demo component will change than Demo Component re-render which is okay.

2. But due demo component re-render their child component which Span component has also re-rendered even nothing has been changed in changed
3. If child component have too much line of code then this things will create slowness in performance in our application.
4. We want if child component prop value does change then only then re-render the child component. Other no need to re-render it again.
5. For do this we need to wrap our Span component with React.memo() method in Span.jsx
6. After doing we can see now child component does not re-render again and again even Demo state value has been changed
*/

/*
export const Demo = () => {

    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1);
    }

    const decrementHandler = () => {
        setCount(count - 1);
    }

    console.log("Demo Component");

    return(
        <div>
            <button onClick={decrementHandler}>-</button>
            <Span>{count}</Span>
            <button onClick={incrementHandler}>+</button>
        </div>
    )

}

1. Now here we have passing dynamic value in prop which count and this will always change when the count state value will change in Demo component.
2. Means when the count state value change then Demo component will re-render and we have passed this count value to Span component as prop then child component will also be re-rendered again and again.
Note : React.memo() method will only work with functional component.
Note : We can't use this React.memo() method for all the component because React.memo() also take some time to compare previous prop value or state value with current prop value or state value due to this it will also slow down our application performance.
So we can use this method only their where child component prop value or state value will not be changed again and again.
and we can't use this method their where child component prop value of state value will be changed again and again.
3. React.memo() also has some exception which will see in next line of code.

*/

/*
export const Demo = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1);
    }

    const decrementHandler = () => {
        setCount(count - 1);
    }

    console.log("Demo Component");

    return(
        <div>
            <button onClick={decrementHandler}>-</button>
            
            <Span>{10}</Span>
            <button onClick={incrementHandler}>+</button>
        </div>
    )
}

1. Here we have passed the 10 number as prop to Span component.
2. Here we will see that after changing the value of count value the Span component will not be re-render again because we have not passed dynamically change value but we have passed it to primitive value.
3. And we know that primitive data type take value by call by value not take by call by reference.

4. And we know that in call by value primitive data type has it's own memory location.
5. And React.memo() check it previous prop value with current prop value if value is same then it will not re-render component if value is different then it will re-render component again.
6. child prop save the value not location and it will compare with value not with location.
*/

/*
export const Demo = () => {
    const [count, setCount] = useState(0);


    const incrementHandler = () => {
        setCount(count + 1);
    }

    const decrementHandler = () => {
        setCount(count - 1);
    }

    console.log("Demo Component");

    return(
        <div>
            <button onClick={decrementHandler}>-</button>
            <Span>{[10,20]}</Span>
            <button onClick={incrementHandler}>+</button>
        </div>
    )
}


1. Now here we have passed the array of element.
2. Here we have noticed that if count value of Demo component does changing then Demo component has been re-rendered and also child component has also been re-rendered even child component prop value or state value does not changed.
3. This is happened because of array data type.
4. We know that array is non-primitive data type.
5. And if we want take value from non-primitive data type then we can take the value from reference not from value
5. And if we are passign the array value through prop to child component and we are using that array value inside our child component.
6. Then child component take the array value with the help of call by reference or from reference
7. Because we know that each non-primitive data type value take with the help of call by reference.
8. And on every re-render the reference or location of array will be changed that's why everytime child component will see that previous prop value have different reference but current prop value have different reference even value is same then it will re-render the child component again.

9. here prop store the reference of non-primitive data type it will not store the value.
*/


export const Demo = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1);

    }

    const decrementHandler = () => {
        setCount(count - 1);
    }

    console.log("Demo Component");

    return(

        <div>
            <Button clickHandler={decrementHandler}>-</Button>
            <Span>{[10,20]}</Span>
            <Button clickHandler={incrementHandler}>+</Button>
        </div>
    )
}

/*

1. Here we have replaced button element with Button component means now Demo component have three child component two times Button and one time Span component.
2. Now here if we try to change the count value in Demo component then Demo component will re-render this fine.
3. Span component will also be re-render which is also fine for now because we are using their array.
4. Decrement and Increment button component also be re-render even prop, children and state value of Button component does not changed.
5. Okay for resolve this let's wrap the Button component with React.memo();
6. Even after wrap the Button component with React.memo() method still Button component re-render again and again when count value has been changed.
7. This is happening because while changing the count state value in Demo component the Demo component will re-render.
8. Due to re-render the function created again and due to re-creation of function the reference of function got changed even function is arrow function or simple function.
9. And we have passed the function as a prop to Button component and Button component will compare the function with reference of previous function reference with current function reference.

10. Due to re-render of the Demo component the function reference got changed.
11. That's why Button component got re-rendered again and again.
12. If we passign function as prop to child component and child component got re-rendered so we can optimised this with useCallback hook.
*/