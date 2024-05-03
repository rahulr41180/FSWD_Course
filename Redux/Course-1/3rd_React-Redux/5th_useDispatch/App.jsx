
import './App.css';
import { useSelector } from "react-redux";
import { useState } from "react";
import { Account } from './Components/Account';
import { Bonus } from './Components/Bonus';

function App() {

  console.log("App Component");

  const { amount } = useSelector((state) => state.account);
  const { points } = useSelector((state) => state.bonus);
  
  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus : {points}</h3>
      <Account />
      <Bonus />
    </div>
  );
}

export default App;

/*

react-redux has also been providing a useDispatch() method.
We are using this method to send the action to reducer so that we will update the reducer state based on action type and value.
There is no other way to make communication between action and reducer or there is no other way to send the action to reducer.
useDispatch() will give us dispatch() method from Provider that wrapped over our whole app.

*/