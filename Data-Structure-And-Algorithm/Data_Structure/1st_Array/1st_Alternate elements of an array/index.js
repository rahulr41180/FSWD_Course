
// Alternate elements of an array

/*
Given an array arr[], the task is to print every alternate element of the array starting from the first element.

Examples:

Input: arr[] = [10, 20, 30, 40, 50]
Output: 10 30 50
Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).

Input: arr[] = [-5, 1, 4, 2, 12]
Output: -5 4 12
*/

let arr = [10, 20, 30, 40, 50, 60, 70];

let index = 0;
let result = [];

while(index <= arr.length) {
    result.push(arr[index]);
    index += 2;
}

console.log(result);

/* ----------------------------------------------------------- */

function recursiveApproach(arr, index, result) {

    if(index > arr.length) {
        return result;
    }
    result.push(arr[index]);

    return recursiveApproach(arr, index + 2, result);
}

console.log("recursive :", recursiveApproach(arr, 0, []))

/* ----------------------------------------------------------- */

let arr2 = [10, 20, 30, 40, 50, 60, 70, 80];

let res = arr2.filter((_, index) => index%2 === 0)
console.log('res:', res)

// -------------------------------------------------------------

let arr3 = [10, 20, 30, 40, 50, 60, 70, 80];
