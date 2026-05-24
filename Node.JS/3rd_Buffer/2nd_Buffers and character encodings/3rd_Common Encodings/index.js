
// Common Encodings

// 1:  UTF-8 (Most Important)

// Default in Node.js
// Supports all languages + emojis

Buffer.from("Hello", "utf8");

// 2: ASCII
// Only English characters
// Limited (0–127)

// 3: UTF-16
// Used internally in JavaScript strings

// Encoding Example

const buffer = Buffer.from("A");
console.log(buffer);

// <Buffer 41>

// "A" = 65 (decimal) = 41 (hex)

// Real World Example (API / JSON)

app.get("/", (req, res) => {
    res.send("Hello");
});

// "Hello" → Buffer → bytes → network → client

/* 
"Hello" (JavaScript String)
In your code:
res.send("Hello");
"Hello" is a JavaScript string
Stored internally as UTF-16 (in V8 engine)

👉 But network does NOT understand strings
*/

/* 
Convert to Buffer (Binary Data)

Node.js converts string → Buffer

Buffer.from("Hello")

👉 Output:

<Buffer 48 65 6c 6c 6f>
Why Buffer?
Network works with raw binary (bytes)
Buffer = raw memory representation
*/

/* 
Buffer → Bytes

Each character becomes ASCII / UTF-8 byte

Character	ASCII	Hex
H	72	48
e	101	65
l	108	6c
l	108	6c
o	111	6f

👉 Final bytes:

48 65 6c 6c 6f
*/

/* 
HTTP Response Formation

Express internally does something like:

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 5

Hello

👉 Important:

Headers + Body are prepared
Body = Buffer data
*/

/* 
Bytes → Network (TCP Layer)

Now Node.js uses:

👉 http module → net module → TCP socket

What happens:
Data is broken into packets
Sent via TCP
[Packet 1] → contains headers + part of body
[Packet 2] → remaining body

👉 Protocol stack:

HTTP → TCP → IP → Network
*/

/* 

Network → Client (Browser / Postman)

Client receives:

Reassembles packets
Reads headers
Reads body bytes
*/

/* 
Bytes → String Again

Client converts bytes → string using encoding:

Buffer → UTF-8 → "Hello"
*/

/* 
"Hello" (JS String)
   ↓
Buffer.from("Hello")
   ↓
[48 65 6c 6c 6f] (bytes)
   ↓
HTTP Response (headers + body)
   ↓
TCP packets
   ↓
Internet 🌐
   ↓
Client receives bytes
   ↓
Decode (UTF-8)
   ↓
"Hello" shown in browser
*/

/* 
Real Node.js Internal Equivalent

Express internally calls:

res.end(Buffer.from("Hello"));

And under the hood:

socket.write(buffer);
*/

/* 
Real-World Analogy

Think like this:

"Hello" → message you wrote
Buffer → envelope
Bytes → letters encoded
TCP → delivery truck 🚚
Client → receiver opening letter
*/