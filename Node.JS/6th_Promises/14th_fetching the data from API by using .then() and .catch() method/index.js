
// Fetching the data from API by using .then() and .catch() method;

fetch("http://jsonplaceholder.typicode.com/users").then((res) => {
    return res.json();
}).then((data) => {
    console.log("data :", data);
}).catch((error) => {
    console.log("error :", error);
}).finally(() => {
    console.log("finally : Data fetching request is completed");
})

/* 
Here fetch() method is using Promise() object behind the scene
And fetch() method will return either fulfilled or rejected promise
we will be used return respective responsive data in their respective .then() and .catch() method.
*/