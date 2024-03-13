
import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

// Action Name Contstant
// We are creating this is because before this we were using name of action type in two places as string and there will posibility that sometimes spelling could be not correct that's why we will use varibale name instead of directly using value. 
// We have to declared and initialized the constant variable above to store because we will use that variable in reducer function and reducer function should be called after variable initialization this is because of variable hoisting.
const inc = "inc";
const dec = "dec";
const incByAmnt = "incByAmnt";


// Store Creation.
const store = createStore(reducer, applyMiddleware(logger.default));

// Store the previous value in history array.
const history = [];

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {

    if(action.type === inc) {
        state = {...state, amount : state.amount + 1}
    } else if(action.type === dec) {
        state = {...state, amount : state.amount - 1}
    } else if(action.type === incByAmnt) {
        state = {...state, amount : state.amount + action.payload}
    }
    return state;
}

// Giving Action With Action Creator Function
// Increment Action
function incrementAction() {
    return {type : inc}
}

// Decrement Action
function decrementAction() {
    return {type : dec}

}

// Increment By Amount
function incrementByAmountAction(value) {
    return {type : incByAmnt, payload : value}
}

// Dispatching Action To Reducer Everytime After 2 Seconds
setInterval(() => {

    store.dispatch(incrementByAmountAction(2));
},2000)

// .subsribe() method is used to get the global state value everytime whenever the global state value will be changed.
// store.subscribe(() => {
//     const value = store.getState();
//     history.push(value);
    // console.log("value :", value);
//     console.log('history:', history)

// });