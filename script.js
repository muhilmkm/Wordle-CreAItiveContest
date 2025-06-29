// List of 5-letter words
const wordList = [
  "plant", "brick", "laser", "candy", "table",
  "stone", "drama", "track", "grain", "chess",
  "light", "earth", "vapor", "water", "bloom"
];

// Pick a random word
const secretWord = wordList[Math.floor(Math.random() * wordList.length)];
let attempts = 0;

function submitGuess() {
  const input = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const guess = input.value.toLowerCase();

  if (guess.length !== 5) {
    message.textContent = "Please enter a 5-letter word.";
    return;
  }

  if (!wordList.includes(guess)) {
    message.textContent = "Not in word list!";
    return;
  }

  if (attempts >= 6) {
    message.textContent = "❌ No more attempts. The word was: " + secretWord.toUpperCase();
    return;
  }

  renderGuess(guess);
  input.value = "";
  attempts++;

  if (guess === secretWord) {
    message.textContent = "🎉 Correct! You guessed it in " + attempts + " tries!";
    input.disabled = true;
  } else if (attempts === 6) {
    message.textContent = "❌ Game Over! The word was: " + secretWord.toUpperCase();
    input.disabled = true;
  }
}

function renderGuess(guess) {
  const board = document.getElementById("board");

  for (let i = 0; i < 5; i++) {
    const box = document.createElement("div");
    box.classList.add("box");

    const letter = guess[i];
    box.textContent = letter;

    if (letter === secretWord[i]) {
      box.classList.add("green");
    } else if (secretWord.includes(letter)) {
      box.classList.add("yellow");
    } else {
      box.classList.add("gray");
    }

    board.appendChild(box);
  }
}
