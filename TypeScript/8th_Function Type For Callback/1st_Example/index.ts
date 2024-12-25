
// Function Type For Callback

/* 
Here I have defined that addNumbers type will be a function and that function will take two perameter n1: number and n2: number and function should return a number type value.
*/
let addNumbers: (n1: number, n2: number) => number;

/* 
We can assign these two sum function to addNumbers because sum function take two permeter those type is number and sum function returing the number and as we have defined the type of
addNumbers is function which will return number
*/

function sum(num1: number, num2: number) {
    return num1 + num2;
}

function add(num1: number, num2: number) {
    console.log(num1 + num2);
}