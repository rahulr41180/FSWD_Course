
// Imagine:

class BankAccount {
    balance = 1000;
}

// User:
account.balance = -50000;

// Ab system corrupt.
// Encapsulation ke baad:

account.withdraw(500);

// Method validation karega.

// --------------------------------------------------------------

// Real Problem Without Encapsulation
// Suppose:
class Employee {
    salary = 50000;
}

// Anyone:
employee.salary = -100000;

// Kar sakta hai.
// Business rules break ho jayenge.

// Encapsulation = Protection

// ----------------------------------------------------------------

// Data + Behavior Together
// Ye bahut important hai.

// Wrong Design:
let balance = 1000;

function deposit(amount) {
    balance += amount;
}

// Data alag.
// Logic alag.

// -----------------------------------------------------------------

// Encapsulated Design:

class BankAccount {

    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }
}

// Data aur behavior ek unit mein.