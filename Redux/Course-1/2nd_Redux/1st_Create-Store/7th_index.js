
import { createStore } from "redux";

// Store Creation.
const store = createStore(reducer);

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {
    if(action.type === "increment") {
        return state.amount + 1;
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

// const value2 = store.getState();
// console.log('value2:', value2); // { amount: 1 }


const value3 = store.getState();
console.log("value3 :", value3); // 2

// Here we are getting 2 as final state value but we thougt that we will be supposed to get { amount : 2 }
// This happened because whenever we are modifying previous state with new payload then after modified now our global state is modified state not previous state.
// Now here our current global state is not { amount : 1 } now our global state is 2
// So for doing this in correct way we should update the previous state value without changes it's previous structure.