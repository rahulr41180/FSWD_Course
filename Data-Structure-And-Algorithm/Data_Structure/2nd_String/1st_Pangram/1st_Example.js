// Pangram :
/*
Given a string s, the task is to check if it is Pangram or not. A pangram is a sentence containing all letters of the English Alphabet.

A **Pangram** is a sentence or phrase that contains every letter of the alphabet at least once. For example, the sentence
"The quick brown fox jumps over the lazy dog" is a well-known pangram because it includes all 26 letters of the English alphabet.

### Steps to Check if a String is a Pangram

1. **Normalize the String**:

   - Convert the entire string to lowercase (or uppercase). This is important because the check should be case-insensitive.
   - Remove any non-alphabetical characters (spaces, punctuation, etc.), as they are not relevant for the pangram check.
   
2. **Check for Presence of All Alphabet Letters**:
   - You need to check if the string contains all 26 letters (from 'a' to 'z') at least once.
   - A simple way to do this is to maintain a set of all alphabet characters, and iterate through the string to
     add encountered characters into the set.
   - At the end of the iteration, if the set contains 26 unique characters, the string is a pangram.

### TypeScript Example:

Let's write a TypeScript function to check if a given string is a pangram or not.

```typescript
function isPangram(str: string): boolean {
    // Normalize the string: convert to lowercase and remove non-alphabet characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z]/g, '');
    
    // Create a set to store unique characters
    const uniqueChars = new Set(normalizedStr);
    
    // Check if the set contains all 26 letters
    return uniqueChars.size === 26;
}

// Test examples
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello, World!")); // false
```

### Explanation of TypeScript Concepts Used:

1. **TypeScript Function Syntax**:
   - The function `isPangram(str: string): boolean` takes a single argument `str` (the input string) of type `string`,
   and returns a `boolean` (either `true` or `false`).
   - The `string` and `boolean` are TypeScript type annotations that help in defining the type of input and output.
   
2. **`.toLowerCase()` Method**:
   - `toLowerCase()` is a JavaScript method that converts a string to all lowercase letters. It's useful for normalizing
   the case so that the comparison is case-insensitive.
   
3. **`.replace()` Method with Regular Expression**:
   - `replace(/[^a-z]/g, '')` uses a regular expression to replace all characters that are **not** in the range `a-z`
   (which means all non-alphabetical characters like spaces, punctuation, etc.) with an empty string.
   - The `g` flag means global replacement (i.e., replace all occurrences).

4. **`Set` in TypeScript**:
   - A `Set` is a collection of values where each value must be unique. The `Set` constructor is used to create an object
   that will store unique values from the normalized string.
   - `Set` is useful here because it automatically removes duplicate characters, which helps us efficiently check if
   all 26 letters are present.
   
5. **`.size` Property of `Set`**:
   - The `size` property of a `Set` gives the number of unique elements in the set. If it equals 26, we know that
   all alphabet letters are present at least once.

### Example Walkthrough:

#### Example 1:
```typescript
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
```

- After converting the string to lowercase and removing non-alphabet characters, we get:
  ```
  "thequickbrownfoxjumpsoverthelazydog"
  ```
- We then create a `Set` containing all the unique characters:
  ```
  Set { 't', 'h', 'e', 'q', 'u', 'i', 'c', 'k', 'b', 'r', 'o', 'w', 'n', 'f', 'x', 'j', 'm', 'p', 's', 'v', 'l', 'a', 'z', 'y', 'd', 'g' }
  ```
- Since the set contains 26 unique characters, the function returns `true`, indicating that the string is a pangram.

#### Example 2:
```typescript
console.log(isPangram("Hello, World!")); // false
```

- After normalizing the string:
  ```
  "helloworld"
  ```
- The set contains:
  ```
  Set { 'h', 'e', 'l', 'o', 'w', 'r', 'd' }
  ```
- This set contains only 7 unique characters, so the function returns `false`, indicating that the string is not a pangram.

### Time and Space Complexity:
- **Time Complexity**: O(n), where `n` is the length of the input string. We go through the string once to normalize
it and once to populate the set.
- **Space Complexity**: O(1), since the size of the set will not exceed 26 (the number of English alphabet letters),
and it takes constant space to store the set.

### Final Thoughts:

The function works by:
1. Normalizing the string (making it lowercase and removing non-alphabet characters).
2. Creating a `Set` to store unique characters.
3. Checking if the set contains all 26 letters.

This approach is simple and efficient for checking if a string is a pangram in TypeScript!
*/
function isPangram(str) {
    var normalize = str.toLowerCase().replace(/[^a-z]/g, "");
    var uniqueChars = new Set(normalize);
    return uniqueChars.size === 26;
}
console.log(isPangram("The quic brown fox jumps over the lazy dog"));
