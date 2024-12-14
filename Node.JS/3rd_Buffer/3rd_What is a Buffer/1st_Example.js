
// What is a Buffer?

/* 
In Node.js, Buffer is a built-in global object that provides a way to work with binary data directly in memory. 
It allows you to interact with raw binary data in situations where you need to handle 
I/O operations like reading or writing files, network communication, or interacting with streams.

Why Use Buffers?
JavaScript traditionally works with strings (which are UTF-8 encoded) and objects (which are complex data types). 
However, when dealing with raw binary data (e.g., reading files or communicating over a network), 
you need a way to handle data that isn’t necessarily a string. This is where Buffers come into play. 

Buffers allow you to deal with binary data in raw format, which isn't directly available through regular JavaScript strings.

Key Concepts
Buffers are NOT strings: A Buffer is a temporary storage for raw binary data, not a string. 
Unlike JavaScript strings, which are Unicode (UTF-16), Buffers are raw binary data with a fixed-length array of bytes.

Fixed-size memory allocation: Buffers are allocated in fixed-size chunks of memory, 
and the size of a Buffer is specified at the time of its creation. Once created, you cannot change the size of the Buffer.

Node.js Buffer vs JavaScript Array: While Buffers are similar to arrays, they store raw binary data, 
and their elements are bytes (8-bit unsigned integers). 
JavaScript arrays, on the other hand, store any kind of JavaScript value (numbers, strings, objects).
*/

/* 
Buffers are optimized for handling large amounts of binary data. Since Buffers are directly allocated in memory, 
they are more memory-efficient for dealing with binary data compared to JavaScript strings. 
Buffers are especially useful when you're dealing with streams, file I/O, or network requests, 
where performance and memory usage are critical.

*/