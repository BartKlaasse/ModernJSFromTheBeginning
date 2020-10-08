// Sets - store unique values of any type
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({ name: 'john' });
set1.add(true);

// // Other way of adding values to a set
// const set2 = new Set([1, true, 'string']);
// console.log(set1);
// console.log(set2);

// // get size of set
// console.log(set1.size);

// // Check for values
// console.log(set1.has(100)); // returns true
// console.log(set1.has(50 + 50)); // returns true
// console.log(set1.has({ name: 'John' })); // returns false because it is not a primitive type

// // Delete from set
// set1.delete(100);
// console.log(set1);

// Iterating through seets
// For...off
for (let item of set1) {
  console.log(item);
}

// foreach loop
set1.forEach((value) => {
  console.log(value);
});

// Convert sets into arrays
const setArr = Array.from(set1);
console.log(setArr);
