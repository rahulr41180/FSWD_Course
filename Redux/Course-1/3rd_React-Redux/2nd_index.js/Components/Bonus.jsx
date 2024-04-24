
import { useState } from "react";

export const Bonus = () => {

    const [bonus, setBonus] = useState({ points : 0 });

    const increment = () => {
        setBonus({points : bonus.points + 1})
    }

    return (
        <div>
            <h4>Bonus Component</h4>
            <h3>Total point : {bonus.points}</h3>
            <button onClick={increment}>Increment +</button>
        </div>
    )
}