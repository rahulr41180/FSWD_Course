
import { createStore } from "redux";

// Store Creation.
const store = createStore(reducer);

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {
    return state;
}


// Now here state is global state value that will accesible by all the app component.
// Getting the global state value we will use .getState() method which is provided by itself store means this method is presented in store.
// store.getState() method will return the whole global state values.
const value = store.getState();
console.log('value:', value); // { amount: 1 }

// Now here we can consider that reducer has been attached with store with some initialized value.
// And now reducer is returning the complete state value.
// Here we haven't passing any action to do some modification in state through reducer that's why reducer returning the previous state value

// Otherwise if we are passing any action to do some modification through reducer in previous state value then reducer will return modified state value based on passed action.