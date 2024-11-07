
import { createStore } from "redux";

// Store Creation.
const store = createStore(reducer);

// Store the previous value in history array.
const history = [];

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {

    if(action.type === "increment") {
        state = {...state, amount : state.amount + 1}
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

    // console.log("value :", value);
    console.log('history:', history)
});

/* 

history: [ { amount: 2 } ]
history: [ { amount: 2 }, { amount: 3 } ]
history: [ { amount: 2 }, { amount: 3 }, { amount: 4 } ]
history: [ { amount: 2 }, { amount: 3 }, { amount: 4 }, { amount: 5 } ]
*/

// Now we are getting correct value.
// Because here we first copied the previous global state and then updating it so everytime new reference does assigned to the modified global state value.

// Redux have three main rule
// 1. Single Source Of Truth : Only One Global State Should Be there
// 2. Immutable Updates : Don't update the global state directly means update the global state by first copied it and then update. Kept global state only for read state means only for read only.
// 3. Reducer Should be Pure Function() : No Side-effects should be there