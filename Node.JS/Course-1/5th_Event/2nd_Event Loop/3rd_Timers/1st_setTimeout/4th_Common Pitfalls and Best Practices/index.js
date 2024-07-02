
// Common Pitfalls and Best Practices :

/* 
Understanding Execution Context:
Ensure the correct this context if you're passing a method of an object as the callback.
*/

const obj = {
    myname: 'Alice',
    greet() {
        console.log('this:', this);

        console.log(`Hello, ${this.myname}!`);
        return "Hello"
    }
};

// Incorrect context
setTimeout(obj.greet, 1000);

/* 
obj.great : here we are getting function definition of greet from obj and after 1 sec setTimout call it.
When we pass obj.greet to setTimeout, the greet method is extracted from the object and called as a regular function, not as a method of obj.

In a regular function call (not as a method of an object), 
this defaults to the global object (global in Node.js or window in browsers) or undefined in strict mode.

Note : In Node.js, when you pass a function to setTimeout, it is wrapped in an internal Timeout object. 
As a result, "this" inside the function refers to the Timeout object rather than the global object or the obj.

this : Thus, Here We have passed the function to setTimeout and inside the greet method, this does not refer to obj and global object but rather to setTimout object.

*/