const http = new EasyHTTP();

//Get users
// const users = http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//User data
const data = {
  name: 'Harrold',
  username: 'harry',
  email: 'harry@harry.nl',
};

// // Create a post
// const users = http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// update a user
// const users = http
//   .put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Delete a user
const users = http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
