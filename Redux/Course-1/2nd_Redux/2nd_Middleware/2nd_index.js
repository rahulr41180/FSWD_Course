
import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

// Store Creation.
// To use logger middleware we have to passed it to applyMiddleware() method.
// Why we use this logger middleware because we want to check update details before we were checking with subscribe() method but here we are checking this with logger middleware.
// But here we observe that we are getting error like : middleware is not a function
// This error might be coming due to type : module or import system.
// So to resolve this we will use logger.default
const store = createStore(reducer, applyMiddleware(logger.default));

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


/* 
action increment @ 03:58:22.317
   prev state { amount: 1 }
   action     { type: 'increment' }

   next state { amount: 2 }
 action increment @ 03:58:24.319
   prev state { amount: 2 }
   action     { type: 'increment' }
   next state { amount: 3 }
 action increment @ 03:58:26.332
   prev state { amount: 3 }
   action     { type: 'increment' }
   next state { amount: 4 }

 action increment @ 03:58:28.341
   prev state { amount: 4 }     
   action     { type: 'increment' }
   next state { amount: 5 }   
*/