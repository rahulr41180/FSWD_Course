
/* 

If you don't know the index of an item, you can use the indexOf() method. 
The indexOf() method takes an item as an argument and will either return the item's 
index or -1 if the item is not in the array:
*/

const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
let index = birds.indexOf("Owl");

console.log('index:', index); // 2