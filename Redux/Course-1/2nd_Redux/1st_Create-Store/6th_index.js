
import { createStore } from "redux";

// Store Creation.
const store = createStore(reducer);

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {
    return state;
}


// Getting Global State Value Of Store
const value1 = store.getState();
console.log('value1:', value1); // { amount: 1 }

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


// Dispatching Action To Reducer
store.dispatch(incrementAction);

// Before wrote some logic let check now what we are getting after dispatching the action to reducer() function
// For check we have to call the .getState() method and log the value after .dispatch() method again.

const value2 = store.getState();
console.log('value2:', value2); // { amount: 1 }
// Here I am getting same now we will write some logic in reducer() function to perform some action and return modified state.