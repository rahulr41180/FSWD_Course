
/*

The Node.js Assert is the most elementary way to write tests. 
It provides no feedback when running your test and (test will be pass or true / unless one fails). 
The assert module provides a simple set of assertion tests that can be used to test invariants. 
The module is intended for internal use by Node.js, 
but can be used in application code via require ('assert').

However assert is not a testing framework and 
cannot be used as general purpose assertion library.
*/

var assert = require("assert");

function add(a,b) {
    return a+b;
}

// var expected = add(1,2);
// assert(expected === 3, "One plus two is three");

/*
It will not provide any output because the case is true. 
If you want to see output, you need to make the test fail.
*/

var expected = add(1,2);
assert(expected === 4, "One plus two is three not four");