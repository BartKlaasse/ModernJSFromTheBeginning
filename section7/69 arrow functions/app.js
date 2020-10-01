// const sayHello = function () {
//   console.log('hello');
// };

// Multi line function
// const sayHello = () => {
//   console.log('hello');
// };

// //One line function does not need braces
// const sayHello = () => console.log('hello');
// //One line function return does not need braces
// const sayHello = () => 'Hello';
// //Same as above
// const sayHello = function () {
//   return 'Hello';
// };
// To return a object literal you have to wrap it in parentheses
//
// return a value with a parameter
// const sayHello = (name) => console.log(`hello ${name}`);
// Multiple parameters need parentheses
// const sayHello = (firstname, lastname) => console.log(`Hello ${firstname} ${lastname}`);

// sayHello('a', 'b');

const users = ['Aaa', 'Bb', 'C'];
//Full
// const nameLengths = users.map(function (name) {
//   return name.length;
// });
//Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });
//Shortest
const nameLengths = users.map((name) => name.length);
console.log(nameLengths);
