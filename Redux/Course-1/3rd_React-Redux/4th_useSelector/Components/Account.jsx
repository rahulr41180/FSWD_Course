
import { useState } from "react";
import { useSelector } from "react-redux";

export const Account = () => {

    const { amount } = useSelector((state) => state.account);
    const { points } = useSelector((state) => state.bonus);

    return (
        <div>
            <h4>Account Component</h4>

            <h3>Amount : ₹ {points}</h3>
            <button onClick={""}>Increment +</button>
            <button onClick={""}>Decrement -</button>
            <input type="text" name="" id="" onChange={""} />
            <button onClick={""}>Increment By {""} +</button>
        </div>
    )

}