
import { useState } from "react";

export const Account = (props) => {

    return (
        <div>
            <h4>Account Component</h4>
            <h3>Amount : ₹ {props.account.amount}</h3>
            <button onClick={props.increment}>Increment +</button>
            <button onClick={props.decrement}>Decrement -</button>
            <input type="text" name="" id="" onChange={(event) => props.setValue(+event.target.value)} />

            <button onClick={() => props.incrementByAmount(props.value)}>Increment By {props.value} +</button>
        </div>
    )
}