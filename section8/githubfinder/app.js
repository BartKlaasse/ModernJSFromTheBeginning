// Init github
const github = new GitHub();
//Init UI
const ui = new UI();

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
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        //Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
