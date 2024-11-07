
import './App.css';

import { Account } from './Components/Account';
import { Bonus } from './Components/Bonus';
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount : {""}</h3>
      <h3>Total Bonus : {""}</h3>
      <Account increment={""} decrement={""} incrementByAmount={""} account={""} setValue={""} value={""} />
      <Bonus bonus={""} incrementBonus={""} />
    </div>
  );
}

export default App;


/*
Provider : Now here provider has accessed to global store means it has global state, it has dispatch() method.
Means we will be able to get those global state and dispatch() method from Provider because we have wraped it around our whole app.

How we will get this.
we will get this by using useSelector() hook and useDispatch() hook.
These hooks are provided by react-redux library.
useSelector() hook is using for getting the global state.
useDispatch() hook is using for getting the access of dispatch() method.

*/