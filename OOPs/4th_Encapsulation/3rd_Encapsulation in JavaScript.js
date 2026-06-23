
// JavaScript historically private fields support nahi karta tha.
// Log tricks use karte the.

// Method 1: Naming Convention
class User {
    _password = "123";
}

// Underscore ka matlab:
// Please don't access directly.


// Lekin actually private nahi.
user._password

// Accessible hai.

// Method 2: Closures
// Old JS Encapsulation.

function BankAccount() {

    let balance = 0;

    this.deposit = function(amount) {
        balance += amount;
    };

    this.getBalance = function() {
        return balance;
    };
}

// Outside:
const account = new BankAccount();
console.log(account.balance);

// Output:
undefined

// Access nahi kar sakte.
// Lekin:
account.getBalance();
// kar sakte ho.

// Ye closure-based encapsulation hai.

// Method 3: Modern Private Fields
// ES2022+

class BankAccount {

    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

// Outside:
account.#balance

// ❌ Syntax Error
// Access hi nahi kar sakte.

// Real Banking Example

class BankAccount {

    #balance = 0;

    deposit(amount) {

        if(amount <= 0) {
            throw new Error("Invalid amount");
        }

        this.#balance += amount;
    }

    withdraw(amount) {

        if(amount > this.#balance) {
            throw new Error("Insufficient funds");
        }

        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

// User kya kar sakta hai?

account.deposit(500);
account.withdraw(200);

// User kya nahi kar sakta?

account.#balance = 99999999;

// Ye actual Encapsulation hai.