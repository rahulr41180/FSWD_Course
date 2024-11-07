
// Basic Syntax :

/* 
We can create promise by storing it in variable and then we will use consume that promise through variable.

Another way is, We can use promise at the creation time.

But syntax is same for both condition.
*/

// Creation of promise and use this through variable.

let promise1 = new Promise(function(resolve, reject) {

    /* Logic Here */
})

// Consume or using of promise

promise1.then().catch().finally();

// Creation of promise and use this at creation time

new Promise(function(resolve, reject) {
    /* Logic Here */
}).then().catch().finally();