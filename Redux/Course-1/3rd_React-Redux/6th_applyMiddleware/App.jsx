
import './App.css';
import { useSelector } from "react-redux";
import { useState } from "react";
import { Account } from './Components/Account';
import { Bonus } from './Components/Bonus';

function App() {

  console.log("App Component");
  const { amount, pending, error } = useSelector((state) => state.account);
  console.log('error:', error)
  const { points } = useSelector((state) => state.bonus);

  return (
    <div className="App">
      <h4>App</h4>
      {pending ? <h3>Loading....</h3>
        :
        error ? <h3>{error}</h3>
          :
          <h3>Current Amount : {amount}</h3>
      }
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus : {points}</h3>
      <Account />
      <Bonus />
    </div>
  );
}

export default App;

/* 
middleware present between dispatch and reducer 
if action through by dispatch will take time to resolve then middleware pause that dispatch till 
the action will resolve after that we will again through a action by 
dispatch(this dispatch will access through middleware action function we can also access the getState method from middleware action function) 
now dispatch able to dispatched their action to reducer.
*/