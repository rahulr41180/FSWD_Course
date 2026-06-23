import { useState } from 'react'
import './App.css'
import { useCustomEffect1 } from './Hooks/UseEffectCustomHook/CustomUseEffectHookWithUseRef';

function App() {
  const [count, setCount] = useState(0);

  // Problem Is With This
  /* 
    Render Phase
      ↓
    Callback Executes useCustomEffect Callback
      ↓
    DOM Not Updated Yet

    Real useEffect executes after rendering.

    Render
      ↓
    DOM Commit
      ↓
    useEffect
  */
  useCustomEffect1(() => {
    setCount((prev) => prev + 1)
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </>
  )
}

export default App
