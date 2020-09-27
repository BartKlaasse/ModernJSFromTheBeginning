const http = new easyHTTP();

// //Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, callbackresponse) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(callbackresponse);
//   }
// });

// //Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, callbackresponse) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(callbackresponse);
//   }
// });

//Create data to post
const data = {
  title: 'custom post',
  body: 'this is a custom post blablabla',
};

// // Post Data to api
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, callbackresponse) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(callbackresponse);
//   }
// });

// // Put data to api (update)
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (error, callbackresponse) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(callbackresponse);
//   }
// });

//delete single post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, callbackresponse) {
  if (error) {
    console.log(error);
  } else {
    console.log(callbackresponse);
  }
});
