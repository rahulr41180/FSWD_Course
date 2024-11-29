
// Literal Type :

/* 
Literal Type is a type.
If we creating a variable with const and we didn't explicitly defined the type of variable in that case whatever value we have assigned or initialized to that variable that value will be a type of that variable.

In our case as we have not defined any type of const str variable then
the type of const str will be 'Hello, World!' but if we log the typeof str we will get string
*/
const str = "Hello, World!";
console.log('str:', typeof str);

/* 
But If we defined a variable with let and var and we didn't explicitly defined the type of variable in that case whatever value we have assigned or initialized to that variable based on value type the type assigned to
that let variable

In our case as we have not defined any type of let str1 variable then
the type of let str1 will be 'string'
*/

let str1 = "Hello, World!";
console.log('str1:', typeof str1);
// -------------------------------------------------------