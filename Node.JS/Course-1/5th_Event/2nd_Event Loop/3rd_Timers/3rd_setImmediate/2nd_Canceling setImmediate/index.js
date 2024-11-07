
// How to cancel a scheduled setImmediate() using clearImmediate() :

/* 
The setImmediate() function schedules a callback function to be executed in the next iteration of the event loop.
*/

const immediateId = setImmediate(() => {
    console.log("immediate callback");
});

console.log('immediateId:', immediateId);

/* 
immediateId is refering to "Immediate" object not to "Timeout" object
*/

// Canceling with clearImmediate()

/* 
The clearImmediate() function cancels the execution of a function scheduled with setImmediate().
*/

clearImmediate(immediateId);