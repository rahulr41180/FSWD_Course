
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

// Getting Initial User
async function initialUserAction() {
    const { data } = await axios.get("http://localhost:3000/account/1")
    console.log('data:', data)
    return {type : initUser, payload : data.amount}
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
    // Here we have passed the async function() and async function() will always return a promise
    // That's we will get error like : Actions must be plain objects.
    // Means Action Creator Function should be a syncronous function() and Action creator function() should return the value(plain object) immediate.
    // dispatch() will not wait for send the action to reducer.
    // But we want to first fetch the data then we want to send the action to reducer.
    // Means dispatch() will send the async function then it will wait for run the async function() and then data fetching and after getting the data from api then we want to run dispatch() method again to send the got data to reducer and that dispatch() will get from the async function perameter and to do this we will use Redux_Thunk
    // To do this we have to use middleware that's why we will use Redux_Thunk middleware.
    store.dispatch(initialUserAction());

},2000)

// .subsribe() method is used to get the global state value everytime whenever the global state value will be changed.
// store.subscribe(() => {
//     const value = store.getState();
//     history.push(value);
    // console.log("value :", value);
//     console.log('history:', history)
// });