
/* 
Given an array of integers arr[], move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.
*/

let arr = [1,2,0,4,3,0,5,0];
// [1,2,0,4,3,0,5,0] i = 7
// [1,2,0,4,3,0,5,0] i = 6 previousIndex = 6
// [1,2,0,4,3,0,5,0] i = 5 swap previousIndex = 5
// [1,2,0,4,3,5,0,0] i = 4 previousIndex = 5, 4
// [1,2,0,4,3,5,0,0] i = 3 previousIndex = 5, 4, 3
// [1,2,0,4,3,5,0,0] i = 2 swap previousindex = 5, 4, 2
// [1,2,4,0,3,5,0,0] i = 2 tempIndex = 3 previousIndex = 5, 4, 2
// [1,2,4,3,0,5,0,0] i = 2 tempIndex = 4 previousIndex = 5, 3, 2
// [1,2,4,3,5,0,0,0] i = 1 tempIndex = 5 previousIndex = 4, 3, 2

let previousIndex = [];
for(let i = arr.length; i>=0; i--) {
    let previousIndexFollow = previousIndex.length;
    if(arr[i] === 0) {
        if(previousIndex.length) {

        }
    }
}