
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction, initUserAction, incrementByAmountAction, getUserAction } from "../Actions";

export const Account = () => {

    console.log("Account Component");
    const [value, setValue] = useState("");
    const { amount } = useSelector((state) => state.account);
    const { points } = useSelector((state) => state.bonus);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Account Component</h4>
            <h3>Amount : ₹ {amount}</h3>
            <button onClick={() => dispatch(incrementAction())}>Increment +</button>
            <button onClick={() => dispatch(decrementAction())}>Decrement -</button>
            <input type="number" name="" id="" onChange={(event) => setValue(+event.target.value)} />
            <button onClick={() => dispatch(incrementByAmountAction(value))}>Increment By {value} +</button>
            <button onClick={() => dispatch(getUserAction(1))}>Increment Amount By User</button>
        </div>
    )
}