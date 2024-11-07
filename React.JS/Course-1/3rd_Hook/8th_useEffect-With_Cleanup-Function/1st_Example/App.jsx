
import { useState, useEffect } from "react";

/*
function App() {
	const [name, setName] = useState("");
	
	useEffect(() => {
		console.log('name:', name);
	},[name])
	
	return (

		<div className="app">
			App Component
			<input type="text" onChange={(event) => setName(event.target.value)} />		
		</div>

	);
}


-> Here console.log("name :", name); will print the value every time whenever I entered anything in input tag
-> Because we have passed a dependencies in useEffect(() => [name]); whenever name state change useEffect(); hook will run;
-> I want that if I am entering any value inside input tag then useEffect() print the value after some delay;
-> Means when I stop entering for some seconds then useEffect(); print the value;
-> If we will do that but still useEffect() will call everytime but useEffect() will not print value for everything it will wait than it will print value.
-> To do this we will use setTimout() function and cleanup function in useEffect();
*/

/*

function App() {
	
	const [name, setName] = useState("");
	
	useEffect(() => {
		setTimeout(() => {
			console.log('name:', name);
		},2000)
	},[name])
	
	return (

		<div className="app">
			App Component
			<input type="text" onChange={(event) => setName(event.target.value)} />		
		</div>
	);
}


-> Here I am seeing that after on every input if we are stop typing for 2 second than after 2 second the console.log() will print name value
-> But we have observed that after 2 second every typed value print but we don't want that every typed value should print.
-> What we want that if we are typing something continuosly and we we stop typing for 2 second than at that time whatever value now there that only will print not whole value should print.
-> To do this we have to clear previous setTimeout() id because every setTimout generate a unique id to identify them.
-> To clear the previous id we will use clearTimeout
-> But how to do this in useEffect() we can do with cleanup function because every useEffect() will return cleanup function for unmounting the previous event happened inside the useEffect() so that previous event will not cause any problem.
*/

function App() {
	
	const [name, setName] = useState("");
	
	useEffect(() => {
		let id = setTimeout(() => {
			console.log('name:', name);
		},2000)
		// console.log('id:', id)
		return () => { console.log("cleanup function"); clearTimeout(id); }
	},[name])
	
	return (
		<div className="app">
			App Component
			<input type="text" onChange={(event) => setName(event.target.value)} />		
		</div>
	);
}

/*

-> Here we can see that once I will stop typing for 2 second than only than console.log(name) value will print. Till than nothing got print.
-> Because on every typed value the useEffect() hook run and we wrote logic inside useEffect() wait for two second than print the typed value.
-> If we are typing continuously we are not stop typing for 2 second than useEffect() will return the cleanup function.

Note : 
-> When the first time component mount that time whatever logic we wrote inside the useEffect() hook that will only run means cleanup function will not run at first time mean useEffect() will not return cleanup() function at first time when useEffect() run first time only logic will run when component mount.
-> After first time if useEffect() hook will run again than useEffect() first return the cleanup function means cleanup function clear the previous event after that useEffect() run logic that wrote inside the useEffect().
-> This things will happen with all the event trigering function or higher order function async function.
-> Like : setInterval(), setTimeout() etc.

*/

export default App;