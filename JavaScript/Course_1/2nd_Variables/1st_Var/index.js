
// 1. it doesn't have any block scope, and can be re-declared

var a = 1;

{
    console.log(a); // 1
}

{
    var b = 2;
}

console.log(b); // 2

var c = 3;
console.log('c:', c);
var c = 4;
console.log('c:', c);


// 2. it only had function scope

function method1() {
    var d = 5;
    console.log('d:', d)
}

method1();

// console.log(d); ReferenceError: d is not defined, We are getting this error because var has function scope
// and we can not get var value outside the function();

// 3. var are hoisted, so they can be used before the declaration

/* ----------------------------------------------------- */

var e;

console.log(e); // Here we will get "undefined" because of hoisting we will not get any error

e = 6;

/* ---------------------------------------------------- */

console.log(f); // Here we will get "undefined" because of hoisting we will not get any error

var f = 7;

/* ---------------------------------------------------- */

g = 8;

console.log(g); // 8

var g;

/* ----------------------------------------------------- */