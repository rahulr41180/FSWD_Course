
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
A common alternative UI pattern is to defer updating the list of results and to keep showing the previous results until the new results are ready. 
Call useDeferredValue to pass a deferred version of the query down:

The query will update immediately, so the input will display the new value. However, 
the deferredQuery will keep its previous value until the data has loaded, 
so SearchResults will show the stale results for a bit.


*/