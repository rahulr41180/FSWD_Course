
// If you know the index of an item, you can remove it from the array using splice():

const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool"); // 1
if (index !== -1) {
  cities.splice(index, 1);
}
console.log('cities:', cities)
// console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]



// In this call to splice(), the first argument says where to start removing items, 
// and the second argument says how many items should be removed. 
// So you can remove more than one item:

const cities1 = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index1 = cities1.indexOf("Liverpool"); // 1
if (index1 !== -1) {
  cities1.splice(index1, 2);
}

console.log('cities1:', cities1)
// console.log(cities1); // [ "Manchester", "Carlisle" ]