
import { useState } from "react";
import { useSelector } from "react-redux";

export const Account = () => {

    console.log("Account Component");

    const [value, setValue] = useState("");
    
    const { amount } = useSelector((state) => state.account);
    const { points } = useSelector((state) => state.bonus);

    return (
        <div>
            <h4>Account Component</h4>
            <h3>Amount : ₹ {amount}</h3>
            <button onClick={""}>Increment +</button>
            <button onClick={""}>Decrement -</button>
            <input type="text" name="" id="" onChange={(event) => setValue(event.target.value)} />
            <button onClick={""}>Increment By {""} +</button>
        </div>
    )
}