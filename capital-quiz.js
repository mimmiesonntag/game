const questionElement = document.querySelector('.question-text');
const answerOptionsElement = document.querySelector('.answer-options');
const resultElement = document.getElementById('result');
const nextButton = document.querySelector('button');

let currentQuestionIndex = 0;
let currentScore = 0;

function startQuiz() {
    nextQuestion(); // Start with the first question
}

function nextQuestion() {
    if (currentQuestionIndex >= countries.length) {
        // Quiz completed
        questionElement.textContent = 'Quiz completed! Your score: ' + currentScore;
        answerOptionsElement.innerHTML = '';
        resultElement.textContent = '';
        nextButton.disabled = true;
        return;
    }

    const country = countries[currentQuestionIndex];
    questionElement.textContent = `What is the capital of ${country.name}?`;
    resultElement.textContent = '';

    answerOptionsElement.innerHTML = ''; // Clear previous options

    for (const option of country.capitals) {
        const answerOption = document.createElement('div');
        answerOption.className = 'answer-option';
        answerOption.textContent = option;
        answerOption.addEventListener('click', () => checkAnswer(option, country.correctCapital));
        answerOptionsElement.appendChild(answerOption);
    }

    currentQuestionIndex++;
    nextButton.disabled = true; // Disable next button until an option is selected
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        currentScore++;
    } else {
        resultElement.textContent = 'Incorrect. The correct answer is ' + correctAnswer;
    }

    nextButton.disabled = false; // Enable next button after an option is selected
}

startQuiz(); // Start the quiz when the page loads
