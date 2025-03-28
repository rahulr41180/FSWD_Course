
// Constructor

// Difference Between Constructor Function and Normal Function

/* 
Constructor Function: A constructor function is used to create and initialize new objects. 
When you invoke a constructor function with the new keyword, 
it creates a new instance of an object and sets properties on that object.

Normal Function: A normal function is just a regular function that performs a task or computes a value. 
It is not used for creating new objects.

Constructor Function: By convention, constructor function names are capitalized to distinguish them from normal functions. 
The function is designed to create objects using this.

function BankAccount(customerName, balance) {
    this.customerName = customerName;
    this.balance = balance || 0;
    this.accountNumber = new Date().getTime();  // Assigns unique account number
}

Normal Function: Normal functions don't have this specific design pattern. They just perform operations.
function add(a, b) {
    return a + b;
}

Constructor Function: In a constructor function, this refers to the newly created object. 
This is why properties are assigned using this.propertyName.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person('Alice', 30);
Here, this.name and this.age are properties of the newly created object.
Normal Function: In a regular function, this is determined by how the function is called. 
When invoked in a regular way (i.e., not with new), this may refer to the global object (window in browsers), or be undefined in strict mode.

function greet() {
    console.log(this);
}
greet();  // 'this' will refer to the global object (window in browsers)

This BankAccount function is looks like normal function but we have keep the name of function as start with capital letter because
it is an naming convention that we have to keep constructor function name with capital letter.
*/

function BankAccount1() {}


// ---------------------------------------------------------

/* 
We can create constructor function either by using normal function or by usin class
But if we are creating constructor function by using class that means we are using some sythectical sugar means
if we are creating constructor function by using class that means JavaScript will convert this class constructor into normal function constructor to create a constructor function.
means end to end constructor function is creating by using normal function.

In a constructor function we have property and method in BankAccount constructor we can say
customerName, customerBalance, customerAccountNumber, customerAddress are the property
deposite(), withdraw() are the methods of constructor function.

to create properties of constructor we have to use this
here this is in BankAccount2 constructor function context so this will trigor to BankAccount2 function.
and we know function is also an object in JavaScript because it has prototype.
*/

function BankAccount2(customerName, custormerAccountBalance) {
    this.customerName = this.customerName;
    this.custormerAccountNumber = new Date.now().getTime();
    this.custormerAccountBalance = this.custormerAccountBalance || 0;
}

// ------------------------------------------------------------

/* 
Now B/A3 will give us a object.

this is also fine means now we are creating property or variable by using this keyword
and just calling it like a function but in the normal function this always target to context where we have called the function.
that's why we will get undefined because function we are calling in global context and this refer to global context means this 
will be trying to find the customerName in the global object and we know global object is the top most object means there is no object
which is present top of global object that's why this will not trying to find the customerName propety in the
top of object because there is no object present.
that's why it return undefined value.

but what if we can to send the user2 name now user1 will be replace

this things we can do by creating a BankAccount3 instance by using the 'new' keyword

As BankAccount3 
*/

function BankAccount3(customerName, custormerAccountBalance) {
    this.customerName = customerName;
    this.custormerAccountNumber = new Date().getTime();
    this.custormerAccountBalance = custormerAccountBalance || 0;

    return this.customerName;
}

// console.log(BankAccount3("user1"));

// -----------------------------------------------------------

/* 
As we know B/A4 constructor function will create an object by using the this keyword

To use that B/A4 CF for multiple use cases we have to create a copy of this B/A4 CF object
We can do this by using the new keyword

Means new keyword create a instance or copy of our 'CF object' now we have a copy of 'CF Object' with new referece

because we know object is refering by it's memory location/reference.

user1 have new object of B/A4 CF.
*/

function BankAccount4(customerName, custormerAccountBalance) {
    this.customerName = customerName;
    this.custormerAccountNumber = new Date().getTime();
    this.custormerAccountBalance = custormerAccountBalance || 0;
}

let user1 = new BankAccount4()
// console.log('user1:', user1)

// ------------------------------------------------------------

/* 
Now we can create n number of different new B/A5 CF object and each one has some property means we don't need to create each
one CF by manually we just need to use 'new' keyword and it will automatically give us a new B/A5 CF object.

user1 has new object with their name and balance.
*/

function BankAccount5(customerName, custormerAccountBalance) {
    this.customerName = customerName;
    this.custormerAccountNumber = new Date().getTime();
    this.custormerAccountBalance = custormerAccountBalance || 0;
}

let user2 = new BankAccount5("user2", 1000);
// console.log('user2:', user2)

// -----------------------------------------------------------

/* 
user3 and user4 have their separat object that we have created by using 'new' keyword.
*/

