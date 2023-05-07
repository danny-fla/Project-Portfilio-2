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
let availableQuestions = quizQuestions;
let questionSelector = [];
let userAnswers = [];
let questionsAnswered = 0;

const maxQuestions = 3;
let questionsAsked = [];

let currentQuestion = {};
let questionCounter = document.querySelector('#question-counter');
let counter = 1;
let userScore = document.querySelector('#user-score')

//table

let leaderboardTable = document.querySelector('#leaderboard-table tbody');


// let gameProgress;
let username = document.querySelector('#username');

const secondsDisplay = document.querySelector('#seconds');
let time;
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
let gameOverBox = document.querySelector('.quiz-complete');

function showQuizHighScores() {
    homeBox.classList.add('hide');
    highScoresBox.classList.remove('hide');
    highScoresTable.textContent = highScores.map(highScores => {
        return `<table>
                    <tr>
                    <th>Username</th>
                    <th>Score</th>
                    </tr>
                    <tr>
                    <td>${highScores.name}</td>
                    <td>${highScores.score}</td>
                    </tr>
                    </table>`;
    })
    .join('');
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

function gameOver(){
    username.value = '';
    restartGame();
}

function closeGameOverBox(){
    homeBox.classList.remove('hide');
    gameOverBox.classList.add('hide');
}

function beginQuiz() {
    homeBox.classList.add('hide');
    quizBox.classList.remove('hide');
    console.log('beginquiz');
    correctUserAnswers = 0;
    availableQuestions = [...quizQuestions];
    secondsDisplay.textContent;
    resetScore();
    generateNewQuestion();
    resetTimer();
    startTimer();
}

function quizComplete(){
    closeGameOverBox();
    resetOptionBtns();
    resetCounter();
    secondsDisplay.textContent = 10;
    clearInterval(timerInterval);
    resetScore();
    console.log('quiz complete')  
}

function quizCounter(){
    counter++;
    questionCounter.innerText = counter;
    resetTimer();
    
    
    if (counter > 4) {
            quizBox.classList.add('hide');
            gameOverBox.classList.remove('hide');
            console.log('gameover');
            return;
        }
}

function resetCounter() {
    counter = 1;
    questionCounter.innerText = counter;
    console.log('counterreset')
}

function resetScore(){
    score = 0;
    userScore.textContent = score;
    console.log('userscorereset');
}

// attaches event listener to each option button and envokes check answer function when clicked

optionBtns.forEach(function (button) {
    button.addEventListener('click', calculateAnswer);
});

function generateNewQuestion() {
    
    if(quizQuestions.length - availableQuestions.length <= 3){
        
    let shuffleQuestions = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = shuffleQuestions;
    let question = availableQuestions[currentQuestion];
    quizImage.src = question.imageSrc;
    availableQuestions.splice(currentQuestion, 1);
    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].textContent = '';
    }

    for (let i = 0; i < question.options.length; i++) {
        optionBtns[i].textContent = question.options[i].text;
        optionBtns[i].dataset.correct = question.options[i].isCorrect;
    }
    }


}

function calculateAnswer(event) {
    let selectedOption = event.target;
    let isCorrect = selectedOption.dataset.correct === "true";

    if (isCorrect) {
        selectedOption.classList.add("correct");
        userScore.textContent = ++score;
    } else {
        selectedOption.classList.add("incorrect");
    }

    optionBtns.forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });


}

function nextQuestion() {
    secondsDisplay.textContent = 10;
    resetTimer();
    startTimer();
    generateNewQuestion();
    resetOptionBtns();
    console.log('next btn')
    quizCounter();

}


function resetOptionBtns() {
    optionBtns.forEach(button => {
        button.classList.remove('correct', 'incorrect');
        button.classList.add('hover');
        button.removeAttribute('disabled');
    });
}

function restartGame() {
    beginQuiz();
    resetOptionBtns();
    startTimer();
    resetCounter();
    secondsDisplay.textContent = 10;
    clearInterval(timerInterval);
    console.log('restartquiz')  
}

function disableAnswerBtn() {
    optionBtns.forEach((btn) => {
        btn.disabled = true;
    });
}

function startTimer() {
    timeRemaining = 10;  
    timerInterval = setInterval(function () {
        countdown();
        secondsDisplay.textContent = timeRemaining;
    }, 1000);
    console.log('start timer')
}

function countdown() {
    if (timeRemaining === 0) {
        disableAnswerBtn();
        clearInterval(timerInterval);
    } else {
        timeRemaining--;
    }

    console.log('countdown')
}

function resetTimer() {
    clearInterval(timerInterval);
}





