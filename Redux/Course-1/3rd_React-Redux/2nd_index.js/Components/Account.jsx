
import { useState } from "react";

export const Account = () => {

    const [account, setAccount] = useState({amount : 0})
    const [value, setValue] = useState(0);
    console.log('value:', typeof value)
    console.log('value:', value)

    const increment = () => {
        setAccount({amount : account.amount + 1});
    }


    const decrement = () => {
        setAccount({amount : account.amount - 1});
    }

    const incrementByAmount = (value) => {
        setAccount({amount : account.amount + value});
    }

    return (
        <div>
            <h4>Account Component</h4>
            <h3>Amount : ₹ {account.amount}</h3>
            <button onClick={increment}>Increment +</button>
            <button onClick={decrement}>Decrement -</button>
            <input type="text" name="" id="" onChange={(event) => setValue(+event.target.value)} />
            <button onClick={() => incrementByAmount(value)}>Increment By {value} +</button>
        </div>
    )
}