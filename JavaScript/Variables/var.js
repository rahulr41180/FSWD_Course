
/*

The "var" statement ->
Declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
*/

// Example : 

var x = 1;
if(x == 1) {
    var x = 2;

    console.log("x-1 :", x);
}
console.log("x-2 :", x);