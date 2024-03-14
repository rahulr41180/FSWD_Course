
import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import axios from "axios";

// Action Name Contstant
const inc = "inc";
const dec = "dec";
const incByAmnt = "incByAmnt";
const initUser = "initUser";

// Store Creation

const store = createStore(reducer, applyMiddleware(logger.default));

// Store the previous value in history array.
const history = [];

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {

    switch(action.type) {
        case inc : 
            return {...state, amount : state.amount + 1}
        case dec : 
            return {...state, amount : state.amount - 1}
        case incByAmnt : 
            return {...state, amount : state.amount + action.payload}
        case initUser :
            return {...state, amount : action.payload} 
            
        default : 
            return state
    }
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

// Getting Initial User

function initialUserAction() {
    const value = getUser();
    return {type : initUser, payload : value.amount}
}

// API Call For Getting User and store their amount in store when we will call the initialUserAction.
const getUser = async () => {
    const { data } = await axios.get("http://localhost:3000/account/1")
    console.log('data:', data)
    return data;
}

// getUser();

// Dispatching Action To Reducer Everytime After 2 Seconds

setInterval(() => {
    store.dispatch(initialUserAction());
},2000)

// .subsribe() method is used to get the global state value everytime whenever the global state value will be changed.
// store.subscribe(() => {
//     const value = store.getState();
//     history.push(value);
    // console.log("value :", value);
//     console.log('history:', history)

// });