
// Nesting Function

function createUser(name) {
    let greeting = "Hi ";
    function greet() {
        return greeting + name + " profile has created";
    }
    return greet; // return greet function defination
}

let createNewUser = createUser("user1");

console.log(createNewUser); // It will be logged createNewUser function defination
console.log(createNewUser()); // It will be called createNewUser function and log the returned value.

/* 
createNewUser function definition has access to outer params that is name argument of createUser() function which came for createUser function.
also any other variables declared inside createUser will also be accessible to this createNewUser() function.
*/