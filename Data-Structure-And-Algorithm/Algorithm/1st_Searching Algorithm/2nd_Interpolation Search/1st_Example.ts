
// Interpolation Search :

/* 
Sure! Let's dive into **Interpolation Search** and how to implement it in JavaScript.

### What is Interpolation Search?

**Interpolation Search** is an efficient algorithm for searching a sorted array. 
Unlike binary search, which splits the search space in half regardless of the values in the array, 
**Interpolation Search** tries to improve the search efficiency by estimating where the target value might be, 
based on the assumption that the values are uniformly distributed.

### How Does Interpolation Search Work?

1. **Initial Guess**: The algorithm calculates a "probable" position of the target element using the formula:

   position = low + (target - arr[low] / arr[high] - arr[low]) x (high - low)
   

   Where:
   - `low` is the starting index.
   - `high` is the ending index.
   - `arr[low]` and `arr[high]` are the values at the `low` and `high` positions, respectively.
   - `target` is the value you are searching for.

   The idea is that if the array is sorted and the distribution of values is relatively uniform, 
   the target element should be closer to a position in the array that can be estimated by this formula.

2. **Search Process**:
   - If the element at the calculated position is the target, the search ends successfully.
   - If the target value is smaller than the element at the guessed position, 
     then the search is narrowed to the left part of the array (`high = position - 1`).
   - If the target value is larger than the element at the guessed position, 
     the search is narrowed to the right part (`low = position + 1`).
   - If the guessed position is out of bounds (e.g., negative or greater than the array size), the search stops.

3. **Time Complexity**:
   - **Best case**: O(1) if the first guess is correct.
   - **Average case**: O(log log n) for uniform distributions.
   - **Worst case**: O(n) if the data is not uniformly distributed or the estimation doesn’t help 
     (e.g., if the values are clustered together).

### When to Use Interpolation Search?

- Interpolation search works best when:
  - The data is sorted.
  - The data is uniformly distributed (i.e., the values are evenly spread across the range).

If the data distribution is skewed, or if the array is not sorted, binary search is usually a better choice.

---

### Implementing Interpolation Search in JavaScript

Here’s the JavaScript implementation of **Interpolation Search**:

```javascript
function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Calculate the position based on interpolation formula
        let position = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

        // Check if the target is at the position
        if (arr[position] === target) {
            return position; // Target found
        }

        // If the target is smaller, narrow the search to the left
        if (arr[position] > target) {
            high = position - 1;
        }
        // If the target is larger, narrow the search to the right
        else {
            low = position + 1;
        }
    }

    return -1; // Target not found
}
```

### Explanation of the Code:

1. **Function Arguments**: The function `interpolationSearch` takes two parameters:
   - `arr`: A sorted array of numbers.
   - `target`: The value you want to search for.

2. **Initial Indices**: We initialize `low` to 0 (start of the array) and `high` to `arr.length - 1` (end of the array).

3. **Search Loop**:
   - The loop runs as long as `low <= high` (the search space is valid) and the `target` is between `arr[low]` and `arr[high]`.
   - The position is calculated using the interpolation formula. We use `Math.floor` to ensure the position is an integer.

4. **Target Found**: If the value at the calculated position matches the target, we return the position of the element.

5. **Narrowing the Search**: Depending on whether the target is smaller or larger than the value at the calculated position, 
   we adjust the search space (either move `low` up or `high` down).

6. **Return -1**: If the loop ends without finding the target, the function returns `-1`, indicating the target is not in the array.

---

### Example Usage

Let's test this algorithm with an example:

```javascript
const arr = [10, 22, 35, 40, 45, 50, 70, 90, 100];
const target = 45;

const index = interpolationSearch(arr, target);
console.log(`Element found at index: ${index}`);
```

### Output:

```
Element found at index: 4
```

---

### Advantages of Interpolation Search

- **Efficiency**: When the data is uniformly distributed, Interpolation Search can be more efficient 
  than binary search because it narrows the search based on actual values rather than just halving the search space.
- **Better Performance in Certain Scenarios**: For large datasets where values are evenly distributed, 
  Interpolation Search could outperform binary search, especially when data is sparse.

### Disadvantages

- **Not Always Faster**: If the distribution of values is skewed (e.g., when most of the data is clustered around one value), 
  interpolation search could become inefficient and slow.
- **Requires Sorted Data**: Like binary search, interpolation search only works on sorted arrays.
- **Potential for Out of Bounds**: The calculation of the position can potentially lead to out-of-bounds errors 
  if the array is not uniformly distributed.

---

### Final Thoughts

Interpolation Search is a great alternative to binary search for large, sorted arrays with relatively uniform data. 
It provides a more "intelligent" guessing mechanism that can sometimes dramatically improve search performance. 
However, it’s important to consider the distribution of your data, as it might not always outperform traditional binary search.

Let me know if you'd like to dive deeper into any specific part of the algorithm or its implementation!
*/


function interpolationSearch(arr: number[], target: number): number {
  let low: number = 0;
  let high: number = arr.length - 1;

  while(low <= high && target >= arr[low] && target <= arr[high]) {
    let position: number = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

    if(arr[position] === target) return position;
    if(arr[position] > target) high = position - 1;
    else low = position + 1;
  }
  return -1;
}

let arr: number[] = [10, 22, 35, 40, 45, 50, 70, 90, 100];
let target: number = 90;

const result: number = interpolationSearch(arr, target);
console.log('result:', result)