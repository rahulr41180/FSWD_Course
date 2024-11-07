
const { Buffer } = require("buffer");

/*
When converting between Buffers and strings, 
a character encoding may be specified. 
If no character encoding is specified, 
UTF-8 will be used as the default.
*/

const buf1 = Buffer.from("Hello World!", "utf-8");
console.log('buf1:', buf1);

console.log('buf1:', buf1.toString("hex"));