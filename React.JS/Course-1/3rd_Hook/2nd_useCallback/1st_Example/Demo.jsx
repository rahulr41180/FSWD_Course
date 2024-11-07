
import { useState, useCallback } from "react";

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
            <Button clickHandler={decrementHandler}>-</Button>
            <Span>{10}</Span>
            <Button clickHandler={incrementHandler}>+</Button>
        </div>
    )
}

1. Here we know that whenever the state or prop of Demo component will change the demo component re-render and due to this Button component will re-render even nothing got changed in Button component this is happened because we have passed the function with prop to Button component and prop take the reference of function defination not defination and on every re-render of Demo component the function also will re-create due to re-creation of function the reference of function got changed and if reference got changed than Button component prop also get different function prop and if prop value has been changed than Reat.memo() re-rendered the component again.
2. We can resolve this issue with useCallback() hook.

*/

/*
export const Demo = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = useCallback(() => {
        setCount(count + 1);
    },[])


    const decrementHandler = () => {
        setCount(count - 1);
    }

    console.log("Demo Component");

    return(

        <div>
            <Button clickHandler={decrementHandler}>-</Button>

            <Span>{10}</Span>
            <Button clickHandler={incrementHandler}>+</Button>
        </div>
    )
}

1. Here we have wraped the incrementHandler function with useCallback and useCallback take a function definition and a array of depecencies and it store the given function definition inside React Internal memory and return to variable.

2. So that whenever the Demo component re-render it's not re-create function definition again. It will just return the stored function definition from React Internal memory into variable.
3. Due to this reference does not change of that function.
4. If reference does not change that Button component will get same reference from prop if reference value does not changing that than React.memo() will not re-render the Button component again.
5. What will happen
1. Demo Component will re-render when count state value change this is fine.
2. DecrementHandler Button component will re-render when count state value change this is fine because we haven't wraped decrementHandler function with useCallback hook.
3. Span will not re-render this is also fine because here we have passed only static value to Span Component.
4. incrementHanlder function will not re-render and this is also fine. Because we have wrapped it with useCallback() hook.
*/

/*
export const Demo = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = useCallback(() => {
        setCount(count + 1);
    },[])

    const decrementHandler = useCallback(() => {
        setCount(count - 1);

    },[])

    console.log("Demo Component");

    return(

        <div>
            <Button clickHandler={decrementHandler}>-</Button>
            <Span>{10}</Span>

            <Button clickHandler={incrementHandler}>+</Button>
        </div>
    )
}

1. Here I have wraped both function with useCallback hook means both function will not re-created again.
-> Now what will be the execution
1. At first re-render all the parent and child component will re-render.

-> After change the state value or prop value of Demo what will happen
1. Demo re-render
2. DecrementHandler Button component will not re-render
3. Span component will not re-render.
4. IncrementHandler Button component will not re-render

*/



/*
export const Demo = () => {
    const [count, setCount] = useState(0);
    const [activate, setActivate] = useState(false);

    const incrementHandler = useCallback(() => {
        setCount(count + 1);
    },[])

    const decrementHandler = useCallback(() => {
        setCount(count - 1);

    },[])

    const activationHandler = useCallback(() => {
        setActivate(true);
    },[])
    console.log("Demo Component");


    return(
        <div>
            <Button clickHandler={decrementHandler} btn="decrementHandler">-</Button>
            <Span>{10}</Span>
            <Button clickHandler={incrementHandler} btn="incrementHandler">+</Button>
            <Button clickHandler={activationHandler} btn="activationHandler">Activate</Button>
        </div>
    )
}

1. As we know that useCallback also take another argument which is array of dependencies.
2. Array of dependencies will tell to useCallback that whenever dependencies will change please also re-create the function definition in given variable with updated variable value or updated value.
3. Be ansure that all dependencies must use in component or inside function.
4. And we know if function re-creation happened which means reference also got changed if reference got changed than all the respective child component where we have passed that function that will also re-render because of reference changed.
5. But we want whenever given dependencies value got change please update the function definition and also update the child component.
*/

/*
export const Demo = () => {
    const [count, setCount] = useState(0);

    const [activate, setActivate] = useState(false);

    const incrementHandler = useCallback(() => {
        if(activate) {
            console.log('activate:', activate)
            setCount(count + 1);
        }
    },[])


    const decrementHandler = useCallback(() => {
        if(activate) {
            setCount(count - 1);
        }
    },[])

    const activationHandler = useCallback(() => {
        setActivate(true);
    },[])

    console.log("Demo Component");

    return(
        <div>
            <Button clickHandler={decrementHandler} btn="decrementHandler">-</Button>
            <Span>{count}</Span>
            <Button clickHandler={incrementHandler} btn="incrementHandler">+</Button>
            <Button clickHandler={activationHandler} btn="activationHandler">Activate</Button>
        </div>

    )
}
*/

/*
export const Demo = () => {
    const [count, setCount] = useState(0);

    const [activate, setActivate] = useState(false);

    const incrementHandler = useCallback(() => {
        if(activate) {
            console.log('activate:', activate)
            setCount(count + 1);
        }
    },[activate])


    const decrementHandler = useCallback(() => {

        if(activate) {
            setCount(count - 1);
        }
    },[])

    const activationHandler = useCallback(() => {
        setActivate(true);
    },[])

    
    console.log("Demo Component");

    return(
        <div>
            <Button clickHandler={decrementHandler} btn="decrementHandler">-</Button>
            <Span>{count}</Span>
            <Button clickHandler={incrementHandler} btn="incrementHandler">+</Button>
            <Button clickHandler={activationHandler} btn="activationHandler">Activate</Button>
        </div>

    )
}
*/

/*
export const Demo = () => {
    const [count, setCount] = useState(0);

    const [activate, setActivate] = useState(false);

    const incrementHandler = useCallback(() => {
        if(activate) {
            console.log('activate:', activate)
            setCount((prop) => prop + 1);
        }
    },[activate])


    const decrementHandler = useCallback(() => {

        if(activate) {
            setCount(count - 1);
        }
    },[])

    const activationHandler = useCallback(() => {
        setActivate(true);
    },[])

    
    console.log("Demo Component");

    return(
        <div>
            <Button clickHandler={decrementHandler} btn="decrementHandler">-</Button>
            <Span>{count}</Span>
            <Button clickHandler={incrementHandler} btn="incrementHandler">+</Button>
            <Button clickHandler={activationHandler} btn="activationHandler">Activate</Button>
        </div>

    )
}
*/

export const Demo = () => {
    const [count, setCount] = useState(0);

    const [activate, setActivate] = useState(false);

    const incrementHandler = useCallback(() => {
        if(activate) {
            console.log('activate:', activate)
            setCount((prop) => prop + 1);
        }
    },[activate])


    const decrementHandler = useCallback(() => {

        if(activate) {
            console.log('activate:', activate)
            setCount((prop) => prop - 1);
        }
    },[activate])

    const activationHandler = useCallback(() => {
        setActivate(true);
    },[])

    
    console.log("Demo Component");

    return(
        <div>
            <Button clickHandler={decrementHandler} btn="decrementHandler">-</Button>
            <Span>{count}</Span>
            <Button clickHandler={incrementHandler} btn="incrementHandler">+</Button>
            <Button clickHandler={activationHandler} btn="activationHandler">Activate</Button>

        </div>
    )
}