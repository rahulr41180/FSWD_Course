
import { useState, useEffect, useReducer } from "react";

/*
function App() {
	
	return (
		<div className="app">
			<button>-</button>
			<span>{0}</span>
			<button>+</button>
		</div>

	);
}

-> useReducer : useReducer() hook is used to state management as like we update the state with useState() hook.
-> useReducer() hook also re-render the component after state update.
-> I want to update the span value dynamically by clicking on - and + button.
-> To do this I will use useReducer() hook.
*/


function App() {
	const [state, dispature] = useReducer(reducerFn, 0)
	// console.log('state:', state) // 0
	
	return (
		<div className="app">
			<button>-</button>
			<span>{0}</span>
			<button>+</button>

		</div>
	);
}

/*
-> useReducer() : useReducer() hook take two argunment first is reducerFn to handle the state update task and second argument it take initialValue.
reducerFn is a function() to handle state udpate logic.
0 : is our initial value.
useReducer() hook having two things first is state which take the initialValue and dispature use to dispatch the action to reducer for updating the state.

*/

export default App;