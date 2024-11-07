
// .finally() Method :

let promise = new Promise(function(res, rej) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            res({ name : "user1", email : "user1@gmail.com" });
        } else {
            rej({ error : "Something went wrong" });
        }
    }, 1000)

})

promise.then((res) => {
    console.log("res :", res);
    return res.name;
}).then((res) => {
    console.log("name :", res);
    return "Promise is fulfilled";
}).then((res) => {
    console.log("res :", res);
}).catch((error) => {
    console.log("error :", error);
})

/* 
We have one method also that is .finally() method.
We will use this method to ensure us that Promise() is either resolved or rejected.
Means .finally() method call every time either our promise is resolved or rejected.
It is also ensure us that Promise() work is done now.
*/

let promise1 = new Promise(function(res, rej) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            res({ name : "user1", email : "user1@gmail.com" });
        } else {
            rej({ error : "Something went wrong" });
        }
    }, 1000)

})

promise1.then((res) => {
    console.log("res1 :", res);
    return res.name;
}).then((res) => {
    console.log("name1 :", res);
    return "Promise is fulfilled";
}).then((res) => {
    console.log("res1.1 :", res);
}).catch((error) => {
    console.log("error1 :", error);
}).finally(() => {
    console.log("finally1 :", "The Promise is either resolved or rejected means Promise is done with their task.");
})

// ---------------------------------------------

let promise2 = new Promise(function(res, rej) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            res({ name : "user1", email : "user1@gmail.com" });
        } else {
            rej({ error : "Something went wrong" });
        }
    }, 1000)

})

promise2.then((res) => {
    console.log("res2 :", res);
    return res.name;
}).then((res) => {
    console.log("name2 :", res);
    return "Promise is fulfilled";
}).then((res) => {
    console.log("res2.1 :", res);
}).catch((error) => {
    console.log("error2 :", error);
}).finally(() => {
    console.log("finally2 :", "The Promise is either resolved or rejected means Promise is done with their task.");
})