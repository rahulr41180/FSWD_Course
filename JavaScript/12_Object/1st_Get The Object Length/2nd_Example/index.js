
const obj = { name: "rahul", age: 21 };

console.log(Object.keys(obj).length);
console.log(Object.keys(obj));
console.log(Object.entries(obj).length);
console.log(Object.entries(obj));

console.log(typeof new Array(5));
console.log(new Object({ ...obj }));