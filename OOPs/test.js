
const obj = Object.create(Object.prototype);

console.log(obj.prototype)

const arr = function() {
    name = "rahul"
}

console.log(arr.prototype);

const obj1 = {};

Object.setPrototypeOf(obj1, arr);

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(obj1))));

console.log(obj1.__proto__.__proto__);