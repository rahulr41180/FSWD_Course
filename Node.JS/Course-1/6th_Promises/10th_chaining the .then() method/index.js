
// Chaining the .then() Method :

let promise1 = new Promise(function(res, rej) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            res({ name : "user1", email : "user1@gmail.com" });
        } else {
            rej({ error : "Something went wrong" });
        }
    }, 1000)

})

promise1.then((res) => {
    console.log("res :", res);
}).catch((error) => {
    console.log("error :", error);
})

// -------------------------------------------------------

let promise2 = new Promise(function(res, rej) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            res({ name : "user1", email : "user1@gmail.com" });
        } else {
            rej({ error : "Something went wrong" });
        }
    }, 1000)

})

promise2.then((res) => {
    console.log("res2 :", res);
}).catch((error) => {
    console.log("error2 :", error);
})

/*
Now here I am getting the user profile in res after async task done after 1 second;
After getting the user profile I want to send only name of the user in further.
We can achieve this by callback halling like one callback then inside on callback but this will create problem to us.

We can achieve this by chaining multiple .then() method after one .then() method.
Means if we want to send name then first we have to took the user profile in the first .then() method then return the name of user to next .then() method
*/

// ---------------------------------------------------

let promise3 = new Promise(function(res, rej) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            res({ name : "user1", email : "user1@gmail.com" });
        } else {
            rej({ error : "Something went wrong" });
        }
    }, 1000)

})

promise3.then((res) => {
    console.log("res3 :", res);
    return res.name;
}).then((res) => {
    console.log("name3 :", res);
}).catch((error) => {
    console.log("error3 :", error);
})

// --------------------------------------------------

let promise4 = new Promise(function(res, rej) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            res({ name : "user1", email : "user1@gmail.com" });
        } else {
            rej({ error : "Something went wrong" });
        }
    }, 1000)

})

promise4.then((res) => {
    console.log("res4 :", res);
    return res.name;
}).then((res) => {
    console.log("name4 :", res);
    return "Promise is fulfilled";
}).then((res) => {
    console.log("res4.1 :", res);
}).catch((error) => {
    console.log("error4 :", error);
})

// ----------------------------------------

let promise5 = new Promise(function(res, rej) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            res({ name : "user1", email : "user1@gmail.com" });
        } else {
            rej({ error : "Something went wrong" });
        }
    }, 1000)

})

promise5.then((res) => {
    console.log("res5 :", res);
    return res.name;
}).then((res) => {
    console.log("name5 :", res);
    return "Promise is fulfilled";
}).then((res) => {
    console.log("res5.1 :", res);
}).catch((error) => {
    console.log("error5 :", error);
})