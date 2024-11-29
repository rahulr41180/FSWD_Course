// Union as function perameter.
/*
We can send either string or number to code perameter so to assign a more then one type to an variable we have to use (|) union symbol
*/
function printStatus(message, code) {
    console.log("Message: ".concat(message, ". status code: ").concat(code));
}
printStatus("Request was successful", 200);
printStatus("Resource was not found", "404");
// --------------------------------------------------
/*
If suppose we are sending the " 404" space before 404 in string but we don't want space before 404 string.

For that we can use trim method

But we will get error :
Property 'trim' does not exist on type 'string | number'.
Property 'trim' does not exist on type 'number'.
But trim does exist on type 'string'

So we have to take care that which method do we need to use means
whatever method we are using that method should accept all type those we have defined with union symbol

We can solve this problem by using if() {} else {} condition.
*/
// function printStatus1(message: string, code: string | number) {
//     console.log(`Message: ${message}. status code: ${code.trim()}`)
// }
// printStatus1("Request was successful", 200);
// printStatus1("Resource was not found", " 404");
// ---------------------------------------------------
function printStatus2(message, code) {
    if (typeof code === "string") {
        console.log("Message: ".concat(message, ". status code: ").concat(code.trim()));
    }
    else {
        console.log("Message: ".concat(message, ". status code: ").concat(code));
    }
}
printStatus2("Request was successful", 200);
printStatus2("Resource was not found", " 404");
