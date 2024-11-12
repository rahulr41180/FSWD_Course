
// Jump Search :

/* 
Sure! Let's dive into the Jump Search Algorithm in JavaScript, starting from the basics and gradually moving toward a
more advanced understanding.

### **1. What is Jump Search?**

Jump Search is an algorithm used for searching a specific element in a sorted array. It works by jumping ahead by a
fixed step size (called the "block size") and then performing a linear search when the target element is between two
blocks.

### **2. Key Points:**
- **Sorted Array**: Jump Search only works with sorted arrays.
- **Time Complexity**: The average and worst-case time complexity of Jump Search is \( O(\sqrt{n}) \), where \( n \) is
the number of elements in the array.
- **Space Complexity**: \( O(1) \), since it only uses a constant amount of extra space.

### **3. Jump Search Idea:**
- We divide the array into blocks of size \( \sqrt{n} \).
- First, we "jump" ahead by \( \sqrt{n} \) steps at a time to find a block where the element might be located.
- Once we find the block, we perform a linear search within that block to find the exact element.

### **4. Step-by-Step Algorithm:**
1. **Calculate the block size**: The block size is \( \sqrt{n} \), where \( n \) is the length of the array.
2. **Jump through blocks**: Move ahead by the block size until you either go past the target or find an element greater
than the target.
3. **Linear search in the block**: Once you identify the block, do a linear search within that block to find the exact
element.

---

### **5. Basic Jump Search Implementation in JavaScript**

Let's implement the Jump Search algorithm in JavaScript.

#### **Code:**

// Jump Search Function
function jumpSearch(arr, target) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n)); // Calculate block size
    let prev = 0;

    // Jump ahead by step size until we find a block with a value >= target
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) {
            return -1; // Target not found
        }
    }

    // Linear search within the block
    for (let i = prev; i < Math.min(step, n); i++) {
        if (arr[i] === target) {
            return i; // Return the index of the found target
        }
    }

    return -1; // Target not found
}

// Example Usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 15;

const result = jumpSearch(arr, target);
console.log(result); // Output: 7 (index of 15)


Explanation:
Math.floor(Math.sqrt(n)): This calculates the block size by taking the square root of the array size.
We iterate through the array by "jumping" by the block size. If we find that the element at the current block is greater than the target, we stop jumping and start a linear search within that block.
The linear search is done between the last "jumped" position (prev) and the current position (step).

Time Complexity Analysis:
Jumping Phase:
We jump ahead by a block size of sqrt(n), so the number of jumps will be approximately sqrt(n)

Linear Search Phase
In the worst case, we perform a linear search within a block of size sqrt(n)

So, the total time complexity is:
O(sqrt(n)) + O(sqrt(n)) = O(sqrt(n))

This is significantly better than a linear search, which has a time complexity of O(n).

*/

let array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]