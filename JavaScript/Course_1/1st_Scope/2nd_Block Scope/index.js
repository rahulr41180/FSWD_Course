
let b = 1;

const d = 5;

// let b = 6; Here we will get error that we can't redeclared same variable with let.

{
    let a = 5;
    let b = 5;
    let e = 5;
    console.log(a);

}

{
    let b = 6;
    const f = 5;
    let a = 5;
    console.log(b);
}


// console.log(a); We will get error for this like : ReferenceError: a is not defined
// Because let a is not defined in global scope 

console.log(b); // Here we will get 1 will not get any error because let is defined in global scope.

// -------------------------------------------- var ---------------------------


var a = 5; // We can redeclared same variable with var if variable was declared in block scope with let or const

let e = 5; // We can redeclared same variable with let if variable was declared in block scope with let or const
const f = 5; // We can redeclared same variable with const if variable was declared in block scope with let or const

{
    var a = 6;
    // var b = 5; // We can't redeclared same variable with var if variable was declared in global scope with let
    // var d = 5; // We can't redeclared same variable with var if variable was declared in global scope with const
    let d = 5; // We can redeclared same variable with let if variable was declared in global scope with const

    
    const b = 5; // We can redeclared same variable with let if variable was declared in global scope with let
    console.log(a);
}

console.log(a);