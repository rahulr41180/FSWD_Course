
// Pure Function

/*
Props are Read-Only : 
Whether you declare a component as a function or a class, 
It must never modify its own props. Consider this sum function:
*/

function sum(a,b) {
    return a+b;
}

/* 
Such functions are called “pure” because they do not attempt to change their inputs, 
and always return the same result for the same inputs.
*/

// Impure Function

/* 
In contrast, this function is impure because it changes its own input:
*/

function withdraw(account, amount) {
    account.total -= amount;
}

/* 
React is pretty flexible but it has a single strict rule:
All React components must act like pure functions with respect to their props.
*/

sum(1,5)

let account = {
    total : 2,
    value : 4
}

withdraw(account, 6);