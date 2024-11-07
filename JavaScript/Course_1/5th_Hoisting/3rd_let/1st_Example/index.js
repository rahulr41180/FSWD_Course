
// -------------------------------

/* 
let is also hoisted but not properly because of "Temporal Dead Zone(TDZ)"
*/

// ----------------------------------

// console.log('a:', a); // invalid : eventhough let also will be hoisted in their respective scope means in current scope but after hoisted it goes in TDZ till the initialization line of code.
                         // we can't execute let variable before initialization 
                         // index.js:10 Uncaught ReferenceError: Cannot access 'a' before initialization

let a = 1;

/*
let a; // it is in their TDZ.
console.log("a :", a);
a = 1;
*/

// ---------------------------------

let b; // hoisted
console.log('b:', b); // here it is valid but we will get here undefined
                      // because we decalared variable with let manually before execute line of code
                      // and automatically undefined value will initialized.
                      // Now it will not goes under their TDZ even it will also hoisted.
b = 2;

// ----------------------------------


let c = 3;
{
    console.log('c:', c); // this is valid eventhough I have decalared in out side of block scope.
                          // because JS first check the c variable in block if it won't be able to find the variable inside block.
                          // it will search in parent scope of current block scope.
                          // if again it won't be able to find the var in parent scope.
                          // again it will search in parent of parent scope and this process will be continue untill and unless JS will reach to global scope.
                          // if it will not able to find the variable in global scope also then it will through error.
                          // this case is valid for all three variable decalaration method.
}

/* 
let c; it will be in their TDZ till the initialization line of code.
c = 3;
{
    console.log('c:', c)
}
*/


// -------------------------------------

let d = 4;
{
    // console.log('d:', d); // this is invalid because.
                          // JS will search d variable value in current block scope and I already decalared a variable d with let.
                          // So it will not go parent scope to find that variable.
                          // and we know that let is also hoisted but it goes in their TDZ till the initilization line of code.
                          // here we will get error : Uncaught ReferenceError: Cannot access 'd' before initialization

    let d = 5;
}

/* 
let d = 4;
{
    let d; hoisted in respective scope.
    console.log('d:', d);
    d = 5;
}
*/

// ---------------------------

{
    let e = 6;
    console.log('e:', e); // this is valid here we will get 7;
}
let e = 7;