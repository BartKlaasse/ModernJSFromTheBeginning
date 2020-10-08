// // Create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// // console.log(typeof sym2);
// console.log(Symbol() === Symbol());
// console.log(`Hello ${String(sym1)}`);

//  Unique object keys
const key1 = Symbol();
const key2 = Symbol('key2');

const myObj = {};
myObj[key1] = ['prop1'];
myObj[key2] = ['prop2'];
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';
// console.log(myObj[key1]);
// console.log(myObj[key2]);

// Symbols are not enumerable in for...in loops
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify()
console.log(JSON.stringify({ key: 'prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));
