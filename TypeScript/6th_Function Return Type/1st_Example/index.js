// Function Return Type
function add1(num1, num2) {
    return num1 + num2;
}
/*
So from add1 function I am returning somthing means I am return a some of two number which will a type of number.
Means I am returning a number type value.

If I am hovering over the add1 function then it will give me suggestion like :

function add1(num1: number, num2: number): number

this suggestion means function add1() {} will be returned a number type value.

TypeScript has automatically inferred a return type of this add1 function based what value I am return from add1 function() {}
*/
// -----------------------------------------
function add2(num1, num2) {
    return (num1 + num2).toString();
}
/*
Now I am converting a number to string with the help of toString() method.
That means now I am returning a string type value.
*/
// ----------------------------------------------------
/*
We can also set a return type of a function just by adding a "function(): typeName) {}"
In this senerio the return type of add3 is number so we can just add a return type like : number
*/
function add3(num1, num2) {
    return (num1 + num2);
}
console.log(add3(1, 4));
// ------------------------------------------------
/*
Sometimes there could be possibility that function will not return anything.

We are just logging a result in the function.

If we are not returning from function then in this senerio the TypeScript has inferred it's return type as void like :
function add4(num1: number, num2: number): void

void means we are not returning any value from function.

Means if function will not be going to return anything function is just doing some calculation in that case it's type set as :void
*/
function add4(num1, num2) {
    console.log(num1 + num2);
}
add4(1, 4);
// --------------------------------------------------
/*
Now it's fine but suppose If I am going to log the add5() function means
if function is not returning anything and I am logging a function call in that case it should not log
anything in console.

but it will log undefined value.
*/
function add5(num1, num2) {
    console.log(num1 + num2);
}
add5(1, 4);
// ------------------------------------------------
/*
If function is not returning anything in that case function by default return an undefined value.

If function is returning undefined by default if we are not returning explicity anything from function.
So In this senerio can I set function return type as undefined let's check.
*/
function add6(num1, num2) {
    console.log(num1 + num2);
}
console.log(add6(1, 4)); // undefined 
// ---------------------------------------------
/*
Yes, we can set a return type of function as undefined.
*/
function add7(num1, num2) {
    console.log(num1 + num2);
}
console.log(add7(1, 4)); // undefined
// --------------------------------------------------
/*
If we want to write return; only means we don't want to return something but

we want to return; from function in that case function will return undefined.
In that case we can assign undefined type or void type or will not assign anything to function as it's type
*/
function add8(num1, num2) {
    console.log(num1 + num2);
    return;
}
console.log(add8(1, 4)); // undefined
function add9(num1, num2) {
    console.log(num1 + num2);
    return;
}
console.log(add9(1, 4)); // undefined
function add10(num1, num2) {
    console.log(num1 + num2);
    return;
}
console.log(add10(1, 4)); // undefined
