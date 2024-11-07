
// IIFE : Immediately Invoked Function Expression.

/* 
This practive was popular due to var.

Immediately invoking a function avoids - re-declaration of variables inside it.
*/

// define annonymous function as a callback inside function expression like : () :

// (function() {

// })

// call the function expression with the help of () immediate and then it's called a IIFE and then it will return a annonymous callback function

(function() {

})();

// We can also pass argument from IIFE to annonymous function

((a) => {

})(10);

// This practive was popular due to var.

/*
As we know we can re-declared the var variable inside same scope to avoid this problem we should declared variable with var inside IIFE.
So that we would avoid the problem of re-declaration of variable with var inside same scope.
*/

(function() {
    var a1 = 1;
    console.log("a1 :", a1);
})();

// console.log(a); // As we know if variable declared with var inside a function scope then variable only can access inside that function scope or 
                // inside their child scope by using lexical scope of parent scope.
                // We can't use that variable outside of that function scope
                // That's why we would get here error like : Uncaught ReferenceError: a is not defined

((a2) => {
    console.log("a2 :", a2);
})(10);