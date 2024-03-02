
import { createStore } from "redux";

// Store Creation.
const store = createStore(reducer);

// Reducer
// Initialized State With Some Value
function reducer(state={amount : 1}, action) {
    console.log("action :", action);
    console.log("state :", state);

    if(action.type === "increment") {
        return {...state, amount : state.amount + 1}
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
// It will not run at initial time means it will run only whenever global state value will be changed by reducer() function.
// Till now, We are calling again and again store.getState() method for checking the global state value whenever it got changed.
// There is another way to do this so we can do this by using .subscribe() method and .subcribe() method is also the part of store itself.

// What it will do it will run everytime whenever the global state value will be changed through reducer() function.
// Previous we also want to store previous value in our history array.
// So we will push the value everytime in history array whenever value got changed.

store.subscribe(() => {
    const value = store.getState();
    console.log("value :", value);
})