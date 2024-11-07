
import { useState, Suspense, useDeferredValue } from "react";
import { SearchResults } from "./Components/SearchResults";

function App() {
	const [query, setQuery] = useState("");
	console.log("App Component");
	const deferredQuery = useDeferredValue(query);

	return (
		<div className="app">
			<label>
				Search albums:
				<input value={query} onChange={e => setQuery(e.target.value)} />
			</label>
			<Suspense fallback={<h2>Loading...</h2>}>
				<SearchResults query={deferredQuery} />
			</Suspense>
		</div>
	);
}


export default App;

/*
A common alternative UI pattern is to defer updating the list of results and to keep showing the previous results until the new results are ready. 
Call useDeferredValue to pass a deferred version of the query down:

The query will update immediately, so the input will display the new value. However, 
the deferredQuery will keep its previous value until the data has loaded, 
so SearchResults will show the stale results for a bit.


Enter "a" in the example below, wait for the results to load, and then edit the input to "ab". 
Notice how instead of the Suspense fallback, 
you now see the stale result list until the new results have loaded:

Note that there is still a network request per each keystroke. What’s being deferred here is displaying results (until they’re ready), 
not the network requests themselves. Even if the user continues typing, responses for each keystroke get cached, 
so pressing Backspace is instant and doesn’t fetch again.
*/