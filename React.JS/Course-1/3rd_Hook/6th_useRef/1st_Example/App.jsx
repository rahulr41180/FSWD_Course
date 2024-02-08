
import { useState } from "react";

import { RefDemo } from "./Components/RefDemo";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
                  <RefDemo />

		</>

	);
}

export default App;