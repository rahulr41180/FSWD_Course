
// Arithmetic Operation :

/*
Certainly! Let's go through all arithmetic operations in JavaScript with examples to understand how they work, keeping in mind the order of operations (PEMDAS/BIDMAS).

### 1. **Addition (`+`)**
The `+` operator adds two numbers.

Example:
*/

console.log(1 + 2); // 3
console.log(5 + 3 + 2); // 10

/*
### 2. **Subtraction (`-`)**
The `-` operator subtracts the second operand from the first.

Example:
*/

console.log(5 - 3); // 2
console.log(10 - 4 - 2); // 4

/*
### 3. **Multiplication (`*`)**
The `*` operator multiplies two numbers.

Example:
*/

console.log(2 * 4); // 8
console.log(3 * 5 * 2); // 30

/*
### 4. **Division (`/`)**
The `/` operator divides the first operand by the second.

Example:
*/

console.log(10 / 2); // 5
console.log(20 / 4 / 2); // 2.5

/*
### 5. **Exponentiation (`**`)**
The `**` operator raises the first operand to the power of the second operand.

Example:
*/

console.log(2 ** 3); // 8 (2 raised to the power of 3)
console.log(3 ** 2); // 9 (3 squared)
console.log(5 ** 0); // 1 (any number raised to the power of 0 is 1)

/*
### 6. **Modulus (`%`)**
The `%` operator returns the remainder when dividing the first operand by the second.

Example:
*/

console.log(10 % 3); // 1 (10 divided by 3 gives remainder 1)
console.log(20 % 4); // 0 (20 divided by 4 gives no remainder)

/*
### 7. **Unary Plus (`+`)**
The unary plus operator tries to convert the operand into a number. It’s often used to convert strings to numbers.

Example:
*/

console.log(+ '5'); // 5 (string '5' is converted to number 5)
console.log(+ 'Hello'); // NaN (cannot convert non-numeric string)

/*
### 8. **Unary Minus (`-`)**
The unary minus operator negates the value of the operand, i.e., it changes the sign.

Example:
*/

console.log(-5); // -5
console.log(-'3'); // -3 (string '3' is converted to number)
console.log(-'Hello'); // NaN (cannot negate a non-numeric string)

/*
### 9. **Order of Operations (PEMDAS/BIDMAS)**
The order of operations is essential for proper evaluation. JavaScript follows the standard order of operations, which is **Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right)**.

#### Example 1: Multiplication and Addition
*/

console.log(1 + 2 * 4); // 9 (2 * 4 = 8, then 1 + 8 = 9)

/*
#### Example 2: Exponentiation and Multiplication
*/

console.log(1 * 2 ** 4); // 16 (2 ** 4 = 16, then 1 * 16 = 16)

/*
#### Example 3: Division and Subtraction
*/

console.log(10 - 2 / 2); // 9 (2 / 2 = 1, then 10 - 1 = 9)

/*
#### Example 4: Parentheses Changing Order of Operations
*/


console.log((1 + 2) * 4); // 12 ((1 + 2) = 3, then 3 * 4 = 12)

/*
#### Example 5: Complex Expression
*/

console.log(2 + 3 * 2 ** 2 / (5 - 1)); // 4.5 (2 + (3 * 4 / 4) = 4.5)

/*
### 10. **Increment (`++`)**
The `++` operator increases the value of a variable by 1.

- **Postfix (value is used first, then incremented)**:
*/

let a1: number = 5;
console.log(a1++); // 5 (a is used first, then incremented)
console.log(a1);   // 6 (a is now incremented)

/*
- **Prefix (value is incremented first, then used)**:
*/

let b1: number = 5;
console.log(++b1); // 6 (b is incremented first, then used)

/*
### 11. **Decrement (`--`)**
The `--` operator decreases the value of a variable by 1.

- **Postfix (value is used first, then decremented)**:
*/

let c1: number = 5;
console.log(c1--); // 5 (c is used first, then decremented)
console.log(c1);   // 4 (c is now decremented)

/*
- **Prefix (value is decremented first, then used)**:
*/

let d1: number = 5;
console.log(--d1); // 4 (d is decremented first, then used)

/*
### 12. **Compound Assignment Operators**
These operators combine an arithmetic operation with assignment.

- **Addition Assignment (`+=`)**:
*/

let x1: number = 5;
x1 += 3; // x = x + 3
console.log(x1); // 8

/*
- **Subtraction Assignment (`-=`)**:
*/

let y1: number = 10;
y1 -= 4; // y = y - 4
console.log(y1); // 6

/*
- **Multiplication Assignment (`*=`)**:
*/

let z1: number = 3;
z1 *= 4; // z = z * 4
console.log(z1); // 12

/*
- **Division Assignment (`/=`)**:
*/

let a2: number = 12;
a2 /= 3; // a = a / 3
console.log(a2); // 4

/*
- **Modulus Assignment (`%=`)**:
*/

let b2: number = 10;
b2 %= 3; // b = b % 3
console.log(b2); // 1

/*
### Summary of JavaScript Arithmetic Operations:

- **`+`**: Addition
- **`-`**: Subtraction, Negation (unary minus)
- **`*`**: Multiplication
- **`/`**: Division
- **`%`**: Modulus (remainder)
- **`**`**: Exponentiation
- **`++`**: Increment
- **`--`**: Decrement
- **Compound assignment operators**: `+=`, `-=`, `*=`, `/=`, `%=`.

Make sure to always follow the correct order of operations for accurate results in complex expressions!
*/