
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


/*
const reducerFn = () => {
	console.log("reducerFn calling");
}
function App() {
	const [state, dispature] = useReducer(reducerFn, 0);
	// console.log('state:', state) // 0
	
	const decrementHandler = () => {
		dispature();

	}

	const incrementHandler = () => {
		dispature();
	}

	return (
		<div className="app">
			<button onClick={decrementHandler}>-</button>

			<span> {0} </span>
			<button onClick={incrementHandler}>+</button>
		</div>
	);
}

-> useReducer() : useReducer() hook take two argunment first is reducerFn to handle the state update task and second argument it take initialValue.
reducerFn is a function() to handle state udpate logic.

0 : is our initial value.
useReducer() hook having two things first is state which take the initialValue and dispature use to dispatch the action to reducer for updating the state.
-> reducerFn we will define outside the component
-> I have added two onClick() event handler on both button.
-> We are calling dispature() function whenever we will click on button.
-> After clicked on button dispature() function will and dispature() function is a part of useReducer() hook and useReducer hook also having a reducerFn() function so after called the dispatch() function useReducer hook internally call the reducerFn() internally
*/

/*

const reducerFn = () => {
	console.log("reducerFn calling");
}

function App() {
	const [state, dispature] = useReducer(reducerFn, {count : 0});
	// console.log('state:', state) // 0
	
	const decrementHandler = () => {

		dispature();
	}

	const incrementHandler = () => {
		dispature();
	}

	return (
		<div className="app">

			<button onClick={decrementHandler}>-</button>
			<span> {state.count} </span>
			<button onClick={incrementHandler}>+</button>
		</div>
	);
}

-> If I clicked on any one of the button then We will get an error because we haven't passed any value through dispature() as an argunment to action of reducerFn() to update the state value and we haven't written any logic to update the state value by using value has been passed by dispature() function
reducerFn() for handle the state value means if we did not pass any value throught dispature() as an argunemnt to action of reducerFn() and if we did not write any logic to hanlde the state value then reducerFn() internally set state value to undefined and here we want to show state.count value and count is not present inside the state after clicked on the button

*/

const reducerFn = (currState, action) => {
	console.log("reducerFn calling");
	switch(action) {
		case "increment" : 
			return { count : currState.count + 1};
		case "decrement" : 
			return { count : currState.count - 1};

		default : 
			return currState
	}
}

function App() {
	const [state, dispature] = useReducer(reducerFn, {count : 0});
	// console.log('state:', state) // 0
	
	
	const decrementHandler = () => {
		dispature("decrement");
	}

	const incrementHandler = () => {
		dispature("increment");
	}

	return (

		<div className="app">
			<button onClick={decrementHandler}>-</button>
			<span> {state.count} </span>
			<button onClick={incrementHandler}>+</button>
		</div>
	);
}

/*

-> reducerFn() will take two argunment first will be currentState and second will be action
-> currentState will be assigned to the value of current state value
-> action will be assigned to the value which we will be passed as an argunment through dispatureFn();
-> If we click on - button then "decrement" value assigned to the action perameter.
-> If we click on + button then "increment" value assigned to the action perameter.
-> We will be handled the state count value based on action perameter value.

Note : Why we are creating reducerFn() or any reducer() function outside the component that's because we haven't used any state and variable inside the reducerFn() function which we have created inside the component.
Means whatever we are going to use the state and variable value inside the reducerFn() those will be passed as an argument through dispature() function to action perameter.

Note : When we should use useState() hook or When we should use useReducer() hook
-> useState() : 
1. useState is the main state management tool.
2. useState is great for independent pieces of state data and it's best for simple state management.
-> useReducer() : 
1. useReducer() In general can be used to manage complex states where multiple related states can be updated together.
2. useReducer() is great when you need more powerful state management tool.
3. useReducer() can be considered for state management when dealing with related data or state.
4. useReducer() is better option when we have more complex state udpates or different cases or actions.

*/


export default App;