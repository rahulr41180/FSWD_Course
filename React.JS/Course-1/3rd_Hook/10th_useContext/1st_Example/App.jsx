
import { useState, useEffect, useContext } from "react";

function App() {

	return (
		<div className="app">

		</div>
	);
}


/* 
Limitations of useContext hook

1. Whenever we use context in a component, it might make that component non-resuable.
Example : Suppose we have a seperate button component and that button component we will use in multiple component
based on multiple component it will work accordinly. Means one is using that button for logOut and one is using that button for logIn and so on.
For did this type of logic we will pass a prop with function() value to handle different logic like logIn function() and logOut function() and so on.
But if we will use a function that would we written in context and we will use that function in button component then button component will run same function for every components those are using button component means easily we can't tell to button that run this function() logic whenever this component will appear on UI or whenever respective component asked to run that perticular logic but What would be the condition when a one component using that button component in different places for handling the different functionality and this type of functionlity can't be handled by context api.
but previously we were handled this functionality by props means from every component we were passing respective function to button component through props and due to this button will run respective function() logic that passed by respective component.

2. React context is not optimized for high frequency changes.

Note : We can use other tools like Redux for managing app wide state for frequently changing states.
*/

export default App;