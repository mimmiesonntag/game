// Hangman game logic

const words = ['hangman', 'programming', 'javascript', 'openai', 'developer'];
let currentWord = '';
let guessedLetters = [];
let incorrectGuesses = 0;

function initializeGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    incorrectGuesses = 0;
    updateWordDisplay();
    updateHangmanDisplay();
    document.getElementById('result').textContent = '';
}

function updateWordDisplay() {
    const wordDisplay = document.getElementById('wordDisplay');
    wordDisplay.textContent = currentWord
        .split('')
        .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
        .join(' ');
}

function updateHangmanDisplay() {
    const hangmanParts = document.querySelectorAll('.hangman-part');

    for (let i = 0; i < hangmanParts.length; i++) {
        if (i < incorrectGuesses) {
            hangmanParts[i].classList.remove('hidden');
        } else {
            hangmanParts[i].classList.add('hidden');
        }
    }
}

function guessLetter() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toLowerCase();

    if (guessedLetters.includes(guess)) {
        document.getElementById('result').textContent = 'You already guessed that letter.';
        return;
    }

    guessedLetters.push(guess);

    if (!currentWord.includes(guess)) {
        incorrectGuesses++;
    }

    updateWordDisplay();
    updateHangmanDisplay();

    if (guessedLetters.length === currentWord.length) {
        if (currentWord === guessedLetters.join('')) {
            document.getElementById('result').textContent = 'Congratulations! You won!';
        } else {
            document.getElementById('result').textContent = 'Sorry, you lost. The word was ' + currentWord;
        }
    }

    guessInput.value = '';
}

function resetGame() {
    initializeGame();
}

initializeGame();
