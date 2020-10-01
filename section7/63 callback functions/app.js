const posts = [
  { title: "post one", body: "body 1" },
  { title: "post two", body: "body 2" },
];

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }
// function getPosts() {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'post 3', body: 'body3' });
// getPosts();

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "post 3", body: "body3" }, getPosts);
