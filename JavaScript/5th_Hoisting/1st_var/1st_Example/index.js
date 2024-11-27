
// ------------------------------------------------------ 

/* 
Hoisting : The movement of variable declaration to top of scope - before execution. 

1. function declarations are properly hoisted (value accessible).
2. var is hoisted.
3. let is hoisted but not properly because of "Temporal Dead Zone(TDZ)".
4. const is not hoisted hoisted;
*/

// ----------------------------------------------------------

/* 
1. var variable.
*/

console.log("a1 :", a1); // we will get undefined because of hoisted, I have explained it below.
var a1 = 5;

/* 
var a1 = undefined : declaration hoisted with undefined.
console.log("a1 :", a1);
a1 = 5;
*/

{
    console.log("a2 : ", a2); // we will get undefined because of hoisted, I have explained it below.
}
var a2 = 5;

/* 
var a2 = undefined // hoisted here
{
    console.log("a2 : ", a2);
}
a2 = 5;
*/

{
    console.log("a3 :", a3); // we will get undefined because of hoisted, I have explained it below.
    var a3 = 6;
}
var a3 = 5;

/*
var a3 hoisted here with undefined. because var has global scope var does not have block scope that why
a3 hoisted outside the block scope means all var variable hoisted in global scope 
{
    console.log("a3 :", a3);
    a3 = 6;
}
var a3 = 5;
*/

{
    var a4;
    console.log("a4 :", a4); // we will get undefined because of hoisted, I have explained it below.
    a4 = 6;
}
var a4 = 5;

/* 
var a4; hoisted
{
    console.log("a4 :", a4);
    a4 = 6;
}
var a4; hoisted again but it will ignore because var a4; already been hoisted above.
a4 = 5;
*/

{
    var a5 = 6;
    console.log("a5 :", a5);
}
var a5 = 5;

/* 
var a5; hoisted
{
    a5 = 6;
    console.log("a5 :", a5);
}
var a5; hoisted
a5 = 5;
*/

var a6 = 5;
{
    console.log("a6 :", a6); // we will get 5 because of scope, I have explained it below.
    var a6 = 6;
}

/*
var a6; hoisted;
a6 = 5;
{
    console.log("a6 :", a6); // we will get 5 here because var a6 hoisted in global scope. We have initialized a6 = 5; before a6 = 6; that's why we will get 5 here eventhough we are doing console.log("a6 :", a6); in block scope.
    a6 = 6;
}
*/

{
    var a8 = 6;
    console.log("a8 :", a8); // 6
}

var a7 = 5;

/* 
var a8; hoisted;
var a7; hoisted;
{
    a8 = 6;
    console.log("a8 :", a8); // 6
}
a7 = 5;
*/