
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incBonusPointAction } from "../Actions";

export const Bonus = (props) => {

    console.log("Bonus Component");
    const { amount } = useSelector((state) => state.account);
    const { points } = useSelector((state) => state.bonus);
    const dispatch = useDispatch();

    
    return (
        <div>
            <h4>Bonus Component</h4>
            <h3>Total point : {points}</h3>
            <button onClick={() => dispatch(incBonusPointAction())}>Increment +</button>
        </div>
    )
}