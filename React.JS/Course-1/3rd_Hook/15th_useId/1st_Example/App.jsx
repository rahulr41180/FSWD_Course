
import { useId } from "react";
import { InputComponent } from "./Components/InputComponent";

function App() {
	return (
		<div className="app">
			<InputComponent />
			<InputComponent />
			<InputComponent />
			<InputComponent />
		</div>
	);
}

export default App;


/*
useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
const id = useId()
Call useId at the top level of your component to generate a unique ID:
useId should not be used to generate keys in a list. Keys should be generated from your data.

If we click on any checkbox label text then it target only first checkbox input element at everytime because id and htmlFor value is same for all the element.

To resolve this we can use useId hook given by React.
*/

/*
Now everything is fine if we click on any checkbox label text then it target only their respective checkbox.

But there also has one problem like if we have multiple label with their respective checkbox then what will happened will it work same or there has same issue like before if we click on any checkbox label text
then it target only first checkbox
*/