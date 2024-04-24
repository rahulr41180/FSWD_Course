
import './App.css';

import { Account } from './Components/Account';
import { Bonus } from './Components/Bonus';
import { useState } from "react";

function App() {

  const [account, setAccount] = useState({amount : 0});
    const [value, setValue] = useState(0);
    const [bonus, setBonus] = useState({ points : 0 });

    const incrementBonus = () => {
        setBonus({points : bonus.points + 1})
    }

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
    <div className="App">

      <h4>App</h4>
      <h3>Current Amount : {account.amount}</h3>
      <h3>Total Bonus : {bonus.points}</h3>

      <Account increment={increment} decrement={decrement} incrementByAmount={incrementByAmount} account={account} setValue={setValue} value={value} />
      <Bonus bonus={bonus} incrementBonus={incrementBonus} />
    </div>
  );
}

export default App;

// Now I want to show Amount and Bonus from Account and Bonus component.
// So, To do this we need to do prop lifting.