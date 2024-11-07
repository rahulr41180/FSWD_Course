
// .then Method :

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task is complete");
    },1000)
    return resolve;
})

promise1.then(function() {
    console.log("Promise resolved");

})

/* 
.then() method have relation with resolve argument that is present in Promise callback.
.then() method have callback.
.then() take the resolved value from Promise.
If we want to run a logic whenever Promise will be got resolved then we can run logic in .then() callback;
*/

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async task is complete2");
        resolve()
    }, 1000)
})

promise2.then(() => {
    console.log("Promise is resolved now2");
})

/* 
We are getting Async task is complete because of setTimeout() but
we are not getting Promise resolved
Because, .then does not have connection with resolve method.
Means promise is still in pending phase we have to resolve the method by calling the resolve method.

After did this, The connection between .then() and Promise is done by resolve() method.
*/

// Promise using directly :

new Promise(function(res, rej) {
    setTimeout(() => {
        console.log("Async task is complete3");
        res()
    },1000)
}).then(function() {
    console.log("Promise is resolved now3");
})