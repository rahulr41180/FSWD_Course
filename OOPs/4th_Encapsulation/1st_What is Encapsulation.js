
/* 

What is Encapsulation
Official definition:

Encapsulation is the process of bundling data and the methods that operate on that data into a single unit while controlling direct access to the data.

*/

// Part 1
// Bundle Data + Methods

class BankAccount {
    balance = 1000;

    deposit(amount) {
        this.balance += amount;
    }
}

// Data:
// balance

// Method:
// deposit()

// Ek unit ke andar rakhe gaye.
// Ye bhi Encapsulation hai.

// Part 2
// Control Access

// Koi directly:
// account.balance = -100000;

// na kar sake.
// Ye bhi Encapsulation hai.