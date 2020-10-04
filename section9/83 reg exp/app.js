let re;

re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

// console.log(re);
// console.log(re.source);

// // exec - Return result in a array if there is a match or null
// const result = re.exec('hello  world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// // test() - Returns true or false
// const result = re.test('Hello'); // returns false if case does not match
// console.log(result);

// match() - Return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// // search() - Return index of the first match or -1
// const str = 'Hello there';
// const result = str.search(re);
// console.log(result);

// // replace() - return new string with some or all matches of a pattern replace
// const str = 'Hello there';
// const newstr = str.replace(re, 'Hi');
// console.log(newstr);
