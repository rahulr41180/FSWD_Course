
import './App.css';
import { useSelector } from "react-redux";
import { useState } from "react";
import { Account } from './Components/Account';
import { Bonus } from './Components/Bonus';

function App() {

  const { amount } = useSelector((state) => state.account);
  const { points } = useSelector((state) => state.bonus);

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus : {points}</h3>
      <Account increment={""} decrement={""} incrementByAmount={""} account={""} setValue={""} value={""} />
      <Bonus bonus={""} incrementBonus={""} />
    </div>
  );
}

export default App;

/* 
react-redux also provide a hook called useSelector().
useSelector() directly connect with all reducers state.
Means For getting the global store state value then we have to use the useSelector() hook.
By using this hook we can get updated state value from global store.
If we will update the value of state in global store with the help of dispatch() method.
By using this hook we will be able to get updated value from this hook.
We would be able to get whole state value from global state in any component 

Note : const { account, bonus } = useSelector((state) => state);
We could not be directly get the state because if there will be any update done inside state then it re-render the all component wherever we are getting state like this (const { account, bonus } = useSelector((state) => state);)
eventhough that update not done in all component means if we are updating a perticular reducer state inside global store.
and that perticular state value we are using in only one of the component but if we getting state in another component like this(const { account, bonus } = useSelector((state) => state););
then another component will also be re-render unnecessary.

To resove this issue we have to get the respective reducer state so that only those component will re-render who are using that reducer state value like :
const { amount } = useSelector((state) => state.account);

Selector unknown returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, 
as they will cause a rerender whenever *anything* in state changes.
*/