
// Passing Value From resolve() to .then() :

let promise1 = new Promise(function(res, rej) {
    setTimeout(function() {
        console.log("Async task is done1");
        res({ userName : "user1", userEmail : "user1@gmail.com"});
    }, 1000)
})

promise1.then(function(res) {
    console.log("res :", res);

})

/* 
We can pass the value from res(value) method to .then((value) => {}) method
*/