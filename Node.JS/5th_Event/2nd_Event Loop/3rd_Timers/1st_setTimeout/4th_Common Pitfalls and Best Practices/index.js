
// Common Pitfalls and Best Practices :

/* 
Understanding Execution Context:
Ensure the correct this context if you're passing a method of an object as the callback.
*/

const obj = {
    myname: 'Alice',
    greet() {
        console.log('this1:', this); // this target to setTimout object

        console.log(`Hello, ${this.myname}!`);
        // return "Hello"
    }
};

// Incorrect context
setTimeout(obj.greet, 1000);

/* 
obj.great : here we are getting function definition of greet from obj and after 1 sec setTimout call it.
When we pass obj.greet to setTimeout, the greet method is extracted from the object and called as a regular function, not as a method of obj.

In a regular function call (not as a method of an object), 
"this" defaults refer to the global object (global in Node.js or window in browsers) or undefined in strict mode.

Note : In Node.js, when you pass a function to setTimeout, it is wrapped in an internal Timeout object. 
As a result, "this" inside the function refers to the Timeout object rather than the global object or the obj.

this : Thus, Here We have passed the function to setTimeout and inside the greet method, "this" does not refer to obj and global object but it refer to setTimout object.

*/

// ------------------------------------------------------------------

const obj1 = {
    myname: 'Alice',
    greet() {
        console.log('this2:', this);
        console.log(`Hello2, ${this.myname}!`);
        // return "Hello"
    }
};

// incorrect context
// setTimeout(obj1.greet(), 1000);

/* 
setTimeout(obj1.greet(), 1000);

In this line, obj1.greet() is called immediately, 
and its return value (which is undefined since greet does not have an explicit return value) is passed to setTimeout. 
This means that the greet method is executed immediately, and undefined is passed to setTimeout.

When obj1.greet() is called immediately, 
it executes the greet method within the context of obj1.
During this call, "this" inside greet refers to obj1, so this.myname is 'Alice'.

After executing obj1.greet(), setTimeout is effectively called like this:
setTimeout(undefined, 1000);

Above line of code does nothing because undefined is not a function. 
The immediate execution of obj1.greet() is incorrect if the intention is to delay the execution of the greet method.
*/

// ----------------------------------------------------

const obj2 = {
    myname: 'Alice',
    greet() {
        console.log('this3:', this); // this refer to obj2
        console.log(`Hello3, ${this.myname}!`);
        // return "Hello"
    }
};

// correct way
setTimeout(() => obj2.greet(), 1000);

// ---------------------------------------------------------

const obj3 = {
    myname: 'Alice',
    greet() {
        console.log('this4:', this); // this refer to timeout object
        console.log(`Hello4, ${this.myname}!`);
        // return "Hello"
    }
};

let id = setTimeout(obj3.greet, 1000);
id.myname = "User1"; // Here I am adding the myname property into timeout object.

// ------------------------------------------------

const obj4 = {
    myname: 'Alice',
    greet() {
        console.log('this5:', this); // this refer to obj4
        console.log(`Hello5, ${this.myname}!`);
        // return "Hello"
    }
};

setTimeout(obj4.greet.bind(obj4), 1000);

/* 
obj4.greet.bind(obj4) : this line of code execute immediately and because of bind() method it create a new function and the new function has obj4
as their context because of bind() method.


Binding greet: obj4.greet.bind(obj4) creates a new function with this bound to obj4.
*/

/* 
Event Loop Blocking:
Heavy computation in a setTimeout() callback can block the event loop.
*/