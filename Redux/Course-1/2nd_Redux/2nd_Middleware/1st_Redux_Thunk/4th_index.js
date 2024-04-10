
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

// Getting Initial User
// first perameter should be dispatch() method
// second perameter should be getState() methd
// and we are getting these method as a perameter of function so can keep the name of method anything

// But sequence should same like function(dispatch, getState) {};
async function initialUserAction(dispatch, getState) {
    const { data } = await axios.get("http://localhost:3000/accounts/1")
    console.log('data:', data)
    // return {type : initUser, payload : data.amount}
    dispatch({type : initUser, payload : data.amount});
}

// Dispatching Action To Reducer Only once After 2 Seconds

setTimeout(() => {
    // If we are calling the function inside dispatch(initialUserAction()) method (function could be sync or async) then function should return the object immediate means dispatch() won't wait for returned value dispatch() want immediate value.
    // But we want to first get the data by calling api or by doing some calculation which will take time to resolve but we know that dispatch() method won't wait for value.
    // So for resolve above issue we have use redux-thunk.
    // What redux-thunk will do redux-thunk we will inside applyMiddleware which redux-thunk will be in store.
    // What we will do we have to send the function reference or defination through dispatch(initialUserAction) we will not call the function directly inside dispatch(initialUserAction()) method.
    // After that redux-thunk will observe that we are sending the function reference means redux-thunk will pause the dispatch() method to send the value to reducer till the function got resolved means API will resolve or calulation will done.
    // and also redux-thunk take that dispatch() method from store and provide that dispatch() method as a permater of function that function we were sending through dispatch() method.
    // and also it will take the getState() method from store for getting the global state access and provide that getState() method as a peramter of function that function we were sending through dispatch() method.
    
    // that dispatch() methdo and getState() method we will use inside that function after getting the value from API or form calculation.
    // and redux-thunk take that dispatch() and getState() method in a sequence means dispatch() method should first peratmeter and getState() should be second perameter of that function();
    // Now dispatch() method send the value to reducer to update the global state.
    // redux-thunk will work only when we are sending the function reference or function defination.
    store.dispatch(initialUserAction);
},2000);