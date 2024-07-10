
import { useId, useTransition, useState } from "react";

function App() {
	const [tab, setTab] = useState("about");

	function selectTab(nextTab) {
		setTab(nextTab);
	}

	return (
		<div className="app">
		</div>
	);
}

export default App;


/*
useTransition :
useTransition is a React Hook that lets you update the state without blocking the UI.

const [isPending, startTransition] = useTransition()

useTransition does not take any parameters.
useTransition returns an array with exactly two items:

The isPending flag that tells you whether there is a pending Transition.
The startTransition function that lets you mark a state update as a Transition.

----------------------------------------------

scope: A function that updates some state by calling one or more set functions. 
React immediately calls scope with no parameters and marks all state updates 
scheduled synchronously during the scope function call as Transitions. 
They will be non-blocking and will not display unwanted loading indicators.

You can wrap an update into a Transition only if you have access to the set function of that state. 
If you want to start a Transition in response to some prop or a custom Hook value, try useDeferredValue instead.

The function you pass to startTransition must be synchronous. React immediately executes this function, 
marking all state updates that happen while it executes as Transitions. 
If you try to perform more state updates later (for example, in a timeout), they won’t be marked as Transitions.

A state update marked as a Transition will be interrupted by other state updates. 
For example, if you update a chart component inside a Transition, 
but then start typing into an input while the chart is in the middle of a re-render, 
React will restart the rendering work on the chart component after handling the input update.

Transition updates can’t be used to control text inputs.

If there are multiple ongoing Transitions, React currently batches them together. 
This is a limitation that will likely be removed in a future release.

With a Transition, your UI stays responsive in the middle of a re-render. 
For example, if the user clicks a tab but then change their mind and click another tab, 
they can do that without waiting for the first re-render to finish.

Example : Updating the current tab without a Transition

In this example, the “Posts” tab is also artificially slowed down so that it takes at least a second to render. 
Unlike in the previous example, this state update is not a Transition.

Click “Posts” and then immediately click “Contact”. 
Notice that the app freezes while rendering the slowed down tab, and the UI becomes unresponsive. 
This state update is not a Transition, so a slow re-render freezed the user interface.

*/