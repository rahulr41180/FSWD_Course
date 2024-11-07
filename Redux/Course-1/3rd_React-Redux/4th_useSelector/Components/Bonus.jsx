
import { useState } from "react";
import { useSelector } from "react-redux";

export const Bonus = (props) => {

    const { amount } = useSelector((state) => state.account);
    const { points } = useSelector((state) => state.bonus);

    return (
        <div>
            <h4>Bonus Component</h4>
            <h3>Total point : {points}</h3>
            <button onClick={""}>Increment +</button>
        </div>
    )
    
}