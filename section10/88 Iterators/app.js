// // Iterator example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true };
//     },
//   };
// }

// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // Init iterator and pass in names array
// const names = nameIterator(namesArr);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// // Generator Example
// // The asterisks behind function tells the engine that this is a generator
// function* sayNames() {
//   yield 'Jack';
//   yield 'John';
//   yield 'Jill';
// }

// const name = sayNames();
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

// ID Creator
function* createIds() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
