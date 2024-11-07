
import { Product } from "./Components/Product";

function App() {

	return (
		<>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />

		</>
	);
}

export default App;

/* 
-> Here I am calling Product Component five times means App Component have five independent Product Component Instence.
-> Inside the Product Component I am calling ProductDetails Component means App have five independent Product Component Instance and each Indenpendent Product Component Instance have it's own ProductDetails Component Instance.

-> Inside the ProductDetails I am calling Button Component two times means App have five Product and each Product have it's Own ProductDetails and Each ProductDetails Component Instance have it's own two Button Component Instance.
-> And inside we initialised the count state which means each App have five Product and each Product have it's own ProductDetails with seperate count state.
-> Which means if we suppose change count of 1st product then only change will happened in first product component instance not in another Product Component Instance means count value will be got change in first Product Component Instance not in other.
-> And also if we changing the count state value and we know that count state is a part of ProductDetails then after changing the count state value the App component will not re-render also Product Component will also not get re-render instead ProductDetails Component Instance will re-render and both Button component Instance will also got re-render if prop of those button has been changed other wise Button Component Instance will not get re-render again.
*/