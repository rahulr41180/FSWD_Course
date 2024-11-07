
import { createStore, applyMiddleware, combineReducers } from "redux";

import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";

// Action Name Contstant
const inc = "inc";
const dec = "dec";
const incByAmnt = "incByAmnt";
const initUser = "initUser";

const incPoint = "bonus/initPoint";

// Store Creation
const store = createStore(
    combineReducers({
        account : accountReducer,
        bonus : bonusReducer
    }), 
    applyMiddleware(logger.default, thunk)

);

// Store the previous value in history array.
const history = [];

// Reducer
// Initialized State With Some Value
function accountReducer(state={amount : 1}, action) {
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

function bonusReducer(state={points : 0}, action) {
    switch(action.type) {
        case inc : 
            return {...state, points : state.points + 1}
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

function bonusPointAction(value) {
    return {type : incPoint, payload : value};

}

// Getting Initial User
function getUserAction(id) {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
        console.log('data:', data)
        // return {type : initUser, payload : data.amount}
        dispatch(initUserAction(data.amount));

        // dispatch(incrementAction());
    }
}

// Dispatching Action To Reducer Only once After 2 Seconds
setTimeout(() => {
    store.dispatch(bonusPointAction(2));
    // store.dispatch(getUserAction(2));
},2000);