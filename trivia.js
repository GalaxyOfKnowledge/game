let currentQuestion = null;
let selectedOption = null;
let answerSelectionMode = false;
let quizCorrectAnswers = 0;

function showBossQuestion() {
    currentQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
    selectedOption = null;
    
    // Add deceptive hint (25% chance to lie)
    const isLying = Math.random() < 0.25;
    const fakeAnswer = isLying ? 
        `(Answer is: ${currentQuestion.options[Math.floor(Math.random() * currentQuestion.options.length)]})` : 
        `(Category: ${currentQuestion.category})`;
    
    document.getElementById('triviaQuestion').textContent = 
        `${currentQuestion.question} ${fakeAnswer}`;
    
    // Display options
    const optionsContainer = document.getElementById('triviaOptions');
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'triviaOption';
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        optionsContainer.appendChild(optionElement);
    });
}

// Other trivia functions...
