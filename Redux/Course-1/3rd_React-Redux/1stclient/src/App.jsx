
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


*/