
import { useState, Suspense } from "react";
import { SearchResults } from "./Components/SearchResults";

function App() {
	const [query, setQuery] = useState("");

	return (
		<div className="app">
			<label>
				Search albums:
				<input value={query} onChange={e => setQuery(e.target.value)} />
			</label>
			<Suspense fallback={<h2>Loading...</h2>}>
				<SearchResults query={query} />
			</Suspense>
		</div>
	);
}


export default App;

/*
useDeferredValue(value, initialValue?) : 
value: The value you want to defer. It can have any type.
optional initialValue: A value to use during the initial render of a component. If this option is omitted, 
useDeferredValue will not defer during the initial render, because there’s no previous version of value that it can render instead.

Returns 
currentValue: During the initial render, the returned deferred value will be the same as the value you provided. 
During updates, React will first attempt a re-render in the background with the old value (so it will return the old value), 
and then try another re-render in the background with the new value (so it will return the updated value).

The values you pass to useDeferredValue should either be primitive values (like strings and numbers) or objects created outside of rendering.
If you create a new object during rendering and immediately pass it to useDeferredValue, it will be different on every render, 
causing unnecessary background re-renders.

When useDeferredValue receives a different value (compared with Object.is), 
in addition to the current render (when it still uses the previous value), it schedules a re-render in the background with the new value. 
The background re-render is interruptible: if there’s another update to the value, React will restart the background re-render from scratch. 
For example, if the user is typing into an input faster than a chart receiving its deferred value can re-render, 
the chart will only re-render after the user stops typing.

useDeferredValue is integrated with <Suspense>. 
If the background update caused by a new value then it suspends the UI, but the user will not see the fallback. 
They will see the old deferred value until the data loads.

useDeferredValue does not by itself prevent extra network requests.


There is no fixed delay caused by useDeferredValue itself. As soon as React finishes the original re-render, 
React will immediately start working on the background re-render with the new deferred value. 
Any updates caused by events (like typing) will interrupt the background re-render and get prioritized over it.

The background re-render caused by useDeferredValue does not fire Effects until it’s committed to the screen. 
If the background re-render suspends, its Effects will run after the data loads and the UI updates.

Showing stale content while fresh content is loading
In this example, the SearchResults component suspends while fetching the search results. 
Try typing "a", waiting for the results, and then editing it to "ab". 
The results for "a" get replaced by the loading fallback.
*/