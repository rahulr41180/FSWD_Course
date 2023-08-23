
// Question :

/*
1. What exactly do you know about JavaScript?
It is basically an object-oriented programming language that is having a lot of applications. 
It can be used for both server-side, as well as client-side scripting and the good thing is,
it is known to provide the best results in every aspect. 
*/

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

/* 
2. Explain Hoisting in javascript.
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
It's happening because var hoistedVariable hoisted on top of the scope.

*/