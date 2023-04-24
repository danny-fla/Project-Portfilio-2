 const questions = [
    {
        question: "assets/images/sagrada-familia.webp",
        options: ["Madrid", "Valencia", "Barcelona", "Sevilla"],
        answer: "Barcelona"
    },
    {
        question:"",
        options: ["Dublin", "Liverpool", "Belfast", "Cardiff"],
        answer: "Dublin"
    },
    {
        question:"",
        options: ["Venice", "Rome", "Milan", "Turin"],
        answer: "Rome"
    },
    {
        question:"",
        options: ["Thailand", "Cambodia", "Malaysia", "Vietnam"],
        answer: "Vietnam"
    },
    {
        question:"",
        options: ["San Francisco", "San Antonio", "Seattle","New York"],
        answer: "San Francisco"
    },
    {
        question:"",
        options: ["Bolivia", "Brazil", "Argentina", "Mexico"],
        answer: "Brazil"
    },
    {
        question:"",
        options: ["Spain", "Germany", "Italy", "France"],
        answer: "France"
    },
    {
        question:"",
        options: ["Spain", "France",  "Germany", "Italy"],
        answer: "Spain"
    },
    {
        question:"",
        options: ["South Korea", "China", "Japan (Ushiku Daibutsu)", "India"],
        answer: "Japan"
    },
    {
        question:"",
        options: ["London", "Birmingham", "Manchester", "Newcastle"],
        answer: "London"
    },
]


// Global variables
let score = 0;


// Containers 
let homeBox = document.querySelector('#home-container');
let quizBox = document.querySelector('#quiz-container');
let rulesBox = document.querySelector('#rules-container');
let highScoresBox = document.querySelector('#high-scores');
// Buttons

let  btn = document.getElementsByClassName('button');
let  quizStartBtn = document.getElementsByClassName('begin-quiz-button')[0];
let  highScoresBtn = document.getElementsByClassName('high-score-button')[0];
let  rulesBtn = document.getElementsByClassName('rules-button')[0];
let  returnHomeBtn = document.getElementsByClassName('home-button')[0];
let  optionBtn = document.getElementsByClassName('option-btn')[0];
let  optionOneBtn = document.getElementsByClassName('option-1-btn')[0];
let  optionTwoBtn = document.getElementsByClassName('option-2-btn')[0];
let  optionThreeBtn = document.getElementsByClassName('option-3-btn')[0];
let  optionFourBtn = document.getElementsByClassName('option-4-btn')[0];
let  resetQuizBtn = document.getElementsByClassName('retry-button')[0];
let  submitUsernameBtn= document.getElementsByClassName('enter-username-btn')[0];

// DOM elements
let correctUserAnswers = 0
let questionSelector = [];


 quizStartBtn.addEventListener('click', ()=> {
    homeBox.classList.add('hide');
    quizBox.classList.remove('hide');
})

highScoresBtn.addEventListener('click', ()=> {
    homeBox.classList.add('hide');
    highScoresBox.classList.remove('hide');
})

rulesBtn.addEventListener('click', ()=> {
    homeBox.classList.add('hide');
    rulesBox.classList.remove('hide');
})

returnHomeBtn.addEventListener('click', ()=> {
    homeBox.classList.remove('hide');
    rulesBox.classList.add('hide');
    highScoresBox.classList.add('hide');
}) 
/**
highScoresBtn.addEventListener('click', ()=> {
    homeBox.classList.add('hide');
    rulesBox.classList.add('hide');
    highScoresBox.classList.remove('hide');
})



/** 
let homeBox = document.querySelector('#home-container');

let quizBox = document.querySelector('#quiz-container');
let questionBox = document.querySelector('#question-container');
let optionsBox = document.querySelector('#options-container');
let nextRetryBox = document.querySelector('#next-retry-container');
let quizEndBox = document.querySelector('#quiz-complete');
let resultsBox = document.querySelector('#results-container');


let  imageQuestion = document.querySelector('#landmark');
let  optionBtn = document.getElementsByClassName('option-btn')[0];
let  optionOneBtn = document.getElementsByClassName('option-1-btn')[0];
let  optionTwoBtn = document.getElementsByClassName('option-2-btn')[0];
let  optionThreeBtn = document.getElementsByClassName('option-3-btn')[0];
let  optionFourBtn = document.getElementsByClassName('option-4-btn')[0];

let userScore = document.querySelector('.user-score');

let userName = document.querySelector('#username');
let questionSelector = [];
let userProgress = 0;
let correctUserAnswers = 0;
let currentQuestion = {};

let timeLeft;

**/

// Timer
let secondsDisplay = document.querySelector('#seconds');
let time = 15;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(updateTimer,1000);
 }

 function updateTimer() {
    let seconds = time % 60;
     secondsDisplay.textContent = ("0" + seconds).slice(-2);
     time--;
     if (time <0) {
        clearInterval(timerInterval);
        alert("Time up")
     }
 }
 
 quizStartBtn.addEventListener('click', startTimer);
