
import { useState } from 'react';
import Pages from './Pages/export';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Pages.LoginPage />
    </div>
  )
}

export default App
