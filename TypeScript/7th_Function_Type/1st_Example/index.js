// Function Type :
function greetUser1(user) {
    var greetMsg = "Hello, " + (user === null || user === void 0 ? void 0 : user.name) + " " + (user === null || user === void 0 ? void 0 : user.age);
    console.log(greetMsg);
}
var greet1;
greet1 = greetUser1;
var user1 = { name: "rahul", age: "28" }; // this will not give us error as age is string to know the reason read above content
greet1(user1);
var user2 = { name: 28, age: "rahul" }; // this will also not give us error as name is number and age is string 
greet1(user2);
function greetUser2(user) {
    var greetMsg = "Hello, " + (user === null || user === void 0 ? void 0 : user.name) + " " + (user === null || user === void 0 ? void 0 : user.age);
    console.log(greetMsg);
}
var greet2;
greet2 = greetUser2;
// let user3: User2 = { name: "rahul", age: "28" }; // now I will get an error as I have explicity assign the alias type to user3;
// let user4: User2 = { name: 28, age: "rahul" }; // Here I will also get an error
var user5 = { name: "user", age: 28 };
var user6 = { name: "user", age: 29 };
greet2(user5);
greet2(user6);
function greetUser3(user) {
    var greetMsg = "Hello, " + (user === null || user === void 0 ? void 0 : user.name) + " " + (user === null || user === void 0 ? void 0 : user.age);
    console.log(greetMsg);
}
/*
as we haven't assign any type so the type for this variable will be any
means we can assign any type of variable to this greet3 variable
*/
var greet3;
greet3 = greetUser3;
var user7 = { name: "user", age: 29 };
greet3(user7);
greet3 = 100; // this will be fine
function greetUser4(user) {
    var greetMsg = "Hello, " + (user === null || user === void 0 ? void 0 : user.name) + " " + (user === null || user === void 0 ? void 0 : user.age);
    console.log(greetMsg);
}
/*
As we have assign the type of greet4 variable as Function that means we will only be able to assign a function
to greet4 we won't be able to assign any type of variable because now greet4 type is Function.
*/
var greet4;
greet4 = greetUser4;
var user8 = { name: "user", age: 29 };
greet4(user8);
function greetUser5(user) {
    var greetMsg = "Hello, " + (user === null || user === void 0 ? void 0 : user.name) + " " + (user === null || user === void 0 ? void 0 : user.age);
    console.log(greetMsg);
}
/*
As we have assigned the type of greet5 variable as Function so we can assign any Function to this variable.
*/
var greet5;
greet5 = greetUser5;
var user9 = { name: "user", age: 29 };
greet5(user9);
function sum(num1, num2) {
    return num1 + num2;
}
/*
As we have assigned the sum function to greet5 variable that means if we will call the greet5 variable then we have
to passed num1 and num2 value as we have decalared sum function with two perameter that's why

but what we are doing we are passing user9 object into greet5() function that means it should throw us compiled error because greet5 storing
sum function and sum function takin two peramter not an object but it is not throwing us a compiled error this is the problem

if we will compiled this code to JavaScript it will not throw us any error.

after successful compiled we know if we do this in JavaScript then it will work
like user9 is and object and sum fn taking two perameter that means num1 will have this user9 object and as we are not passing any
second perameter so num2 will become undefined.

How we can resolve this issue.
What is happening right now we can assign any Function to greet5 variable.
But to resolve this issue we should tell to TypeScript that only specific type of function or given signature function can be assigned to this greet5 variable to
resolve this issue that we are facing right now.

How we can do this.
*/
greet5 = sum;
console.log(greet5(user9)); // [object Object]undefined
function greetUser6(user) {
    var greetMsg = "Hello, " + (user === null || user === void 0 ? void 0 : user.name) + " " + (user === null || user === void 0 ? void 0 : user.age);
    console.log(greetMsg);
}
/*
Instead of assign a Function as a type
we have to assign a arrow function and the return type of that arrow function means which value or what this arrow function
will return and also we can add signature like this arrow function can take a user perameter by defining it's type also for example

let greet6: () => void; // it will return nothing
let greet6: (uesr: User6) => void // it will return nothing and it will take one perameter and it's type will be User6

Here the signature of greet6 variable is
we can assign only those function to greet6 variable which will return nothing and which will take one perameter and type of that peramter will be User6 Alias.

Here we have assign a function signature type as a type to greet6 variable.
*/
var greet6;
greet6 = greetUser6; // Here we will not get error because greetUser6 function is fullfiling the greet6: function signature type.
var user10 = { name: "user", age: 29 };
greet6(user10);
function sum1(num1, num2) {
    return num1 + num2;
}
/*
This line of code will throw us error like :

Type '(num1: number, num2: number) => number' is not assignable to type '(user: User6) => void'.
  Target signature provides too few arguments. Expected 2 or more, but got 1.ts(2322)
let greet6: (user: User6) => void
*/
// greet6 = sum1; // Here we will get error because sum1 function is not fullfiling the greet6: function signature type.
console.log(greet6(user10));
function greetUser7(user) {
    var greetMsg = "Hello, " + (user === null || user === void 0 ? void 0 : user.name) + " " + (user === null || user === void 0 ? void 0 : user.age);
    console.log(greetMsg);
}
var greet7;
greet7 = greetUser7;
var user11 = { name: "user", age: 29 };
greet7(user11);
function sum2(num1, num2) {
    return num1 + num2;
}
function isEligible(user) {
    console.log((user === null || user === void 0 ? void 0 : user.age) >= 10);
}
// Here we will not get error because isEligible function is fullfiling the greet6: function signature type.
greet7 = isEligible;
greet7(user11);
