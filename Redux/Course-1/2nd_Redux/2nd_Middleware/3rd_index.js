
import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

// Store Creation.
const store = createStore(reducer, applyMiddleware(logger.default));

// Store the previous value in history array.
const history = [];

// Reducer

// Initialized State With Some Value
function reducer(state={amount : 1}, action) {
    if(action.type === "increment") {
        state = {...state, amount : state.amount + 1}
    } else if(action.type === "decrement") {
        state = {...state, amount : state.amount - 1}
    } else if(action.type === "incByAmnt") {
        state = {...state, amount : state.amount + action.payload}
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
    // Here we will do some task without giving any payload.
}

// Increment By Amount

const incrementByAmount = {
    type : "incByAmnt",
    payload : 2
}


// Dispatching Action To Reducer Everytime After 2 Seconds
setInterval(() => {
    store.dispatch(incrementAction);
    
},2000)

// .subsribe() method is used to get the global state value everytime whenever the global state value will be changed.
// store.subscribe(() => {
//     const value = store.getState();
//     history.push(value);

    // console.log("value :", value);
//     console.log('history:', history)
// });

