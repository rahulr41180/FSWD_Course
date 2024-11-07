
// Question :

// Question - 1 :
/*
1. What exactly do you know about JavaScript?
It is basically an object-oriented programming language that is having a lot of applications. 
It can be used for both server-side, as well as client-side scripting and the good thing is,
it is known to provide the best results in every aspect. 
*/

// Question - 2 :

/*
2. What are the different data types present in javascript?
To know the type of a JavaScript variable, we can use the typeof operator.

1. Primitive Data types :
Primitive data types can store only a single value.

A. String
B. Number
C. BigInt
D. Boolean
E. Undefined
F. Null
G. Symbol

2. Non Primitive Data Types :
To store multiple and complex values, non-primitive data types are used.

A. Object :

Used to store collection of data.
Note : 
It is important to remember that any data type that is not a primitive data type, 
is of Object type in javascript.
*/

// Question - 3 : Explain Hoisting in javascript.

/* 

Hoisting is the default behaviour of javascript 
where all the variable and function declarations are moved on top.
a = 1;
alert("a =", a);
var a;

Above code will hoisted like :
var a;
a = 1;

alert("a =", a);

This means that irrespective of where the variables and functions are declared, 
they are moved on top of the scope. The scope can be both local and global.

Example - 1 :
hoistedVariable = 3; Initialization
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
var hoistedVariable; // Declaration

It's happening because var Variable hoisted on top of the scope.


Example - 2 :
hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling
function hoistedFunction(){ // This is function() declaration that will be hoisted on top of the scope.
  console.log(" Hello world! ");
} 


Example - 3 :
// Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 
doSomething(); // Outputs 33 since the local variable “x” is hoisted inside the local scope
Note - Variable initializations are not hoisted, only variable declarations are hoisted:

var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;

Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

"use strict";
x = 23; // Gives an error since 'x' is not declared
var x; 

*/

// Question - 4 : Difference between “ == “ and “ === “ operators.
/*
Both are comparison operators. 
The difference between both the operators is that “==” is used to compare values whereas, 
“ === “ is used to compare both values and types.

Example :

var x = 2;
var y = "2";
(x == y)  // Returns true since the value of both x and y is the same
(x === y) // Returns false since the typeof x is "number" and typeof y is "string"
*/


var x = 2;
var y = "2";

console.log(x == y);
console.log(x === y);

// Question - 5 :

/*
let x = 10;
let y = x++;
console.log(x);

console.log(y);
why?

let x = 10;: This line declares a variable x and initializes it with the value 10.

let y = x++;: This line declares a variable y and assigns it the current value of x, which is 10, 
and then increments the value of x.

However, there's a key difference between the x++ and ++x increment operators in JavaScript:

x++ is the post-increment operator. 
It first assigns the current value of x to y and then increments x. 
So, after this line, y will be 10, and x will be 11.

++x is the pre-increment operator. 
It increments x first and then assigns the updated value to y. 
So, if you used ++x, both x and y would be 11 after this line.

Here's the corrected code using the post-increment operator (x++):

So, the output of x is 11 because it was incremented, 
and the output of y is 10 because it holds the previous value of x before the increment.
*/

// Question - 6 :

/*
Could you please explain var in more details?
*/