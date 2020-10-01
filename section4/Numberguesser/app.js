// Game values
const min = 1;
const max = 10;
const winningNum = getWinningNum(min, max);
let guessesLeft = 3;

// UI elements
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

// Assign ui min and max value
minNum.textContent = min;
maxNum.textContent = max;

// Play again Event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Add event listener
guessBtn.addEventListener("click", function () {
  const guess = parseInt(guessInput.value);

  // validate input
  if (isNaN(guess) || guess < min || guess > max) {
    console.log("no pass the input check");
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, you have won`);
  } else {
    // Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(false, `Game over u lost the correct number was ${winningNum}`);
    } else {
      // Game continues - answer wrong
      guessInput.style.borderColor = "red";
      setMessage(
        `${guess} is not correct, you have ${guessesLeft} guesses left`,
        "red"
      );
      // clear the input
      guessInput.value = "";
    }
  }
});

// Gameover
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // Disable input
  guessInput.disabled = true;
  // Set text color
  message.style.color = color;
  // Change color to preferred color
  guessInput.style.borderColor = color;
  // set msg
  setMessage(msg);

  // Play again
  guessBtn.value = "Play again?";
  guessBtn.className += "play-again";
}

// Get the winning number randomly
function getWinningNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
