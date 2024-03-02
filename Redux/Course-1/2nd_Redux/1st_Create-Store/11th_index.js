
import { createStore } from "redux";

// Store Creation.
const store = createStore(reducer);

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {
    if(action.type === "increment") {
        // Here we doing same as previous we are copied the previous state and modified it based on given action and returned the modified state.
        return {...state, amount : state.amount + 1}

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

// What will be the problem if we are directly mutating the object rather then copied.
// So supposed we want to see previous all values those we modified.
// So for that we will push all the previous value in array to store the previous all values history.

// To do this type of things we should run again .dispatch() method and also we should run again .getState() method
// So to do this in easy way we will use .subscribe() method to run the .getState() method we will look what is .subscribe() method here and to run again and again .dispatch() method we will use setInterval() function.