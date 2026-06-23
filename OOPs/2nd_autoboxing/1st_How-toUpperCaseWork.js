
let str = "abc";
str.toUpperCase();

// At first glance, this looks strange because:

typeof str

// returns:

// "string"

// A primitive string is **not an object**.
// So how can a primitive have methods?

// # What Actually Happens Internally
// When JavaScript sees:

str.toUpperCase();

// it temporarily creates a **String object wrapper** behind the scenes.

let temp = new String(str);
temp.toUpperCase();

// After the call finishes:

// temp is discarded.
// This automatic conversion is called **Autoboxing**.

// # Internal Flow

let str = "abc";
str.toUpperCase();

// ### Step 1

// Primitive exists:

"abc"

// str
//  ↓
// "abc"

// ### Step 2
// JavaScript notices:

str.toUpperCase()

// and thinks: "Primitive strings don't have properties directly. Let me temporarily wrap it."

Internally:
new String("abc")

creates:
{
//    [[PrimitiveValue]]: "abc"
}

// ### Step 3

// JavaScript looks for:

toUpperCase

// on the String object.
// It doesn't find it directly.

// ### Step 4

// It follows the prototype chain:

```
temp
  ↓
String.prototype
```

// and finds:

String.prototype.toUpperCase

// ### Step 5

// The function executes.

// Result:

"ABC"

// ### Step 6

// Temporary wrapper is destroyed.

// # Where Does toUpperCase() Come From?

// From:

String.prototype

// You can verify:

console.log(String.prototype.toUpperCase);

// Output:

// [Function: toUpperCase]

// # Is It a Static Method?

// No.

// Static methods belong to the constructor itself.

class User {
    static hello() {
        console.log("Hi");
    }
}

User.hello();

// hello belongs to:

User

not:

User.prototype

// # Compare Static vs Prototype

// ### Static

class User {
    static hello() {}
}

// Internally:

User.hello = function() {};

// Call:

User.hello();

// ### Prototype Method

class User {
    display() {}
}

// Internally:

User.prototype.display = function() {};

// Call:

let u = new User();

u.display();

// # Prototype Chain Visualization

// When you do:

"abc".toUpperCase();

// JavaScript behaves roughly like:

```
Primitive String
      │
      ▼
Temporary String Object
      │
      ▼
String.prototype
      │
      ├── toUpperCase()
      ├── slice()
      ├── trim()
      ├── charAt()
      └── includes()
```

```javascript
Method found here:
String.prototype.toUpperCase
```

// and executed.
// # Is It Coming From the Global Object?

// No.

```javascript
Many developers initially think:
window.toUpperCase()
```
or

```javascript
global.toUpperCase()
```

// exists It doesn't.

// Try:

console.log(window.toUpperCase);

Output:

```text
undefined
```

// because `toUpperCase` belongs to:

```javascript
String.prototype
not the global object.
```

```javascript
# Real Internal Lookup
let str = "abc";
str.toUpperCase();
```

```javascript
Engine conceptually does:
new String("abc")
    .__proto__
    .toUpperCase();
```

```javascript
which is equivalent to:
String.prototype.toUpperCase.call(
    new String("abc")
);
```

// The method is found on `String.prototype`, executed with the temporary String object as `this`, and then the temporary object is discarded.
// That's why even though `"abc"` is a primitive, it can still use methods like:

```javascript
"abc".toUpperCase()
"abc".trim()
"abc".slice()
"abc".includes()
```

// All of them ultimately come from `String.prototype` through autoboxing and the prototype chain.