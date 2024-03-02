
import { createStore } from "redux";

// Store Creation.
// Each store takes a reducer to perform some task
const store = createStore(reducer);

// Reducer is a function to perform manipulation some task given by store.
function reducer(state, action) {
    // reducer always perform some modification task on previous state and after did some modification reducer will return that modified complete state.
    return reducer;

}