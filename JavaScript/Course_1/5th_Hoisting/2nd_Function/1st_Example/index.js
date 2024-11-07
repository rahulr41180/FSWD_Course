
// ----------------------------

/*
1. function declarations are properly hoisted (value accessible).
*/

// -----------------------------

addValue1(1); // this is valid even function declarations did below of function execution line

function addValue1(value) {
    console.log('value:', value)
}

/* 
Normal function : 

function addValue1(); : hoisted here
addValue(1); this is valid 

function addValue1(value) {
    console.log('value:', value)
}
*/

// ---------------------------------------------------

// addValue2(2); // this is invalid because function declaration is not a normal function that is a arrow function event we decalared arrow function with var.
              // error we will get : Uncaught TypeError : addValue2 is not a function
var addValue2 = (value) => {
    console.log('value:', value)
}

// addValue3(3); // this is also not valid event arrow function decalared with let.
              // error we will get : Uncaught ReferenceError: Cannot access 'addValue3' before initialization
let addValue3 = (value) => {
    console.log('value:', value)
}

// addValue4(4); // this is also not valid event arrow function decalared with const.
              // error we will get : Uncaught ReferenceError: Cannot access 'addValue3' before initialization
const addValue4 = (value) => {
    console.log('value:', value)
}

/*
Above function we got because arrow function decalration won't be hoisted only normal function decalration will be hoisted.
*/

// -----------------------------------------------

var addValue5 = (value) => {
    console.log('value:', value)
}

addValue5(5); // Valid

let addValue6 = (value) => {
    console.log('value:', value)
}

addValue6(6); // Valid

const addValue7 = (value) => {
    console.log('value:', value)
}

addValue7(7); // Valid