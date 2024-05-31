
import { useState, Suspense, useDeferredValue } from "react";
import { SlowList } from "./Components/SlowList";

function App() {
	const [text, setText] = useState('');
	const defferedValue = useDeferredValue(text);
	return (
		<>
			<input value={text} onChange={e => setText(e.target.value)} />
			<SlowList text={defferedValue} />
		</>
	);
}

export default App;

/*
Deferred re-rendering of the list

So it's means that if I am typing fast so in between of typing some time 
my deferredValue might be change and because of that SlowList props would be get new Value and because of 
that my SlowList component would be re-render

Exactly. Even though useDeferredValue delays updates to deferredValue, it doesn't prevent them entirely. 
If you're typing quickly, there's a chance that deferredValue will update while you're typing, 
causing SlowList to receive a new prop value and triggering a re-render of the SlowList component.

The delay introduced by useDeferredValue simply means that the updates to deferredValue might not occur immediately with each keystroke, 
but they will eventually catch up. So, if you're typing quickly, 
you may still observe SlowList re-rendering occasionally as deferredValue updates.
*/