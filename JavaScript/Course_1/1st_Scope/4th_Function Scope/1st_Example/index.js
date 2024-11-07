
// 1. it is created upon execution a function : Means function scope will be created when function execution

// line run.

function sayHi(name) {
    return name;
}

// till here no function scope created.

sayHi("ABCD"); // Now here function scope will be created function scope globally because function execution is calling in global scope.

sayHi("EFGH"); // This will create another function scope globally.

// Number of function = Number of execution