// Init github
const github = new GitHub();

// Search input
const searchUser = document.getElementById('searchUser');

// searchUser input event listener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;
  if (userText != '') {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        //Show Alert
        console.log('usernotfound');
      } else {
        //Show profile
        console.log(data.profile);
      }
    });
  } else {
    // Clear profile
  }
});
