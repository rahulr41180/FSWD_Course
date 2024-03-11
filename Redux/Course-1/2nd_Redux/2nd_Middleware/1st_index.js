
// To use the middleare in redux we have to import applyMiddleware method from redux.

/*
Middleware : 
-> what the things are going here whenever setInterval() function run the dispatch() method call to send action to reducer due to dispatch() method called a event is happened due to that event store internally run the reducer() function and then reducer use the action value sent by dispatch() method.
-> Here what we observed that whenever dispatch() method will be called then action directly passed to reducer.
-> But here we want to perform some logic to check that action having correct data or something like.
-> So to do this middleware come
-> this middleware is same like another middleware.
-> But in redux how middleware work
-> We will put middleware between dispature and reducer means here now middleware also a part of store as like dispature and reducer method.

-> How middleware work :
-> We call the dispatch() method by passing value as an argument and value like function because if we passed simple object than store will treat dispatch() value as simple object but if we will be passed function or something which is not simple object then store will not be treated it as simple object then store internally take care about this that we should run middleware or we should send the value directly to reducer and then we will perform some logic in middleware and then we will passed another action value as an argument throught dispatch() method ot reducer function.
*/

import { createStore, applyMiddleware } from "redux";

// Store Creation.
// We have to put applyMiddleware method inside store to use different middleware in this store.
const store = createStore(reducer, applyMiddleware());

// Store the previous value in history array.
const history = [];

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {
    if(action.type === "increment") {
        state = {...state, amount : state.amount + 1}
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
    payload : -1 // Here we will do some task with giving payload value.
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