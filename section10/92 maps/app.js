// // Maps = Key Value pairs - can use any type as a key or value

const map1 = new Map();

// Set keys
const key1 = 'Some string',
  key2 = {},
  key3 = function () {};

// Set map  values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// // Get values by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// // Count Key value pairs
// console.log(map1.size);

// // Iterating through maps
// // Loop using for...off to get keys and values
// for (let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// // Iterate keys only
// for (let key of map1) {
//   console.log(key);
// }

// // Iterate values only
// for (let value of map1.values()) {
//   console.log(value);
// }

// // Loop with foreach
// map1.forEach(function (value, key) {
//   console.log(`${key} = ${value}`);
// });

// Convert sets to arrays
// Create an array from the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array from the  values
const valArr = Array.from(map1.values());
console.log(valArr);

// Create an array from the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
