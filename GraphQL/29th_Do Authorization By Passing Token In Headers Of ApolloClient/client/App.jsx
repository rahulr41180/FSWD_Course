
import { useState } from 'react';
import Components from './Components/export';
import { useRoutes } from 'react-router-dom';
import { routes } from "./AllRoutes";

function App() {
  const [count, setCount] = useState(0)
  const element = useRoutes(routes);

  return (
    <div>

      <Components.NavbarComponent />
      {element}
    </div>
  )
}

export default App
