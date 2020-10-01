// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hello'), 1000);
//   });

//   const error = false;
//   if (!error) {
//     const res = await promise;
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// async await with fetch

async function getUsers() {
  // await the response of fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // only proceed once the promise has been resolved
  const data = await response.json();
  // only proceed once the second promise has been resolved
  return data;
}

getUsers().then((users) => console.log(users));
