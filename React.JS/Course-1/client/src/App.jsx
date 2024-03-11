
import { useState, useEffect, useReducer } from "react";

const reducerFn = (currState, action) => {
	console.log("reducerFn calling");
}

function App() {
	const [state, dispature] = useReducer(reducerFn, {count : 0});

	return (
		<div className="app">

		</div>
	);
}

export default App;