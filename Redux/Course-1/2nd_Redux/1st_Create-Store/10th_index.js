
import { createStore } from "redux";

// Store Creation.
const store = createStore(reducer);

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {
    if(action.type === "increment") {
        // Here we are copied the state and modified it and reasign to state variable and return the modified state with rest of all data.
        state = {...state, amount : state.amount + 1}

        
    }
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

const value2 = store.getState();

console.log("value2 :", value2); // { amount : 2 }