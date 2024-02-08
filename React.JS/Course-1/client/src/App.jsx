
import { useState, useEffect } from "react";

/*
function App() {
	console.log("App component rendered")
	const [resourceType, setResourceType] = useState("Home");
	console.log('resourceType:', resourceType)

	return (
		<div className="app">
			<button onClick={() => {setResourceType("Home")}}>Home</button>
			<button onClick={() => {setResourceType("About")}}>About</button>
			<button onClick={() => {setResourceType("Contact")}}>Contact</button>

			<h3>{resourceType}</h3>
		</div>
	);
}

-> useEffect is used for managing the side Effect of our component
-> HTTP request, interval function control.

*/

/*
function App() {
	const [resourceType, setResourceType] = useState("Home");
	
	useEffect(() => {
		console.log("App component rendered")
		console.log('resourceType:', resourceType)
	},[])

	return (
		<div className="app">
			<button onClick={() => {setResourceType("Home")}}>Home</button>
			<button onClick={() => {setResourceType("About")}}>About</button>
			<button onClick={() => {setResourceType("Contact")}}>Contact</button>

			<h3>{resourceType}</h3>
		</div>
	);

}
*/

function App() {
	const [resourceType, setResourceType] = useState("Home");
	
	useEffect(() => {
		console.log("App component rendered");

		console.log('resourceType:', resourceType)
	},[resourceType])

	return (
		<div className="app">
			<button onClick={() => {setResourceType("Home")}}>Home</button>
			<button onClick={() => {setResourceType("About")}}>About</button>
			<button onClick={() => {setResourceType("Contact")}}>Contact</button>
			<h3>{resourceType}</h3>
			
		</div>
	);
	
}

export default App;