
// Question - 1 :

/* 
1. What are the features of React? 
JSX:  
JSX is a syntax extension to JavaScript. 
It is used with React to describe what the user interface should look like. 
By using JSX, we can write HTML structures in the same file that contains JavaScript code.

Components: 
Components are the building blocks of any React application, 

and a single app usually consists of multiple components. 
It splits the user interface into independent, reusable parts that can be processed separately.

Virtual DOM: 
React keeps a lightweight representation of the real DOM in the memory, 
and that is known as the virtual DOM. When the state of an object changes, 
virtual DOM changes only that object in the real DOM, rather than updating all the objects.

One-way data-binding: 

React’s one-way data binding keeps everything modular and fast. 
A unidirectional data flow means that when designing a React app, 
you often nest child components within parent components.

High performance: 
React updates only those components that have changed, 
rather than updating all the components at once. 
This results in much faster web applications.
*/

// Question - 2 :

/* 
What is JSX syntax?
JSX is a syntax extension of JavaScript. 
It is used with React to describe what the user interface should look like. 
By using JSX, 
we can write HTML structures in the same file that contains JavaScript code.
*/

// Question - 3 :

/*
// useState, useEffect and useMemo are three hooks in my React Funtional component. 
// While first rendering of my component. 
// What will be the execution order of those hooks means those three hooks execute one by one or 
// execute all those hooks at same time after rendering or in between rendering?

1. useState: This hook is responsible for initializing and managing state variables.

It is executed in the order they appear in your component function, 
and it runs during the initial render. 
The state variables are initialized when the component is first rendered.

2. useEffect: The useEffect hook is used for handling side effects in your component, 
such as data fetching, DOM manipulation, or subscriptions. 
It runs after the initial render and after every subsequent render. 
The order in which useEffect hooks are executed depends on their placement in the component, 
but they all run after the initial rendering.

useMemo: The useMemo hook is used to memoize the results of expensive calculations 
and is typically used to optimize performance. 
It also runs after the initial render, 
but it is executed in the order it appears in your component.

To summarize, during the initial rendering of your component, 
the useState hook is executed first to initialize state variables, 
followed by the useEffect and useMemo hooks in the order they are placed in the component. 
The useEffect hooks, if any, will run after the initial render. 

Subsequent renders may also trigger useEffect hooks if their dependencies change,
but useState and useMemo will not be re-executed unless their dependencies change.
*/

// Question - 4 :

/* 
Can web browsers read JSX directly? 


Web browsers cannot read JSX directly. 
This is because they are built to only read regular JS(Browser Compatible Regular JavaScript) 
objects and JSX is not a regular JavaScript object 

For a web browser to read a JSX file, 
the file needs to be transformed into a regular JavaScript object. For this, we use Babel.
*/