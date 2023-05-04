let quizQuestions = [{
        imageSrc: "assets/images/sagrada-familia.webp",
        options: [{
                text: 'Barcelona1',
                isCorrect: true
            },
            {
                text: 'Madrid',
                isCorrect: false
            },
            {
                text: 'Dublin',
                isCorrect: false
            },
            {
                text: 'London',
                isCorrect: false
            }
        ]
    },
    {
        imageSrc: "assets/images/dublin-castle.webp",
        options: [{
                text: 'Barcelona2',
                isCorrect: false
            },
            {
                text: 'Madrid',
                isCorrect: false
            },
            {
                text: 'Dublin',
                isCorrect: true
            },
            {
                text: 'London',
                isCorrect: false
            }
        ]
    },
    {
        imageSrc: "assets/images/london-bridge.jpg",
        options: [{
                text: 'Barcelona3',
                isCorrect: false
            },
            {
                text: 'Madrid',
                isCorrect: false
            },
            {
                text: 'Dublin',
                isCorrect: false
            },
            {
                text: 'London',
                isCorrect: true
            }
        ]
    },
    {
        imageSrc: "assets/images/madrid.jpeg",
        options: [{
                text: 'Barcelona4',
                isCorrect: false
            },
            {
                text: 'Madrid',
                isCorrect: true
            },
            {
                text: 'Dublin',
                isCorrect: false
            },
            {
                text: 'London',
                isCorrect: false
            }
        ]
    }
];


// Global variables
let score = 0;

// variables
let correctUserAnswers = 0;
let availableQuestions = [];
let questionSelector = [];
let userAnswers = [];
let questionsAnswered = 0;
const MAX_QUESTIONS = 3;
let currentQuestion = 0;
let questionCounter = document.querySelector('#question-counter');
let counter = 0;
let userScore = document.querySelector('#user-score')
let gameProgress

const secondsDisplay = document.querySelector('#seconds');
let time = 5;
let timerInterval;

let optionBtns = document.querySelectorAll('.option-btn')
let quizImage = document.querySelector('#landmark');
// buttons

let btns = document.querySelectorAll('.button')

// Containers 
let homeBox = document.querySelector('.home-container');
let quizBox = document.querySelector('.quiz-container');
let rulesBox = document.querySelector('.rules-container');
let highScoresBox = document.querySelector('.high-scores');
let gameOver = document.querySelector('.quiz-complete');

function showQuizHighScores() {
    homeBox.classList.add('hide');
    highScoresBox.remove('hide');
    console.log('openhighscores');
}

function closeQuizHighScores() {
    homeBox.classList.remove('hide');
    highScoresBox.classList.add('hide');
    console.log('closehighscores');
}

function showQuizRules() {
    homeBox.classList.add('hide');
    rulesBox.classList.remove('hide');
    console.log('openrules');
}

function closeQuizRules() {
    homeBox.classList.remove('hide');
    rulesBox.classList.add('hide');
    console.log('closerules');
}

function beginQuiz() {
    homeBox.classList.add('hide');
    quizBox.classList.remove('hide');
    console.log('beginquiz');

    correctUserAnswers = 0;
    availableQuestions = [...quizQuestions];
    secondsDisplay.textContent = 15;
    userScore.textContent = 0;
    generateNewQuestion();
    // resetTimer();
    // startTimer();
}

// attaches event listener to each option button and envokes check answer function when clicked

optionBtns.forEach(function (button) {
    button.addEventListener('click', checkAnswer);
});

function generateNewQuestion() {
    gameProgress++;

    if (gameProgress > 4) {
        quizBox.classList.add('hide');
        gameOver.classList.remove('hide');
        console.log('gameover');
        return;
    }

//     availableQuestions.splice(currentQuestion, 1);

//     [currentQuestion] = availableQuestions.sort(() => Math.random() - 0.5);
//     const {imageSrc, options} = availableQuestions[currentQuestion];
    
//     quizImage.src = imageSrc;
    
//    optionBtns.forEach((btn,i) => {
//     btn.textContent = options[i].text;
//     btn.dataset.correct = options[i].isCorrect;
//    });
// }
    let shuffleQuestions = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = shuffleQuestions;
    let question = availableQuestions[currentQuestion];

    quizImage.src = question.imageSrc;

    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].textContent = '';
    }

    for (let i = 0; i < question.options.length; i++) {
        optionBtns[i].textContent = question.options[i].text;
        optionBtns[i].dataset.correct = question.options[i].isCorrect;
    }
}