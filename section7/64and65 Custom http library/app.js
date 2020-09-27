const http = new easyHTTP();

//Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (error, callbackresponse) {
  if (error) {
    console.log(error);
  } else {
    console.log(callbackresponse);
  }
});
