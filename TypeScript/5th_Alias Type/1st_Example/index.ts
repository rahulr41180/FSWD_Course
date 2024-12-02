
// Alias :

/* 
    Type alias is basically type.
    Type Alias allows us to define a type with a custom name
*/

// --------------------------------------------------------

/* 
Let's say for the string type we want to define a custom name now whenever we want to create a custom type we use type keyword followed by a

name for the type here I'm going to call this type as stringType and to this we will assign string

so for this string type are creating a custom type called string type and wherever we want to use this string type
*/

type stringType = string;

// ------------------------------------------------

/*
    wherever we want type of variable or perameter as string there I can use 'stringType' custome name.
*/

let str: stringType = "Hello";

// ---------------------------------------------------

/* 
Where we use this custome type

Here I am initializing the type of variable like this.
*/

function printStatus1(message: string, code: string | number) {
    if (typeof code === "string") {
        console.log(`${message}. Status code: ${code.trim()}`);
    } else {
        console.log(`${message}. Status code: ${code}`);
    }
}

printStatus1("Request was succesful", 500);
printStatus1("Request was succesful", "500");

// ----------------------------------------------------

type StringOrNumber = string | number; // called Alias type.

function printStatus2(message: string, code: StringOrNumber) {
    if (typeof code === "string") {
        console.log(`${message}. Status code: ${code.trim()}`);
    } else {
        console.log(`${message}. Status code: ${code}`);
    }
}

printStatus2("Request was succesful", 500);
printStatus2("Request was succesful", "500");

/* 
Now here I have make a custom type StringOrNumber and I have assigned it string | number;
Now where I want that variable or perameter either have string | number union type variable there I just have to write StringOrNumber custom type name.

So that I don't need to write string | number again and again.
*/

// --------------------------------------------------------

roleMessage1("admin");

function roleMessage1(role: "admin" | "read" | "read-write") {
    switch (role) {
        case "admin":
            console.log("You have admin permission on this site.");
            break;
        case "read":
            console.log("You have read permission on this site.");
            break;
        case "read-write":
            console.log("You have read and write permission on this site.");
            break;
        default:
            console.log("You are unAuthorized person!");
    }
}

/* 
Here I can see role has literal type means the type of role are assigned value.
We can create an Alias type also for this because I don't want to write different type again and again if I will want this literal type agian
for another variable or for another permeter.
*/

// ------------------------------------------------

type roleType = "admin" | "read" | "read-write";
roleMessage2("admin");

function roleMessage2(role: roleType) {
    switch (role) {
        case "admin":
            console.log("You have admin permission on this site.");
            break;
        case "read":
            console.log("You have read permission on this site.");
            break;
        case "read-write":
            console.log("You have read and write permission on this site.");
            break;
        default:

            console.log("You are unAuthorized person!");
    }
}

// ----------------------------------------

function getFullName1(uesr: { firstName: string, lastName: string, age: number }) {
    return uesr.firstName + " " + uesr.lastName;
}

function isEligibleForVoting1(user: { firstName: string, lastName: string, age: number }) {
    return user.age >= 18
}

// --------------------------------------------

type UserModelType = { 
    firstName: string, 
    lastName: string, 
    age: number 
}

function getFullName2(uesr: UserModelType) {
    return uesr.firstName + " " + uesr.lastName;
}

function isEligibleForVoting2(user: UserModelType) {
    return user.age >= 18
}

let user: UserModelType = {
    firstName: "user1",
    lastName: "admin",
    age: 17
}

console.log(getFullName1(user));
console.log(isEligibleForVoting1(user));