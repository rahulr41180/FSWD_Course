
import { useState, Suspense, useDeferredValue } from "react";
import { SlowList } from "./Components/SlowList";

function App() {
	const [text, setText] = useState('');
	return (
		<>
			<input value={text} onChange={e => setText(e.target.value)} />
			<SlowList text={text} />
		</>
	);
}


export default App;

/*
First, optimize SlowList to skip re-rendering when its props are the same. To do this, wrap it in memo:

However, this only helps if the SlowList props are the same as during the previous render. 
The problem you’re facing now is that it’s slow when they’re different, and when you actually need to show different visual output.

This does not make re-rendering of the SlowList faster. 
However, it tells React that re-rendering the list can be deprioritized so that it doesn’t block the keystrokes. 
The list will “lag behind” the input and then “catch up”. Like before, React will attempt to update the list as soon as possible, 
but will not block the user from typing.

Example : Unoptimized re-rendering of the list
*/