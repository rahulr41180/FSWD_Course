
import { useState, useCallback } from "react";

import Span from "./Span";
import Button from "./Button"

/*
As we know that when our component mount at first time than React create the initialised state inside that component.
And after mounting if we will change the state value inside that component React will re-render that component
But React will never re-create and re-initialised state again istead of this React asign the new value with the help of setState function. 
because setState is a part of useState() and useState() is a part of React.


But if the component got unmount means component got removed from DOM and again we mount that component.
In that case React again re-create all the state.
*/

/*
1. State Scheduling :
Suppose we have state value like :
const [count, setCount] = useState(0);
if we want to increment the value of count with the help of setCount than setCount will take increment value like : 1

and setCount() will scheduled the state change with new data means setCount will not change the count value from 0 to new value istead of 
this setCount will scheduled a time means it will scheduled the new value to count after some time.
Note : Also React reserved the write to post the task manipulation if there is any priority task running on
Ex. if we change the state value to new value automatically and also parallel we are searching somting in input box
than React first do searching task after done the searching task React will give priority to state change.
But parallel React know the order of state change
means if automatically the two times state value change and parallel we are doing searching task than React will know that after done searching task.
React will do state change in order wise.


Because of State Scheduling if our setState() function depends on it previous state value than alway use
setState(() => ) with callback function So that setState() will use it's previous state value for update.
Ex.
If we are using the count value inside the useEffect();
like : 
const [count, setState] = useState(1);
useEffect(() => {
    console.log(count);    
},[]);

and if we are not passing the count as dependencies to useEffect() than we will always getting the first state value like always we will get console.log(count) : 1;
because useEffect() always return the same definition and we are logging primitive data type so whatever at first re-render the component whatever value count state value have that will taking by console.log(count);


export const Demo = () => {
    const [count, setCount] = useState(0);

    const [activate, setActivate] = useState(false);

    const incrementHandler = useCallback(() => {
        if(activate) {
            console.log('activate:', activate)
            setCount((prop) => prop + 1);
        }
    },[activate])

    const decrementHandler = useCallback(() => {
        if(activate) {
            console.log('activate:', activate)
            setCount((prop) => prop - 1);
        }
    },[activate])

    const activationHandler = useCallback(() => {
        setActivate(true);

    },[])

    console.log("Demo Component");

    return(
        <div>
            <Button clickHandler={decrementHandler} btn="decrementHandler">-</Button>
            <Span>{count}</Span>
            <Button clickHandler={incrementHandler} btn="incrementHandler">+</Button>
            <Button clickHandler={activationHandler} btn="activationHandler">Activate</Button>

        </div>
    )

}

*/

/*
2. Batching : 
Suppose we have a syncronus function like : 
const ActivateHandler = () => {


}
we are updating the two state value one by one
const ActivateHandler = () => {
    setActivate(true);
    setCount(1);
}
-> Now here I have two question.
1. Will setCount(1) will never be exicuted.
As we already know when the setActivate(true); call our component re-render only once setActivate(true) to processed complete.

Means setActivate(true) will never update the state immediate instead it State Scheduled and go to next line of code which is setCount(1);
now again setCount(1) also do State Scheduled for count state.
I am not saying that setActivate will never prcessed till setCount() state scheduled done.
Instead this process will complete very fast but every setState() will first do state scheduled than prcessed when the setState() processed than component will re-render.

2. Since we are doing two setState() again and again does our component will re-render twice.
No our component will not re-render twice.
Because if we are using two setState() one after one in syncronus function than there might some situation or in every situation where 
React will Batching those two setState() and once both will complete it's own prcessed than component will re-render only one.

But this will only happen with syncronus code snipit as we have using two setState() inside syncronus function that's why this Batching is happening.
*/


export const Demo = () => {

    const [count, setCount] = useState(0);

    const [activate, setActivate] = useState(false);

    const incrementHandler = useCallback(() => {
        if(activate) {
            console.log('activate:', activate)
            setCount((prop) => prop + 1);
        }

    },[activate])

    const decrementHandler = useCallback(() => {
        if(activate) {
            console.log('activate:', activate)
            setCount((prop) => prop - 1);
        }
    },[activate])


    const activationHandler = useCallback(() => {
        setActivate(true);
    },[])

    console.log("Demo Component");

    return(
        <div>
            <Button clickHandler={decrementHandler} btn="decrementHandler">-</Button>
            <Span>{count}</Span>
            <Button clickHandler={incrementHandler} btn="incrementHandler">+</Button>
            <Button clickHandler={activationHandler} btn="activationHandler">Activate</Button>
        </div>
    )
    
}