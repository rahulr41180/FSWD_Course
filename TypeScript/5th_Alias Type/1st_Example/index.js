// Alias :
// ------------------------------------------------
/*
    wherever we want type of variable or perameter as string there I can use 'stringType' custome name.
*/
var str = "Hello";
// ---------------------------------------------------
/*
Where we use this custome type

Here I am initializing the type of variable like this.
*/
function printStatus1(message, code) {
    if (typeof code === "string") {
        console.log("".concat(message, ". Status code: ").concat(code.trim()));
    }
    else {
        console.log("".concat(message, ". Status code: ").concat(code));
    }
}
printStatus1("Request was succesful", 500);
printStatus1("Request was succesful", "500");
function printStatus2(message, code) {
    if (typeof code === "string") {
        console.log("".concat(message, ". Status code: ").concat(code.trim()));
    }
    else {
        console.log("".concat(message, ". Status code: ").concat(code));
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
function roleMessage1(role) {
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
roleMessage2("admin");
function roleMessage2(role) {
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
function getFullName1(uesr) {
    return uesr.firstName + " " + uesr.lastName;
}
function isEligibleForVoting1(user) {
    return user.age >= 18;
}
function getFullName2(uesr) {
    return uesr.firstName + " " + uesr.lastName;
}
function isEligibleForVoting2(user) {
    return user.age >= 18;
}
var user = {
    firstName: "user1",
    lastName: "admin",
    age: 17
};
console.log(getFullName1(user));
console.log(isEligibleForVoting1(user));
