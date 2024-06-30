// A simple program to display a quiz

// An array to store the questions and answers
const quizQuestions = [
    {
        question: "Who was the best Beatle?",
        options: ["Paul", "Paul", "Paul", "Paul"],
        answer: "Paul"
    },
    {
        question: "Where is Waldo?",
        options: ["At Wal-Mart", "In the restroom", "At home", "Who cares?"],
        answer: "Who cares?"
    },
    {
        question: "How many fingers am I holding up?",
        options: ["one", "two", "three", "seventeen"],
        answer: "seventeen"
    }
];

// Function to display quiz questions
function displayQuiz() {
    const quizContainer = document.getElementById('quiz-container');

    quizContainer.innerHTML = '';

    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        const optionsList = document.createElement('ul');
        optionsList.className = 'options';
        q.options.forEach(option => {
            const optionItem = document.createElement('li');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            optionItem.appendChild(optionInput);

            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;
            optionItem.appendChild(optionLabel);

            optionsList.appendChild(optionItem);
        });

        questionDiv.appendChild(optionsList);
        quizContainer.appendChild(questionDiv);
    });
}

// Function to check user's answers and provide feedback
function checkAnswers() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    
    if (score >= 2) {
        alert(`You scored ${score} out of ${quizQuestions.length}. Great job!`);
    } else {
        alert(`You scored ${score} out of ${quizQuestions.length}. Keep trying!`);
    }

    // Reset the readio buttons after showing result alert
    resetQuiz()
}

function resetQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const radioButtons = quizContainer.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
}

// Add event listener for the submit button
document.getElementById('submit').addEventListener('click', checkAnswers);

// Display quiz questions on page load
displayQuiz();