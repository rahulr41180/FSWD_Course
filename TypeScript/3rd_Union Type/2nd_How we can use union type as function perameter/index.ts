
// Union as function perameter.

function printStatus(message: string, code: string | number) {
    console.log(`Message: ${message}. status code: ${code}`)
}

printStatus("Request was successful", 200);
printStatus("Resource was not found", "404");