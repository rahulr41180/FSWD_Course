
import { useState } from "react";

import { Demo } from "./Components/Demo";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
            <Demo />

		</>

	);
}

export default App;