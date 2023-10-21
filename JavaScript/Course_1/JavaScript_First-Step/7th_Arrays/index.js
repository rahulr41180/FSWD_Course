
// What is an array? 

/*
Arrays are generally described as "list-like objects".
*/

// Finding the index of items in an array.

/*
If you don't know the index of an item, you can use the indexOf() method. 
The indexOf() method takes an item as an argument 

and will either return the item's index or -1 if the item is not in the array:
*/

const array1 = ["Parrot", "Bread", "Milk"];
console.log(array1.indexOf("Parrot"));

const array2 = array1.indexOf("Bread");
console.log(array2);


// Adding items

/* 
The new length of the array is returned when the method call completes. 
If you wanted to store the new array length in a variable after pushing the new element to array, you could do something like this:
*/

const array4 = ["Manchester", "Liverpool"];
const newLength = array4.push("Bristol");

console.log('array4:', array4);
console.log('newLength:', newLength);

/*
To add an item to the start of the array, use unshift():
This function(); will also be returned new length of array.
*/

const array5 = ["Manchester", "Liverpool"];

const newLength2 = array5.unshift("Edinburgh");

console.log('array5:', array5);
console.log('newLength2:', newLength2);