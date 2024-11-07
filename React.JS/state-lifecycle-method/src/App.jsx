import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from "react";

/*
The render method will be called each time an update happens,
but as long as we render <Clock /> into the same DOM node, 
only a single instance of the Clock class will be used. 
This lets us use additional features such as local state and lifecycle methods.
*/
function Clock() {

  // const d = new Date();
  // console.log('d:', d)

  const [date, setDate] = useState(new Date())
  console.log('date:', date)
  console.log('date:', date.toLocaleTimeString());
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;
