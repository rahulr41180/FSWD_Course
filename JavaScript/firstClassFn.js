
/* 

A programming language is said to have First-class functions 
when functions in that language are treated like any other variable.
*/

// Ex.
// Assigning a function to a variable

const foo = () => {
    console.log("foobar");
}

foo(); // Invoke it using the variable 

/*
We assigned an Anonymous Function in a Variable,
then we used that variable to invoke the function by adding parentheses () at the end.

Note: Even if your function was named, 
you can use the variable name to invoke it. 

Naming it will be helpful when debugging your code. 
But it won't affect the way we invoke it.
*/