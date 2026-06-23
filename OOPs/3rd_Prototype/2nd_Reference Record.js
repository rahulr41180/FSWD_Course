

// > **No, JavaScript does not literally create `const obj = User.prototype` internally.**


function User(name) {

}

User.prototype.add = function() {
    console.log(this.add())
}

console.log(User.prototype.add());

User.prototype.add();

// JavaScript does something conceptually like:

```
1. Evaluate User.prototype
2. Find property "add"
3. Call the function
4. Set this = User.prototype
Internally, the engine doesn't need to create:
```

const obj = User.prototype;

```text
It simply remembers:
Base Object = User.prototype
Method = add
```

// and then invokes the function with:

// this = Base Object

// ## More Accurate Internal View

```js
User.prototype.add();
JavaScript roughly sees:
```

```text
Reference:
{
    base: User.prototype,
    property: "add"
}
```

```text
Get function stored in "add"
Call function
Set this = base object
```

```js
function() {
    console.log(this);
}
```

```js
this === User.prototype
---

Because of the call site:

User.prototype.add()
^^^^^^^^^^^^^^
```

// The object before the dot becomes the `this` value.

```js
const person = {
    name: "Rahul",
    greet() {
        console.log(this);
    }
};

person.greet();
```

```js
this === person
```

// ### Example 2

```js
const fn = person.greet;

fn();
```

// Now there is no object before the dot.

```js
fn();
```

// So in strict mode:

```js
this === undefined
```

// ### Example 3

```js
User.prototype.add();
```

```js
this === User.prototype
```

// because `User.prototype` is the object before the dot.

// ## What's Really Happening in the Spec?

// The ECMAScript specification uses a concept called a **Reference Record**.

```js
User.prototype.add
```

// the engine creates something conceptually like:

```text
Reference {
    Base: User.prototype,
    Name: "add"
}
```

// Then when it sees:

```js
()
```

// it performs a function as method call and passes:

```text
this = Base
```

// which is:

```js
this = User.prototype
```

// So the important takeaway is:

```js
User.prototype.add();
```

// does **not** internally become:

```js
const obj = User.prototype;
obj.add();
```

// But that mental model produces exactly the same `this` behavior, which is why it's useful for learning.
