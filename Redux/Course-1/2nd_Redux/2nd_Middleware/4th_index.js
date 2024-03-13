
import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

// Store Creation.
const store = createStore(reducer, applyMiddleware(logger.default));

// Store the previous value in history array.
const history = [];

// Reducer

// Initialized State With Some Value
function reducer(state={amount : 1}, action) {
    if(action.type === "inc") {
        state = {...state, amount : state.amount + 1}
    } else if(action.type === "dec") {
        state = {...state, amount : state.amount - 1}
    } else if(action.type === "incByAmnt") {
        state = {...state, amount : state.amount + action.payload}
    }

    return state;
}


// Giving Action With Action Creator Function
// Action creator function will to do some calculation before returned the object to dispatch() method
// Increment Action
function incrementAction() {
    return {type : "inc"}
}

// Decrement Action
function decrementAction() {
    return {type : "dec"}
}

// Increment By Amount
function incrementByAmountAction(value) {
    return {type : "incByAmnt", payload : value}
}

// Dispatching Action To Reducer Everytime After 2 Seconds
setInterval(() => {
    // Here we can't send directly function definition to reducer like : store.dispatch(incrementAction)
    // Instead of that we have to call the function first then function will be returned the simple object then we will send return object to reducer because dispatch() method send only simple object and reducer also will take simple object there will no function or someting else accept by reducer or send by dispatch() method. like : store.dispatch(incrementAction());
    store.dispatch(incrementByAmountAction(2));
},2000)

// .subsribe() method is used to get the global state value everytime whenever the global state value will be changed.
// store.subscribe(() => {
    
//     const value = store.getState();
//     history.push(value);

    // console.log("value :", value);
//     console.log('history:', history)
// });

