
import { createStore } from "redux";

// Store Creation.
const store = createStore(reducer);

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {
    return state;
}


// Getting Global State Value Of Store
const value = store.getState();
console.log('value:', value); // { amount: 1 }

// Giving Action

// Increment Action
const incrementAction = {
    type : "increment"

    // Here we will do some task without giving any payload.
}

// Decrement Action
const decrementAction = {
    type : "decrement",
    payload : -1 // Here we will do some task with giving payload value.
}


// We know that Action is not a part of Global Store. It is a set of instruction.
// But to perform this action we need something for send the Action instruction to store.
// For doing this we have .dispatch() method and this method is also a part of store means this method is given by store itself.

// We can think about a .dispatch() method like event driven action like.
// If we click on button then a onClick() event is trigger after triggered the onClick() event so there should be something who will listen that some event is triggered now some listener function should run.
// So here .dispatch() is a event driven action which passed the action and whenever the .dispatch() event triggered a reducer() function will work as listener means reducer() function call to perform some task on action given by .dispatch() method means .dispatch() method and reducer() function are the part of store itself.

store.dispatch(incrementAction);

// If I am running my code after doing some action but still the previous value return by reducer.

// { amount: 1 }
// Because We haven't wrote any logic after getting the action through .dispatch() method in reducer() function to perform some task based on given action
// So for that we have to wrote some logic in reducer() function.