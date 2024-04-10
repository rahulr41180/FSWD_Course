
import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";

// Action Name Contstant
const inc = "inc";
const dec = "dec";
const incByAmnt = "incByAmnt";
const initUser = "initUser";


// Store Creation
const store = createStore(reducer, applyMiddleware(logger.default, thunk));

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

    return {type : inc};
}

// Decrement Action
function decrementAction() {
    return {type : dec};
}

// Increment By Amount

function incrementByAmountAction(value) {
    return {type : incByAmnt, payload : value}
}

function initUserAction(value) {
    return {type : initUser, payload : value};
}

// Getting Initial User

async function getUserAction(dispatch, getState) {
    const { data } = await axios.get("http://localhost:3000/accounts/1")
    console.log('data:', data)
    // return {type : initUser, payload : data.amount}
    dispatch(initUserAction(data.amount));
}

// Dispatching Action To Reducer Only once After 2 Seconds
setTimeout(() => {

    store.dispatch(getUserAction);
},2000);