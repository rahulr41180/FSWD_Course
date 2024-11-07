import logo from './logo.svg';
import './App.css';

import { Donut } from 'react-dial-knob'
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function App() {
  const [value, setValue] = useState(0);
  const handleValue = (val) => {
    setValue(val);
    document.body.onmouseup = () => {

      handlePostRequest();

    }
  }
  const handlePostRequest = useCallback(() => {
    axios.post("", {

    }).then(() => {

    }).catch(() => {

    })
  },[])

  useEffect(() => {
   handlePostRequest();
  },[])

  return (
    <Donut
        diameter={200}
        min={0}
        max={100}
        step={1}
        value={value}
        theme={{
            donutColor: 'blue'
        }}
        onValueChange={(e) => {
          handleValue(e);
        }}
        // onRelease={() => {}
        ariaLabelledBy={'my-label'}
    >
        <label id={'my-label'}>Some label</label>
    </Donut>
  )
}

export default App;
