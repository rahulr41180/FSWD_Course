
import { useState, useCallback } from "react";

import Button from "./Button"

export const ProductDetails = () => {
    console.log("ProductDetails Component")

    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prop) => prop + 1);

    },[])

    const decrement = useCallback(() => {
        setCount((prop) => prop - 1);
    },[])

    return (
        <div>
            <Button clickHandle={decrement}>-</Button>

            <span>{count}</span>
            <Button clickHandle={increment}>+</Button>
        </div>
    )
}