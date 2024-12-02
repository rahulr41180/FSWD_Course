
// Get the object length :

/*
To get the **length** of an object in JavaScript, you need to clarify what kind of "length" you're referring to. JavaScript objects don't have a `length` property by default, as `length` is typically associated with arrays or strings. However, you can calculate the number of properties in an object in different ways:

### 1. **Using `Object.keys()` to Get the Number of Properties**
If you want the number of properties (keys) in an object, you can use `Object.keys()`:
*/
const obj1 = { name: "John", age: 30, country: "USA" };
const length1 = Object.keys(obj1).length;
console.log(length1);  // Output: 3

/*
- `Object.keys(obj)` returns an array of the object's enumerable property names (keys).
- `.length` gives the number of keys in that array.
*/

// -----------------------------------------------------

/*
### 2. **Using `Object.entries()` for Key-Value Pairs**
If you want to get the number of key-value pairs, you can use `Object.entries()`:
*/

const obj2 = { name: "John", age: 30, country: "USA" };
const length2 = Object.entries(obj2).length;
console.log(length2);  // Output: 3

/*
- `Object.entries(obj)` returns an array of key-value pairs.
- `.length` gives the number of pairs.
*/

// ----------------------------------------------------------

/*
### 3. **Using `Object.getOwnPropertyNames()`**
`Object.getOwnPropertyNames()` returns all properties (including non-enumerable ones), and you can get the length of that array:
*/

const obj3 = { name: "John", age: 30, country: "USA" };
const length3 = Object.getOwnPropertyNames(obj3).length;
console.log(length3);  // Output: 3

/*
Certainly! Let's break down the provided code in detail to understand how it works:

### The Code:
*/
const obj4 = { name: "John", age: 30, country: "USA" };
const handler = {
  get: (target, prop) => {
    if (prop === 'length') {
      return Object.keys(target).length;  // Custom behavior
    }
    return prop in target ? target[prop] : undefined;
  }
};

const proxyObj = new Proxy(obj4, handler);

console.log(proxyObj.length);  // Output: 3

/*
### **Key Concepts:**

1. **Object (`obj`)**: A simple JavaScript object containing three properties:
   ```javascript
   const obj = { name: "John", age: 30, country: "USA" };
   ```
   This object has three properties: `name`, `age`, and `country`.

2. **Proxy**: A JavaScript `Proxy` is a special object that allows you to define custom behavior for fundamental operations on objects, such as getting, setting, and deleting properties. It acts as a wrapper around another object (called the "target") and intercepts operations on it.

3. **Handler**: The handler is an object where you define custom behavior for different operations on the `Proxy` object. The `get` method in the handler allows you to define custom logic when any property is accessed on the proxy object.

4. **`get` Trap**: The `get` trap (or handler) is triggered whenever a property of the proxy object is accessed. It takes two arguments:
   - `target`: The original object being proxied (in this case, `obj`).
   - `prop`: The property being accessed (e.g., `name`, `age`, or `length`).

### **Breaking Down the Code:**

1. **Original Object (`obj`):**
   ```javascript
   const obj = { name: "John", age: 30, country: "USA" };
   ```
   This is a simple JavaScript object with 3 properties: `name`, `age`, and `country`.

2. **Handler Object (`handler`):**
   ```javascript
   const handler = {
     get: (target, prop) => {
       if (prop === 'length') {
         return Object.keys(target).length;  // Custom behavior
       }
       return prop in target ? target[prop] : undefined;
     }
   };
   ```
   - The `get` method intercepts all property accesses on the `Proxy` object.
   - **Custom behavior for `length`:** If the property being accessed is `'length'`, we want to return the number of properties (keys) in the `target` object (i.e., `obj`). This is achieved by using `Object.keys(target).length`. `Object.keys(target)` gives an array of the keys in the object, and `.length` gives the number of those keys.
   - **Default behavior:** If the property is not `'length'`, we check if the property exists in the `target` object. If it does, we return the value of that property. If not, we return `undefined`.

3. **Creating the Proxy Object (`proxyObj`):**
   ```javascript
   const proxyObj = new Proxy(obj, handler);
   ```
   - `proxyObj` is now a `Proxy` object that wraps around the original `obj` and uses the `handler` to intercept operations on it.
   - The proxy object behaves like the original object but allows us to customize its behavior using the handler.

4. **Accessing `proxyObj.length`:**
   ```javascript
   console.log(proxyObj.length);  // Output: 3
   ```
   - When you try to access `proxyObj.length`, the `get` trap in the handler is triggered.
   - The `prop` parameter in the `get` method will be `'length'`.
   - Since `prop === 'length'`, we go into the first conditional block:
     ```javascript
     return Object.keys(target).length;
     ```
     - `Object.keys(target)` returns the array `["name", "age", "country"]`, which are the keys of the `obj` object.
     - `.length` gives the number of keys in the object, which is `3`.
   - The result of `Object.keys(target).length` is `3`, so `proxyObj.length` returns `3`.

### **Output:**

```javascript
console.log(proxyObj.length);  // Output: 3
```
- The output is `3`, which is the number of properties (`name`, `age`, `country`) in the original object `obj`.

### **How `Proxy` and `Handler` Work Together:**

- The `Proxy` object (`proxyObj`) intercepts the `length` property access and instead of simply returning a property of the object, it runs the custom behavior defined in the `get` trap in the handler.
- In this case, the custom behavior calculates the number of properties in the original object (`obj`) and returns that as the value of `proxyObj.length`.
- The `Proxy` allows for flexible customization of how properties of the object are accessed, providing powerful ways to manipulate object behavior in JavaScript.

### **Summary of Key Points:**

- The `Proxy` object lets you define custom behaviors for operations on an object.
- The `get` trap intercepts property access on the proxy.
- In this example, we customized the behavior for the `length` property to return the number of properties in the original object.
- `Object.keys(target).length` gives the count of properties (keys) in the object.

Let me know if you need further clarification on any part!
*/