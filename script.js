// Get the necessary elements from the HTML
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const resultMessage = document.getElementById("result-message");
const gameContainer = document.querySelector(".game-container");

// Define the possible letters (A to Z)
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Pick a random target letter from the list
let targetLetter = letters[Math.floor(Math.random() * letters.length)];
console.log("The target letter is:", targetLetter); // for testing

// When the user clicks the "Guess" button
guessButton.addEventListener("click", function () {
  // Get the guessed letter and convert to uppercase
  const userGuess = guessInput.value.toUpperCase();

  // Check if the input is empty
  if (userGuess === "") {
    resultMessage.textContent = "Please enter a letter.";
    resultMessage.style.color = "#7f8c8d";
    resultMessage.style.background = "none";
    return;
  }

  // Check if the input is a valid letter
  if (!letters.includes(userGuess)) {
    resultMessage.textContent = "Please enter a valid English letter (A-Z).";
    resultMessage.style.color = "#e67e22";
    resultMessage.style.background = "#fef9e7";
    return;
  }

  // Check if the guess is correct
  if (userGuess === targetLetter) {
    resultMessage.textContent = "🎉 Correct! You guessed the letter!";
    resultMessage.style.color = "#27ae60";
    resultMessage.style.background = "#e8f8f5";
    gameContainer.classList.add("celebrate");
    
    setTimeout(() => {
      gameContainer.classList.remove("celebrate");
    }, 500);

    // Pick a new random letter for the next round
    setTimeout(() => {
      targetLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log("New target letter is:", targetLetter);
    }, 1000);
  } else {
    resultMessage.textContent = "❌ Wrong! Try again.";
    resultMessage.style.color = "#e74c3c";
    resultMessage.style.background = "#fdedec";
  }

  // Clear the input and focus it
  guessInput.value = "";
  guessInput.focus();
});
