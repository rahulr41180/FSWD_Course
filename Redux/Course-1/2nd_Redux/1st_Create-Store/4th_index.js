
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
// Action is object and action only have two key value pairs one is "type" and another one is "payload".
// Action creation is not a part of store. Action here just giving some instruction to reducer to perform some action based on given instruction.
// Action came from flux architature.
// Means Type is telling here that which type of action do we need to perform through reducer.

// Payload is telling here that based on action type modified the previous state with given value through payload.
// After did the action completly reducer will return modified state value.

const incrementAction = {
    type : "increment"
    // Here we will do some task without giving any payload.
}

const decrementAction = {

    type : "decrement",
    payload : -1 // Here we will do some task with giving payload value.
}