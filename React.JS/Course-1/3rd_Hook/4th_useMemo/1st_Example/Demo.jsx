
import { useState, useCallback, useMemo } from "react";

import Span from "./Span";
import Button from "./Button"

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
            console.log('activate:', activate)
            setCount((prop) => prop - 1);
        }
    },[activate])


    const activationHandler = useCallback(() => {
        setActivate(true);
    },[])


    let valueArray = [10, 100];

    console.log("Demo Component");

    return(
        <div>
            <Button clickHandler={decrementHandler} btn="decrementHandler">-</Button>
            <Span>{valueArray}</Span>
            <Button clickHandler={incrementHandler} btn="incrementHandler">+</Button>

            <Button clickHandler={activationHandler} btn="activationHandler">Activate</Button>
        </div>
    )
    
}

1. As we have passed the valueArray to Span Component and valueArray is non-primitive data type so Span component will take the reference of valueArray.
Due to this our Span component will get re-render as nothing has been changed in Span component.

2. For optimised this we will use useMemo() hook.
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

            console.log('activate:', activate);
            setCount((prop) => prop - 1);
        }
    },[activate])

    const activationHandler = useCallback(() => {
        setActivate(true);
    },[])

    let valueArray = useMemo(() => {

        return [10,100];
    },[])

    console.log("Demo Component");

    return(
        <div>
            <Button clickHandler={decrementHandler} btn="decrementHandler">-</Button>
            <Span>{valueArray}</Span>

            <Button clickHandler={incrementHandler} btn="incrementHandler">+</Button>
            <Button clickHandler={activationHandler} btn="activationHandler">Activate</Button>
        </div>
    )
}

/*
1. Now here I am returning the array from useMemo() hooks and what useMemo() hooks do useMemo() hook store or create the returned value in React internal memory.
2. If Demo Component has been re-rendered than useMemo() will not re-create the value again means reference will not change instead of this useMemo() return the reference of return value from it's React internal Memory.

3. Due to this Span component will get same reference in prop.
4. So that Span Component will not re-render again.
5. useMemo() will use where we reference type data will changed.
*/