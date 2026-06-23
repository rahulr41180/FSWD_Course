
/* 
Class is an a blueprint/template for creating objects.

What data an object will have → Properties / Variables
What actions an object can perform → Methods / Functions
A class is a user-defined data type that groups variables and methods together into a single unit.
Example:

*/

class Student {
   
    constructor(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }

    study() {
        console.log(this.name+ " is studying");
    }
    
}

const student1 = new Student('Rahul', 28, 1);

/* 

Can a class exist without objects?

Yes.

A class can exist without creating objects.

Example:

class Employee {

}

Can objects exist without class?

In classical OOP languages like Java:

No

In JavaScript:

Yes (prototype-based language)

Example:

const obj = {
   name: "Rahul"
};

*/

class BankAccount {

    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposite(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}`);
    }

    withdraw(amount) {
        this.balance -= amount;
        console.log(`Withdraw ${amount}`);
    }

    checkBalance() {
        console.log(`Balanced ${this.balance}`);
    }

}

const acc1 = new BankAccount(100, 'Rahul', 10000000);

/* 

Deep Internal Understanding of Class & Object Creation in JavaScript

When you write: const user1 = new User("Rahul");

a LOT of things happen internally inside the JavaScript engine.

We’ll understand:

What new actually does
Memory allocation
Object creation
Prototype linking
Constructor execution
Return value
Whether object creation is mandatory
Can class methods be used directly?
First Let’s Create a Class

*/

class User {

    constructor(username) {
        this.username = username;
        this.followers = 0;
    }

    follow() {
        this.followers++;
    }

    displayUser() {
        console.log(this.username);
    }
}

/*

Now This Line

const user1 = new User("Rahul");

looks simple…

BUT internally JavaScript performs multiple hidden steps.

STEP 1 — Memory Allocation

When JavaScript sees:

new User("Rahul")

the new keyword tells JS:

“Create a brand new empty object in memory.”

Internally:

{}

is created first.

Memory Visualization
Heap Memory
------------------

Object:
{
}

At this point:

Empty object exists
No properties yet
No methods yet
Important

This object is created in:

Heap Memory

The variable:

user1

stores only the reference/address.

Visualization
Stack Memory
----------------
user1 ---> 0x001

Heap Memory
----------------
0x001:
{
}

STEP 2 — Prototype Linking

Now JavaScript automatically links the object with the class prototype.

Internally:

Object.setPrototypeOf(obj, User.prototype)

Something like this happens.

Why Prototype Linking?

Because methods should NOT be copied into every object.

If you create 1 lakh users:

const u1 = new User();
const u2 = new User();
const u3 = new User();

Imagine methods copied every time:

follow() {}
displayUser() {}

Huge memory waste.

Instead JavaScript Uses Prototype Sharing

All objects share same methods.

Visualization
user1 Object
   |
   | [[Prototype]]
   ↓
User.prototype
   |
   |---- follow()
   |---- displayUser()
Important Concept

Methods are NOT stored inside object directly.

Actual Object
{
   username: "Rahul",
   followers: 0
}

Methods are found through prototype chain.

STEP 3 — Constructor Executes

Now constructor runs:

constructor(username) {
    this.username = username;
    this.followers = 0;
}

At this moment:

this refers to newly created object.

Internally

JavaScript does something like:

this.username = "Rahul";
this.followers = 0;
Object Becomes
{
   username: "Rahul",
   followers: 0
}
Visualization
Heap Memory
----------------

0x001:
{
   username: "Rahul",
   followers: 0
}
STEP 4 — Object Returned Automatically

Finally:

return this;

happens automatically.

So:

const user1 = new User("Rahul");

becomes:

const user1 = {
   username: "Rahul",
   followers: 0
}

(with prototype linkage)

Final Internal Flow
What new Actually Does

When you do:

new User("Rahul")

JavaScript internally performs:

// Step 1
const obj = {};

// Step 2
Object.setPrototypeOf(obj, User.prototype);

// Step 3
User.call(obj, "Rahul");

// Step 4
return obj;

This is the REAL hidden mechanism.

Deep Understanding of Prototype

Suppose:

user1.displayUser();

JavaScript searches:

Step 1 — Inside object
{
   username: "Rahul",
   followers: 0
}

No displayUser.

Step 2 — Go to prototype
User.prototype

Found:

displayUser()

Then executes it.

This is Called
Prototype Chain Lookup
Huge Memory Optimization

Suppose:

10 lakh users
5 methods each

Without prototype:

50 lakh method copies

With prototype:

Only ONE shared copy

Massive optimization.

Now Your Important Question
Is it mandatory to create instance using new keyword?

Answer:

MOSTLY YES

If you want:

object-specific data
access instance properties
use instance methods with this

then YES.

Example

*/

class BankAccount {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }
}

/*

To use:

const account1 = new BankAccount("Rahul", 5000);

because:

name
balance

belong to individual objects.

Why new is Needed?

Because:

this.name

needs a real object.

Without object:

where will data store?
Without new
BankAccount();

❌ Error in class syntax.

Error
Class constructor BankAccount cannot be invoked without 'new'
Why JavaScript Prevents This?

Because ES6 classes are special constructor functions.

They MUST create objects properly.

But Can We Use Class Without Creating Object?
YES — Using Static Methods
Static Methods Belong to Class Itself

Example:

class BankAccount {

    static bankName() {
        console.log("SBI Bank");
    }
}

Now:

BankAccount.bankName();

works directly.

No object needed.

Why?

Because static methods belong to:

BankAccount

NOT:

BankAccount.prototype
Visualization
BankAccount Class
   |
   |---- static bankName()

BankAccount.prototype
   |
   |---- deposit()
   |---- withdraw()
Example
class MathUtils {

    static add(a, b) {
        return a + b;
    }
}

Usage:

MathUtils.add(10, 20);

No object required.

Real World Use of Static

Used for:

Utility functions
Configurations
Constants
Factory methods
Helper methods
Example from JavaScript
Math.random()
Array.isArray()
Object.keys()

All are static methods.

No instance needed.

Difference Between Instance vs Static
Instance Method	Static Method
Needs object	No object needed
Uses this object data	Usually utility logic
Called via object	Called via class
user.display()	Math.random()
Important Internal Difference
Instance Method

Stored in:

User.prototype
Static Method

Stored directly on:

User
Visualization
User
   |
   |---- staticMethod()

User.prototype
   |
   |---- instanceMethod()
Final Important Understanding
Classes Are Factories

Usually:

Class itself = blueprint
Object = real usable entity
Most Common Real Industry Pattern
const user = new User();
const order = new Order();
const product = new Product();

Object creation is normal and expected.

Summary
new keyword internally:
Creates empty object
Links prototype
Executes constructor
Returns object
Methods are shared via prototype:
Saves memory
Improves performance
Instance methods:

Need object creation.

Static methods:

Can be called directly on class.

Extremely Important Mental Model
Class
   ↓ creates
Object
   ↓ accesses
Prototype Methods

Next deeply important concepts after this are:

Prototype
this
Constructor
Static keyword
Inheritance
Prototype Chain
__proto__
Function constructor vs class

You can ask any next.

*/

class BankAccount {

    static bankName() {
        console.log("SBI Bank");
    }

    userNmae() {
        console.log("Rahul")
    }
}

const user = new BankAccount();

user.userName();
BankAccount.bankName();