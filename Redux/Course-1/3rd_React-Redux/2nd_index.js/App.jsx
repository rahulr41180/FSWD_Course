
import './App.css';

import { Account } from './Components/Account';
import { Bonus } from './Components/Bonus';

function App() {
  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount :</h3>
      <h3>Total Bonus :</h3>

      <Account />
      <Bonus />

    </div>
  );
}

export default App;
