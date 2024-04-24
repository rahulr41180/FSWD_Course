
import { useState } from "react";

export const Bonus = (props) => {

    return (
        <div>
            <h4>Bonus Component</h4>
            <h3>Total point : {props.bonus.points}</h3>
            <button onClick={props.incrementBonus}>Increment +</button>
        </div>
    )
    
}