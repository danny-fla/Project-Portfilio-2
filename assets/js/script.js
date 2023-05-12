/**
 * Questions for quiz
 */

let quizQuestions = [ {
        imageSrc: "assets/images/sagrada-familia.webp",
        options: [{
                text: 'Barcelona',
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
                text: 'Glasgow',
                isCorrect: false
            },
            {
                text: 'Cardiff',
                isCorrect: false
            },
            {
                text: 'Dublin',
                isCorrect: true
            },
            {
                text: 'Manchester',
                isCorrect: false
            }
        ]
    },
    {
        imageSrc: "assets/images/london-bridge.jpg",
        options: [{
                text: 'Liverpool',
                isCorrect: false
            },
            {
                text: 'Belfast',
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
                text: 'Valenica',
                isCorrect: false
            },
            {
                text: 'Madrid',
                isCorrect: true
            },
            {
                text: 'Lisbon',
                isCorrect: false
            },
            {
                text: 'Porto',
                isCorrect: false
            }
        ]
     },
    {
        imageSrc: "assets/images/brazil.jpg",
        options: [{
                text: 'Sao Paulo',
                isCorrect: false
            },
            {
                text: 'Madrid',
                isCorrect: false
            },
            {
                text: 'Rio de Janeiro',
                isCorrect: true
            },
            {
                text: 'Buenos Aires',
                isCorrect: false
            }
        ]
    },
    {
        imageSrc: "assets/images/italy-small.jpg",
        options: [{
                text: 'Rome',
                isCorrect: true
            },
            {
                text: 'Florence',
                isCorrect: false
            },
            {
                text: 'Vienna',
                isCorrect: false
            },
            {
                text: 'Pompeii',
                isCorrect: false
            }
        ]
    },
    {
        imageSrc: "assets/images/france.jpg",
        options: [{
                text: 'Paris',
                isCorrect: true
            },
            {
                text: 'Toulouse',
                isCorrect: false
            },
            {
                text: 'Berlin',
                isCorrect: false
            },
            {
                text: 'Munich',
                isCorrect: false
            }
        ]
    },
];


// variables
let score = 0;
const HIGH_SCORE_COOKIE = "highScoreCookie";
let correctUserAnswers = 0;
let availableQuestions = quizQuestions;
let questionSelector = [];
let userAnswers = [];
let questionsAnswered = 0;
const maxQuestions = 3;
let questionsAsked = [];
const highScoresList = document.getElementById('high-score-list');
let highScores = getCookie(HIGH_SCORE_COOKIE);
let currentQuestion = {};
let questionCounter = document.querySelector('#question-counter');
let counter = 1;
let userScore = document.querySelector('#high-score-h1');
const secondsDisplay = document.querySelector('#seconds');
let time;
let timerInterval;
let optionBtns = document.querySelectorAll('.option-btn')
let quizImage = document.querySelector('#landmark');
let btns = document.querySelectorAll('.button')
const username = document.querySelector('#username');
const saveUserName = document.querySelector('#enter-username-btn');
const finalScore = document.querySelector('#final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');
let homeBox = document.querySelector('.home-container');
let quizBox = document.querySelector('.quiz-container');
let rulesBox = document.querySelector('.rules-container');
let highScoresBox = document.querySelector('.high-scores');
let gameOverBox = document.querySelector('.quiz-complete');

finalScore.textContent = mostRecentScore;

// Event Listeners
username.addEventListener('keyup', () => {
    saveUserName.disabled = !username.value;
});

optionBtns.forEach(function (button) {
    button.addEventListener('click', calculateAnswer);
});

/**
 * Opens High Scores Page.
 */

function showQuizHighScores() {
    homeBox.classList.add('hide');
    highScoresBox.classList.remove('hide');
}

/**
 * Closes High Scores Page.
 */

function closeQuizHighScores() {
    homeBox.classList.remove('hide');
    highScoresBox.classList.add('hide');
    console.log('closehighscores');
}

/**
 * Opens Rules Page.
 */

function showQuizRules() {
    homeBox.classList.add('hide');
    rulesBox.classList.remove('hide');
    console.log('openrules');
}

/**
 * Closes Rules Page.
 */

function closeQuizRules() {
    homeBox.classList.remove('hide');
    rulesBox.classList.add('hide');
    console.log('closerules');
}

/**
 * Resets quiz
 */

function gameOver() {
    restartGame();
}

/**
 * Takes user back to home page.
 */

function closeGameOverBox() {
    homeBox.classList.remove('hide');
    gameOverBox.classList.add('hide');
}

/**
 * Starts the quiz.
 */

function beginQuiz() {
    homeBox.classList.add('hide');
    quizBox.classList.remove('hide');
    correctUserAnswers = 0;
    availableQuestions = [...quizQuestions];
    secondsDisplay.textContent;
    resetScore();
    generateNewQuestion();
    resetTimer();
    startTimer();
}

