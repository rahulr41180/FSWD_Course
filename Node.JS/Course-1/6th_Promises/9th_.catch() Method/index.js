
// .catch() Method :

let promise1 = new Promise(function(res, rej) {
    setTimeout(() => {
        let Error = true;
        if(!Error) {
            res({ userName : "user1", userPassword : "user1@12345"});
        } else {
            rej({ error : "Something went wrong" });
        }
    })

});

promise1.then((res) => {
    console.log("res :", res);
}).catch((error) => {
    console.log("error :", error);
});

/* 
Promise() callback also have reject method to through the error if there is any error
So res is used for through the fulfilled value when request will be got resolved.
rej is used for through the rejected value when request will be got rejected.

for getting the error we have .catch((error) => {})
for stablished the connection with .catch() and Promise() we have reject method in Promise callback
if request is rejected then we have to call the reject method to build connection between .catch() and Promise() method through reject method.

We can take the error from the argument of callback of .catch((error) => {}) method by throughing the reject() method.
*/