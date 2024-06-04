
/*

Buffer : 
A Buffer in Node.js is a temporary storage area for raw binary data. Unlike strings in JavaScript, 
which are encoded in UTF-16, Buffers allow you to work with raw binary data directly. 
This is particularly useful for tasks that involve reading or writing binary data, 
such as handling files, network communications, or interfacing with binary data protocols.

While the Buffer class is available within the global scope.
Buffer objects are used to represent a fixed-length sequence of bytes.
*/

const { Buffer } = require("buffer");

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);
console.log('buf1:', buf1)

// Creates a Buffer of length 10,
// filled with bytes which all have the value `1`.
const buf2 = Buffer.alloc(10, 1);
console.log('buf2:', buf2);

const buf3 = Buffer.alloc(10, 10);
console.log('buf3:', buf3);

/* 
The reason you're seeing <Buffer 0a 0a 0a 0a 0a 0a 0a 0a 0a 0a> 
instead of <Buffer 10 10 10 10 10 10 10 10 10 10> is because the Buffer.alloc method 
initializes the buffer with the specified value using the lower 8 bits of the integer. 
In hexadecimal, the value 10 is represented as 0x0A which is 10 in decimal. 
This behavior is consistent with how binary data is represented.
*/

// Creates an uninitialized buffer of length 10.
// This is faster than calling Buffer.alloc() but the returned

const buf4 = Buffer.allocUnsafe(10);
console.log('buf4:', buf4)