/**
 * Resets the quiz after completion
 */

function quizComplete() {
    closeGameOverBox();
    resetOptionBtns();
    resetCounter();
    secondsDisplay.textContent = 10;
    clearInterval(timerInterval);
    resetScore();
}
/**
 * Increments and displays the question counter
 */

function quizCounter() {
    counter++;
    questionCounter.innerText = counter;
    resetTimer();

// Checks if the quiz is finished.
    if (counter > 5) {
        quizBox.classList.add('hide');
        gameOverBox.classList.remove('hide');
        document.getElementById('final-score').innerHTML = score;
        return;
    }
}

/**
 * Resets the question counter.
 */

function resetCounter() {
    counter = 1;
    questionCounter.innerText = counter;
}

/**
 * Resets the score.
 */

function resetScore() {
    score = 0;
}

/**
 * Generates new question and updates answer options.
 */

function generateNewQuestion() {
    if (quizQuestions.length < availableQuestions.length <= 3 ) {


        let shuffleQuestions = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = shuffleQuestions;

        // displays the image associated with the question
        let question = availableQuestions[currentQuestion];
        quizImage.src = question.imageSrc;
        availableQuestions.splice(currentQuestion, 1);
        for (let i = 0; i < optionBtns.length; i++) {
            optionBtns[i].textContent = '';
        }

        // Generates answer options for each question and displays them on screen.
        for (let i = 0; i < question.options.length; i++) {
            optionBtns[i].textContent = question.options[i].text;
            optionBtns[i].dataset.correct = question.options[i].isCorrect;
        }
    }
}



/**
 * Stores high scores as a cookie
 */

let saveHighScores = e => {
    e.preventDefault();
     userScore =  mostRecentScore ;
     let today = new Date();

     // retrives any existing scores. If there are none it sets value to an empty array.
     let highScores = getCookie(HIGH_SCORE_COOKIE) || [];
     highScores = [...highScores, {name: username.value, score:score}]
     highScores.sort((a, b) => b.score - a.score);
     // The array is then sorted in decending order and extracts the five highest scores.

     let newHighScores = highScores.splice(0, 5);
        setCookie(HIGH_SCORE_COOKIE, newHighScores, today.getDate()+30)
        window.location.assign('index.html');
}

/**
 * Stores data in browser as a cookie.
 * Stores the cookie name, value and when it will expire.
 * JSON is used to convert the value into text format.
 */

function setCookie(cookieName, value, expireyDate) {
    let jsonValue= JSON.stringify(value);
    document.cookie = `${cookieName}=${jsonValue}; expires=${expireyDate}; path=/`;
}

/**
 * Retrives the value of a specified cookie from browser's cookies. 
 * Loops through all cookies in browser and finds cookie that matches the specific cookie name.
 * Returns an empty string if there's no match.
 */

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return JSON.parse(cookie.substring(name.length, cookie.length));
      }
    }
    return "";
  }

/**
 * Creates a HTML list of high scores. 
 * Map method generates a HTML list by iterating through each score object in array.
 */

highScoresList.innerHTML = highScores
    .map(score => {
    return `<li>${score.name} ${score.score}</li>`;
});

/**
 * Checks if user selects correct answer.
 */

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

/**
 * Gets a new question for the user.
 */

function nextQuestion() {
    secondsDisplay.textContent = 10;
    startTimer();
    generateNewQuestion();
    resetOptionBtns();
    quizCounter();

}

/**
 * Resets the option buttons.
 */

function resetOptionBtns() {
    optionBtns.forEach(button => {
        button.classList.remove('correct', 'incorrect');
        button.classList.add('hover');
        button.removeAttribute('disabled');
    });
}

/**
 * Reverts the game back to original state.
 */

function restartGame() {
    beginQuiz();
    resetOptionBtns();
    startTimer();
    resetCounter();
    secondsDisplay.textContent = 10;
    clearInterval(timerInterval);
}

/**
 * The disableAnswerBtn function disables all the answer buttons on the page when called.
 */

function disableAnswerBtn() {
    optionBtns.forEach((btn) => {
        btn.disabled = true;
    });
}

/**
 * Timer Function
 * Inspired by members of the Slack community
 */

function startTimer() {
    timeRemaining = 10;
    timerInterval = setInterval(function () {
        countdown();
        secondsDisplay.textContent = timeRemaining;
    }, 1000);
}

/**
 * Timer Countdown Function
 * Inspired by members of the Slack community
 */

function countdown() {
    if (timeRemaining === 0) {
        disableAnswerBtn();
        clearInterval(timerInterval);
    } else {
        timeRemaining--;
    }
}
/**
 * Reset Timer Function
 */
function resetTimer() {
    clearInterval(timerInterval);
}

