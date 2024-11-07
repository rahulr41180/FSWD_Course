
import { createStore } from "redux";

// Store Creation.
const store = createStore(reducer);

// Store the previous value in history array.
const history = [];

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {

    if(action.type === "increment") {
        state.amount = state.amount + 1
    }
    return state;
}

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

// Dispatching Action To Reducer Everytime After 2 Seconds
setInterval(() => {
    store.dispatch(incrementAction);
},2000)

// .subsribe() method is used to get the global state value everytime whenever the global state value will be changed.
store.subscribe(() => {
    const value = store.getState();
    history.push(value);

    console.log("value :", value);
    console.log('history:', history)
})

/*

value : { amount: 2 }
history: [ { amount: 2 } ]
value : { amount: 3 }

history: [ { amount: 3 }, { amount: 3 } ]
value : { amount: 4 }
history: [ { amount: 4 }, { amount: 4 }, { amount: 4 } ]
value : { amount: 5 }
history: [ { amount: 5 }, { amount: 5 }, { amount: 5 }, { amount: 5 } ]

We will get this type of result but why
Here we are doing everyting correct we are sending action after every two seconds.
And we are pushing new value everytime whenever the global state value getting change.

This is because of mutable things
state.amount = state.amount + 1
This is our logic in reducer here we are not creating copied of previous state we are getting the previous value
by reference of state value and we know that can mutate or get the value of object and array by doing call by reference.
means we will update the original object or array value with the help it's reference.
So here that's why we are getting everytime current value in previous store state value in history array.
Because everytime history array also taking the value from reference of object.
and every after 2 seconds we are updating the value at same reference we are not doing copied and creating new object.


We could solve it with immutable means everytime we will be copied the previous array and then we will update that with new value.
After did this we will be getting correct value everytime.

*/