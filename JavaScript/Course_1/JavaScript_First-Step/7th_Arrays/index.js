
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