
/* 

What EXACTLY is a Class?

Most beginners think:

Class = special object type

Not fully correct.

In JavaScript

A class is actually:

a special type of function.
Proof
class User {

}

Now check:

console.log(typeof User);

Output:

function

*/

// Internally JavaScript Converts Something Like This
// Class Syntax
class User {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(this.name);
    }

    static userName() {
        console.log('User Name1 :', this.name);
    }
}

// Internally JavaScript behaves similar to this:

function User1(name) {
    this.name = name;
}

// Prototype Method
User.prototype.display = function () {
    console.log(this.name);
}

// Static Method
// Here we are reassigning the function to static userName method in User class
// Also here we are reassigning the function to User.userName function to userName in the User class
User.userName = function () {
    console.log('User Name2 :', this.name);
}

// Here we are calling static method
// Now this will call section assigned function value not first because we have reassigned
User.userName();