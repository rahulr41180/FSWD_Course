
// DOM Manipulation

const codersBankCusAccounts1 = []; // Store the customer account information
const codersBankAccountCreationForm1 = document.getElementById("codersBankAccountCreationForm");
const customerName1 = document.querySelector("#customerName");
const customerAccountBalance1 = document.querySelector("#customerAccountBalance");
codersBankAccountCreationForm1.addEventListener("submit", (e) => {
    e.preventDefault();
})

// ------------------------------------------------------

function BankAccount1(customerName, customerAccountBalance) {
    this.customerName = customerName;
    this.customerAccountNumber = new Date().getTime();
    this.customerAccountBalance = customerAccountBalance || 0;

    this.deposit = function(amount) {
        this.customerAccountBalance += amount;
    }

    this.withdraw = (amount) => {
        this.customerAccountBalance -= amount;
    }
}

const codersBankCusAccounts2 = []; 
const codersBankAccountCreationForm2 = document.getElementById("codersBankAccountCreationForm");
const customerName2 = document.querySelector("#customerName");
const customerAccountBalance2 = document.querySelector("#customerAccountBalance");
codersBankAccountCreationForm2.addEventListener("submit", (e) => {
    e.preventDefault();
    // As we are getting balance in string format from form that we have to convert into number.
    const newUserAccountInstance = new BankAccount1(customerName2.value, +customerAccountBalance2.value);
    codersBankCusAccounts2.push(newUserAccountInstance);
    console.log('codersBankCusAccounts2:', codersBankCusAccounts2)
})

const codersBankAccountDepositeForm1 = document.querySelector("#codersBankAccountDepositeForm");
const customerAccountNumber = document.querySelector("#customerAccountNumber");
const customerDepositAmount = document.querySelector("#customerDepositAmount");

codersBankAccountDepositeForm1.addEventListener("submit", (e) => {
    e.preventDefault();
    const isAccountExist = codersBankCusAccounts2.find((account) => account?.customerAccountNumber === +customerAccountNumber.value)
    if(!isAccountExist) {
        alert("Account is not exists");
        return;
    }
    isAccountExist.deposit(+customerDepositAmount.value);
    console.log('codersBankCusAccounts2:', codersBankCusAccounts2)
})