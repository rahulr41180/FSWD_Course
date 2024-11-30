
// Slice And Splice Method

/* 
Sure! Let's go over both the `slice()` and `splice()` methods in JavaScript, explaining them in detail with examples.

### 1. **`slice()` Method**

The `slice()` method is used to **extract a shallow copy of a portion of an array** into a new array without modifying the original array.

#### Syntax:
```javascript
array.slice(beginIndex, endIndex)
```

- **`beginIndex`** (optional): The index at which to begin extraction. If omitted, it defaults to `0`.
- **`endIndex`** (optional): The index at which to end extraction. The element at this index is not included in the new array. If omitted, it slices until the end of the array.

#### Key Points:
- The **original array is not modified**.
- It returns a **new array** containing the selected elements.
- Negative indices can be used to count from the end of the array.

#### Example 1: Basic usage of `slice()`

```javascript
let arr = [10, 20, 30, 40, 50];

let newArr = arr.slice(1, 4);  // Slices from index 1 to index 4 (but not including index 4)
console.log(newArr);  // Output: [20, 30, 40]
console.log(arr);     // Output: [10, 20, 30, 40, 50] (original array remains unchanged)
```

#### Example 2: Using negative indices with `slice()`

```javascript
let arr = [10, 20, 30, 40, 50];

let newArr = arr.slice(-3, -1);  // Slices the array from 3rd last element to the 2nd last element
console.log(newArr);  // Output: [30, 40]
```

#### Example 3: Omitting `endIndex` with `slice()`

```javascript
let arr = [10, 20, 30, 40, 50];

let newArr = arr.slice(2);  // Slices from index 2 to the end of the array
console.log(newArr);  // Output: [30, 40, 50]
```

### 2. **`splice()` Method**

The `splice()` method is used to **change the contents of an array** by removing, replacing, or adding elements at any position.

#### Syntax:
```javascript
array.splice(startIndex, deleteCount, item1, item2, ...)
```

- **`startIndex`**: The index at which to start modifying the array.
- **`deleteCount`**: The number of elements to remove from the array starting from `startIndex`. If `deleteCount` is `0`, no elements are removed.
- **`item1, item2, ...`** (optional): The items to be added to the array starting from `startIndex`. If no items are provided, `splice()` only removes elements.

#### Key Points:
- **Modifies the original array**.
- Can **add, remove, or replace elements** in the array.
- If no elements are removed (`deleteCount === 0`), the items are simply inserted.

#### Example 1: Basic usage of `splice()`

```javascript
let arr = [10, 20, 30, 40, 50];

// Remove 2 elements starting from index 1
let removedItems = arr.splice(1, 2);
console.log(removedItems);  // Output: [20, 30] (the removed elements)
console.log(arr);           // Output: [10, 40, 50] (the original array is modified)
```

#### Example 2: Using `splice()` to add elements

```javascript
let arr = [10, 20, 30, 40, 50];

// Add elements starting at index 2 (without removing any elements)
arr.splice(2, 0, 25, 27);  // Adds 25 and 27 at index 2
console.log(arr);           // Output: [10, 20, 25, 27, 30, 40, 50]
```

#### Example 3: Using `splice()` to replace elements

```javascript
let arr = [10, 20, 30, 40, 50];

// Replace 2 elements starting at index 1 with new elements
arr.splice(1, 2, 15, 17);
console.log(arr);  // Output: [10, 15, 17, 40, 50]
```

#### Example 4: Using negative indices with `splice()`

```javascript
let arr = [10, 20, 30, 40, 50];

// Remove 1 element starting from the 2nd last element (index -2)
let removedItems = arr.splice(-2, 1);
console.log(removedItems);  // Output: [40]
console.log(arr);           // Output: [10, 20, 30, 50]
```

### Comparison of `slice()` and `splice()`

| **Feature**              | **`slice()`**                                        | **`splice()`**                                         |
|--------------------------|------------------------------------------------------|-------------------------------------------------------|
| **Modifies the array**    | No, it creates a new array.                         | Yes, it modifies the original array.                  |
| **Returns value**         | Returns a new array (portion of the original array). | Returns an array of removed elements (if any).        |
| **Parameters**            | `slice(beginIndex, endIndex)`                        | `splice(startIndex, deleteCount, item1, item2, ...)`  |
| **Common Use Cases**      | Extract a subarray from an array.                    | Add, remove, or replace elements in the array.        |

### Summary:
- **`slice()`** is a non-destructive method that creates a shallow copy of a portion of the array, leaving the original array unchanged.
- **`splice()`** is a destructive method that modifies the array by adding, removing, or replacing elements.

Let me know if you need any further clarification!
*/