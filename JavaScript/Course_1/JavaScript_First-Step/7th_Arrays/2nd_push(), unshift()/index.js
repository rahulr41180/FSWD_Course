
// Adding Item :

// Push() :

// The new length of the array is returned when the method call completes.
const cities = ["Manchester", "Liverpool"];
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3



// unshift() :

const cities1 = ["Manchester", "Liverpool"];
cities1.unshift("Edinburgh");
console.log(cities1); // [ "Edinburgh", "Manchester", "Liverpool" ]
let newLength1 = cities1.unshift("abcd");
console.log(cities1); // [ 'abcd', 'Edinburgh', 'Manchester', 'Liverpool' ]
console.log('newLength1:', newLength1) // 4