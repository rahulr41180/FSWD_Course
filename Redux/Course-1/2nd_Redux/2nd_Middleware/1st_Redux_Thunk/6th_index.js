
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

function getUserAction(id) {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
        console.log('data:', data)
        // return {type : initUser, payload : data.amount}
        dispatch(initUserAction(data.amount));
    }
}


// Dispatching Action To Reducer Only once After 2 Seconds
setTimeout(() => {
    // Now If we would like to fetch the random user data so for that we have to pass id value to getUserAction
    // So that, That will find respective user data.
    // But First there is a function who will take that id which we are passing as perameter like getUserAction(1)
    // And that function will return a anonymus function as now in our case that anonymus function return to dispatch means this will be a last function.
    // And that last function should have dispatch and getState methods as their perameter.
    // Because in the last we would get our final result that why last function should have dispatch and getState methods as their perameter.
    // Now, From there we will pass action to reducer through dispatch method.

    store.dispatch(getUserAction(2));

},2000);