
// Use the promise with async await method

let promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if(!error) {
            res({ name : "user1", email : "user1@gmail.com" });
        } else {
            rej({ error : "something went wrong" });
        }
    }, 1000)

})

const usePromise1Result = async () => {
    const result = await promise1; // It is a Promise and it will take time to resolve or reject that's why we have to wait for result;
    console.log('result1:', result)
}

usePromise1Result();

/* 
Here I am using the Promise result with async and await method because it is working as like .then() and .catch()
async showing us async function() need to wait for result till request will be got resolved.

Note : for consuming the Promise result we can't consume the result like "await promise1()" because Promise is not a function() it is an Object we could call
an Object
Note : for consuming the Promise result with just need write "await promise1"

Here I am consuming the result value because our Promise is resolved.
What about if Promise got reject then.
*/

let promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if(!error) {
            res({ name : "user1", email : "user1@gmail.com" });
        } else {
            rej({ error : "something went wrong" });
        }
    }, 1000)

})

const usePromise2Result = async () => {
    const result = await promise2;
    console.log('result2:', result)
}

usePromise2Result();

/* 
Here I am getting error like : [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, 
or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "#<Object>".] {
  code: 'ERR_UNHANDLED_REJECTION'
}

Async function handle response value directly but
For handling the reject value we have to use try {} catch(error) {} block method.
To get the error we have to use try {} catch(error) {} block
*/

let promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            res({ name : "user1", email : "user1@gmail.com" });
        } else {
            rej({ error : "something went wrong" });
        }
    }, 1000)

})

const usePromise3Result = async () => {
    try {
        const result = await promise3;
        console.log("result3 :", result);
    } catch(error) {
        console.log("error3 :", error);
    }
}

usePromise3Result();

/* 
We can handle the Promise either .then() and .catch() methods or we can handle the Promise either async and await function
*/