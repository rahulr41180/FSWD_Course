
// ------------------------------

/*
const is also not hoisted because const variable should be initilized at same time or at same line of code when it was decalared.
*/

// ------------------------------

// console.log('a:', a); // invalid : const will not be hoisted.
                      // we can't execute const variable before initialization 
                      // index.js:10 Uncaught ReferenceError: Cannot access 'a' before initialization

const a = 1;

// -----------------------------

// const b; // it is invalid because if we decalared variable with const then variable should be initialized at same time or at same line of code where decalaration of variable was happened.
            // as we know that const variable will not be hoisted so this the another reason also for this error.
// console.log('b:', b); // we will get error like : Uncaught SyntaxError: Missing initializer in const declaration

// b = 2;

// ----------------------------

const c = 3;
{

    console.log('c:', c); // this is valid eventhough I have decalared in out side of block scope.
                          // because JS first check the c variable in block if it won't be able to find the variable inside block.
                          // it will search in parent scope of current block scope.
                          // if again it won't be able to find the var in parent scope.
                          // again it will search in parent of parent scope and this process will be continue untill and unless JS will reach to global scope.
                          // if it will not able to find the variable in global scope also then it will through error.
                          // this case is valid for all three variable decalaration method.

}

// -----------------------

const d = 4;
{

    // console.log('d:', d); // this is invalid because.
                          // JS will search d variable value in current block scope and I already decalared a variable d with const.
                          // So it will not go to the parent scope to find that variable.
                          // and we know that const is not hoisted.
                          // and we also know that if execute a const variable then it should execute after their decalaration and  it's initialization.
                          // here we will get error : Uncaught ReferenceError: Cannot access 'd' before initialization.
    
    const d = 5;
}

// -----------------------

{
    const e = 6;
    console.log("e :", e); // this is valid here we will get 6 as answer.
}
const e = 7;