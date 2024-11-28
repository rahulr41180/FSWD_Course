// Union as function perameter.
function printStatus(message, code) {
    console.log("Message: ".concat(message, ". status code: ").concat(code));
}
printStatus("Request was successful", 200);
printStatus("Resource was not found", "404");
