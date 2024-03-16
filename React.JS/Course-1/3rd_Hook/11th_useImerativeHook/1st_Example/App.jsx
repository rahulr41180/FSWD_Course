
import { useState, useEffect, useContext, useRef } from "react";

/*
function App() {

	const emailRef = useRef();
	const passRef = useRef();

	const handleEmail = () => {
		emailRef.current.focus();
	}

	const handlePassword = () => {
		passRef.current.focus();
	}

	return (
		<div className="app">
			<input type="email" name="email" ref={emailRef} />
			<input type="password" name="password" id="" ref={passRef} />
			<button onClick={handleEmail}>Email</button>

			<button onClick={handlePassword}>Password</button>
		</div>
	);
}

-> Here we are able to do focus on input by clicking on respective button.
-> This things happened because of input element we are using directly input element in DOM and because of this we can easily target the input element in DOM with the help of ref and also input element have focus method in DOM.
-> But what if we will use a custom Input component instead of using input element directly here will we able to do focus on input.
-> Let's see will we able to do that or not.

*/

import { Input } from "./Components/Input";

/*
function App() {

	const emailRef = useRef();
	const passRef = useRef();

	const handleEmail = () => {
		emailRef.current.focus();
	}

	const handlePassword = () => {
		passRef.current.focus();
	}

	return (

		<div className="app">
			<Input type={"email"} refType={emailRef} />
			<Input type={"password"} refType={passRef} />
			<button onClick={handleEmail}>Email</button>
			<button onClick={handlePassword}>Password</button>
		</div>
	);
}


-> Now here we are using custom Input component instead of directly input element using in component.
-> And to focus on input we are passing refType as prop to Input component.
-> But is there any way to focus on Input element instead of sending ref by props to Input component
-> Let's see
*/

/*
function App() {


	const emailRef = useRef();
	const passRef = useRef();

	const handleEmail = () => {
		emailRef.current.focus();
	}

	const handlePassword = () => {
		passRef.current.focus();

	}

	return (
		<div className="app">
			<Input type={"email"} ref={emailRef} />
			<Input type={"password"} ref={passRef}  />
			<button onClick={handleEmail}>Email</button>
			<button onClick={handlePassword}>Password</button>
		</div>
		
	);
}

-> Here we are focusing on custom Input component by directly targetting the custom Input component on DOM with the help of ref attribute.
-> But by doing this we will get error like : Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
-> Means we can't use ref attribute in custom component directly to target the element on DOM
-> We can only use ref attribute directly on input element to target it on DOM.

-> But In React we have a way to use ref attribute directly in custom component by using forwardRef() method

-> Means we have to pass the custom component function as an argument in forwardRef()
-> I did this in Input.jsx file where I have passed custom Input component function as an argument of forwardRef() function.

-> Now we can use ref attribute on custom Input component.
-> But still there are problem like
-> custom Input component does not have focus() method (emailRef.current.focus()) to focus on custom Input component 
-> focus() method only available in html input element not in custom Input element.

-> To add the focus() method in custom Input element we have to create a focus() function in custom Input component.

-> We have written a customFocus() function in custom Input component.
-> Now whenever customFocus() function will be called it will focus on input element in DOM.

-> But for use the customFocus() function in App.jsx we have to use useImperativeHandle hook.
-> We will use this hook in custom Input component.

-> useImperative hook take two argument first is ref and in second argument it will return a callback function.
-> first argument which is ref.
-> So since we have passed a ref attribute as a props through custom Input element in App.jsx.

-> That ref attribute received as a props in custom Input component and we will that ref props as the first argument of useImperative() hook.

-> useImerative() hook return a object.
-> Inside that object we want to specifie those data which we want to use out side custom component in our case we want to use data out side of custom input component.
-> In our case we want to use customFocus() function out side of custom input component.
-> For that we have specifie that customFocus() function inside that object which is present in useImerative() hook.
-> We can specifie with key(property name) and value pairs like I did in Input.jsx
-> like = onFocus : customFocus
-> I have not calling the function() directly inside that object like = onFocus : customFocus()

-> Instead of calling the function() directly inside that object we should give reference of that function() to object property like = obFocus : customFocus
-> After did this then let's return that object

-> Also in the App.jsx if we want to call the focus() method by using their ref then we now ref.current have that property that we have specified in useImerative() object means now instead of using this ref.current.focus() we have to use ref.current.onFocus()
*/

function App() {

	const emailRef = useRef();

	const passRef = useRef();

	const handleEmail = () => {
		emailRef.current.onfocus();
	}

	const handlePassword = () => {
		passRef.current.onfocus();
	}

	return (
		<div className="app">
			<Input type={"email"} ref={emailRef} />
			<Input type={"password"} ref={passRef}  />
			<button onClick={handleEmail}>Email</button>
			<button onClick={handlePassword}>Password</button>
		</div>	
	);
}

/*
-> Usin useImperativeHandle() hook and forwardRef() method we can expose or used functionality of Custom React Component to it's parent component.

-> In our case we have exposed or used customFocus() function from Input component to it's parent component which is App component.
-> We can also passed some value directly from object of useImperativeHandle() hook to it parent component.

-> like = { onFocus : customFocus, data : {id : 1, name : "user1"}}
*/


export default App;