function BankAccount6(customerName, custormerAccountBalance) {
    this.customerName = customerName;
    this.custormerAccountNumber = new Date().getTime();
    this.custormerAccountBalance = custormerAccountBalance || 0;
}

let user3 = new BankAccount6("user3", 1000);
// console.log('user3:', user3)
let user4 = new BankAccount6("user4", 1000);
// console.log('user4:', user4);

// -----------------------------------------------------------

/* 
Now if we want to get or print the value from CF so for that as we
know we have created instance of CF for two user u5, u6 by using 'new' keyword

Means we have created two instance/copies of CF Object with new memory location/refernce and those instanced object we have assigned to
their respective U5, U6 means now U5 and U6 have separate object reference and we can do updation of value, getting the value
*/

function BankAccount7(customerName, custormerAccountBalance) {
    this.customerName = customerName;
    this.custormerAccountNumber = new Date().getTime();
    this.custormerAccountBalance = custormerAccountBalance || 0;
}

let user5 = new BankAccount7("user3", 1000);
// console.log('user5:', user5) 
// console.log('user5:', user5.customerName)
// console.log('user5:', user5.custormerAccountBalance)
let user6 = new BankAccount7("user4", 1000);
// console.log('user6', user6);

// ---------------------------------------------------------------

/* 
In real world problem we should not update and change the value like this that have did below.
Because OOP programming tells that we should not do this things

That topics called Encapsulation which means we did privatitation of properties and methods of 'CF O'
that means we won't be able to modefied this like this
but if we want to modefied the properties and methods then have some feature those allow us to do that.

But if we want to update then what we can do we can write some method inside this 'B/A8 CF O' so that we can modefied the properties as well.
*/

function BankAccount8(customerName, custormerAccountBalance) {
    this.customerName = customerName;
    this.custormerAccountNumber = new Date().getTime();
    this.custormerAccountBalance = custormerAccountBalance || 0;
}

let user7 = new BankAccount8("user3", 1000);
// console.log('user7:', user7) 
user7.custormerAccountBalance += 1000
// console.log('user7:', user7)
let user8 = new BankAccount7("user4", 1000);
// console.log('user8', user8);

// ------------------------------------------------------

/* 
Here I have created deposit method inside B/A9 CF, with regular function expression as we have assiging the function to
a property at runtime that's why it is called a function expression and function expression are not hoisted means
if we try to access the deposite function before creating an instance then it will give us an error.
*/

function BankAccount9(customerName, custormerAccountBalance) {
    this.customerName = customerName;
    this.custormerAccountNumber = new Date().getTime();
    this.custormerAccountBalance = custormerAccountBalance || 0;

    this.deposit = function(amount) {
        this.custormerAccountBalance += amount;
    }
}

let user9 = new BankAccount9("user3", 1000);
// console.log('user9:', user9) // balance : 1000
user9.deposit(200);
// console.log('user10:', user9) // balance : 1200
let user10 = new BankAccount9("user4", 1000); 
// console.log('user11', user10);

// -----------------------------------------------------------

/* 
This is not good way to write method in CF because we are creating the instance means copy of
this CF that means each instance will have this method in their object that will cause problem like
memory usage.

So for that we will move this method into prototype of CF object and inherit that method from prototype into instance/copied object.
*/

function BankAccount10(customerName, custormerAccountBalance) {
    this.customerName = customerName;
    this.custormerAccountNumber = new Date().getTime();
    this.custormerAccountBalance = custormerAccountBalance || 0;

    this.deposit = function(amount) {
        this.custormerAccountBalance += amount;
    }

    this.withdraw = function(amount) {
        this.custormerAccountBalance -= amount;
    }
}

let user11 = new BankAccount10("user3", 1000);
// console.log('user11:', user11)
user11.deposit(500)
// console.log('user11:', user11)
user11.withdraw(200);
// console.log('user11:', user11)
let user12 = new BankAccount10("user4", 1000); 
// console.log('user12:', user12)

// ------------------------------------------------------------------

/* 
Let's do this by using form data means we will create UI in 2nd_Example.js
*/

function BankAccount11(customerName, custormerAccountBalance) {
    this.customerName = customerName;
    this.custormerAccountNumber = new Date().getTime();
    this.custormerAccountBalance = custormerAccountBalance || 0;

    this.deposit = function(amount) {
        this.custormerAccountBalance += amount;
    }

    this.withdraw = (amount) => {
        this.custormerAccountBalance -= amount;
    }
}

let user14 = new BankAccount11("user3", 1000);
user14.deposit(500)
user14.withdraw(200);
let user16 = new BankAccount11("user4", 1000); 