// Event listener
document.querySelector(".get-jokes").addEventListener("click", getJokes);
function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  console.log(number);
  const xhr = new XMLHttpRequest();
  // Omdat de api niet bereikbaar is heb ik een andere api gebruikt. deze api heeft echter geen mogelijkheid om meerdere jokes op te vragen
  xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = "";
      if (response.type === "success") {
        console.log("success");
        // here i would loop through the result set if the proper api would have worked
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        console.log("no success");
        output += "<li>something went wrong</li>";
      }
    }
  };
  xhr.send();
  e.preventDefault();
}
// Did not finish because api wasnt working... understood the message though
