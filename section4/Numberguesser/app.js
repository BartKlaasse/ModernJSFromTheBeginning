// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign ui min and max value
minNum.textContent = min;
maxNum.textContent = max;

//Add event listener
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  // validate input
  if (isNaN(guess) || guess < min || guess > max) {
    console.log('no pass the input check');
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    //Disable input
    guessInput.disabled = true;
    // Change color to green
    guessInput.style.borderColor = 'green';
    // set msg
    setMessage(`${winningNum} is Correct`, 'green');
  } else {
    // Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game over - lost
      //Disable input
      guessInput.disabled = true;
      // Change color to green
      guessInput.style.borderColor = 'red';
      // set msg
      setMessage(`Game over u lost the correct number was ${winningNum}`, 'red');
    } else {
      // Game continues - answer wrong
      guessInput.style.borderColor = 'red';
      setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left`, 'red');
      //clear the input
      guessInput.value = '';
    }
  }
});

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
