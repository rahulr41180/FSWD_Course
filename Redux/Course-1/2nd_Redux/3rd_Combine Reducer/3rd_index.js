
import { createStore, applyMiddleware, combineReducers } from "redux";

import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";

// Action Name Contstant
const inc = "inc";
const dec = "dec";
const incByAmnt = "incByAmnt";
const initUser = "initUser";

const getAccUserPending = "account/getUser/pending";
const getAccUserFulfilled = "account/getUser/fulfilled";
const getAccUserRejected = "account/getUser/rejected";

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
        case getAccUserFulfilled : 
            return {...state, amount : action.payload, pending : false}
        case getAccUserRejected : 
            return {...state, error : action.error, pending : false}
        case getAccUserPending : 
            return {...state, pending : action.pending}

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

// Getting User
function initUserAction(value) {
    return {type : initUser, payload : value};
}

// If API has been fulfilled and it found a user

function getAccountUserFulfilled(value) {
    return {type : getAccUserFulfilled, payload : value};
}

// If API has been through a error
function getAccountUserRejected(error) {
    return {type : getAccUserRejected, error : error};
}


// If API is pending
function getAccountUserPending(value) {
    return {type : getAccUserPending, pending : value};
}

function bonusPointAction(value) {
    return {type : incPoint, payload : value};
}


// Getting Initial User
function getUserAction(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(getAccountUserPending(true));
            const { data } = await axios.get(`http://localhost:3000/accounts/${id}`)
            console.log('data:', data)
            // return {type : initUser, payload : data.amount}
            dispatch(getAccountUserFulfilled(data.amount));

        } catch(error) {
            dispatch(getAccountUserRejected(error.message))
        }
        // dispatch(incrementAction());
    }
}

// Dispatching Action To Reducer Only once After 2 Seconds
setTimeout(() => {

    // store.dispatch(bonusPointAction(2));
    store.dispatch(getUserAction(2));
},2000);