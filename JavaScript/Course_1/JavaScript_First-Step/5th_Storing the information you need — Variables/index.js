
myName = "ABCD";

console.log(myName);
var myName;

const myNameFn = () => {
    console.log("Hello World");
}
myNameFn();



// Note :

/* const Variable */

const object = {
    rollNo : 12345,
}
console.log("object :", object);
/*

You can update, add, or remove properties of an object declared using const, 
because even though the content of the object has changed, 
the constant is still pointing to the same object:
We will get the updated result.
*/

object.rollNo = 16789;
console.log("object :", object);