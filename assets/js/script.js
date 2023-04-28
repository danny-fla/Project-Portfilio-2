let quizQuestions = [
    {
        imageSrc: "assets/images/sagrada-familia.webp",
        options: [
            {text: 'Barcelona1', isCorrect: true},
            {text: 'Madrid', isCorrect: false},
            {text: 'Dublin', isCorrect: false},
            {text: 'London', isCorrect: false}
        ]
    }, 
    {
        imageSrc: "assets/images/dublin-castle.webp",
        options: [
            {text: 'Barcelona2', isCorrect: false},
            {text: 'Madrid', isCorrect: false},
            {text: 'Dublin', isCorrect: true},
            {text: 'London', isCorrect: false}
        ]
    },
    {
        imageSrc: "assets/images/london-bridge.jpg",
        options: [
            {text: 'Barcelona3', isCorrect: false},
            {text: 'Madrid', isCorrect: false},
            {text: 'Dublin', isCorrect: false},
            {text: 'London', isCorrect: true}
        ]
    }
];


 // Global variables
 let score = 0;


 // Containers 
 let homeBox = document.querySelector('#home-container');
 let quizBox = document.querySelector('#quiz-container');
 let rulesBox = document.querySelector('#rules-container');
 let highScoresBox = document.querySelector('#high-scores');
 // Buttons

 let btn = document.getElementsByClassName('button');
 let quizStartBtn = document.getElementsByClassName('begin-quiz-button')[0];
 quizStartBtn.addEventListener('click', function() {
    generateQuestion();
    startTimer()
 });
 let quizImage = document.querySelector('#landmark');
 quizStartBtn.addEventListener('click', function(){
   quizImage.src = quizQuestions[i].imageSrc;
 })

 let highScoresBtn = document.getElementsByClassName('high-score-button')[0];
 let rulesBtn = document.getElementsByClassName('rules-button')[0];
 let returnHomeBtn = document.getElementsByClassName('home-button')[0];
 let optionBtns = document.querySelectorAll('.option-btn');
 let optionOneBtn = document.getElementsByClassName('option-1-btn')[0];
 let optionTwoBtn = document.getElementsByClassName('option-2-btn')[0];
 let optionThreeBtn = document.getElementsByClassName('option-3-btn')[0];
 let optionFourBtn = document.getElementsByClassName('option-4-btn')[0];
 let resetQuizBtn = document.getElementsByClassName('retry-button')[0];
 let submitUsernameBtn = document.getElementsByClassName('enter-username-btn')[0];
 let nextQuestionBtn = document.querySelector('.next-button');
 

 // DOM elements
 let correctUserAnswers = 0
 let questionSelector = [];
 let currentQuestionIndex = Math.floor(Math.random() * quizQuestions.length);
 let currentQuestion = quizQuestions[currentQuestionIndex];


 quizStartBtn.addEventListener('click', () => {
     homeBox.classList.add('hide');
     quizBox.classList.remove('hide');
 })

 highScoresBtn.addEventListener('click', () => {
     homeBox.classList.add('hide');
     highScoresBox.classList.remove('hide');
 })

 rulesBtn.addEventListener('click', () => {
     homeBox.classList.add('hide');
     rulesBox.classList.remove('hide');
 })

 returnHomeBtn.addEventListener('click', () => {
     homeBox.classList.remove('hide');
     rulesBox.classList.add('hide');
     highScoresBox.classList.add('hide');
 })


 // Timer
 const secondsDisplay = document.querySelector('#seconds');
 let time = 15;
 let timerInterval;

 function startTimer() {
     timerInterval = setInterval(updateTimer, 1000);
 }

 function updateTimer() {
     let seconds = time % 60;
     secondsDisplay.textContent = ("0" + seconds).slice(-2);
     time--;
     if (time < 0) {
         clearInterval(timerInterval);
     }
 }

 quizStartBtn.addEventListener('click', startTimer);

 // Options


 for (let i = 0; i < optionBtns.length; i++) {
     optionBtns[i].addEventListener('click', () => {
         console.log('selected Answer', selectedAnswer);
     })
 }

 

 // Prevent user from selecting multiple answers and selecting when the timer runs out

 function disableAnswerBtn() {
     for (let i = 0; i < optionBtns.length; i++) {
         optionBtns[i].disabled = true;
     }
 }

 // calculate answer

 let userAnswers = [];

  quizQuestions.forEach((question, index) => {
     for (let i = 0; i < question.options.length; i++) {
        optionBtns[i].textContent = question.options[i];
        optionBtns[i].addEventListener('click', () => {
             checkAnswer(question, optionBtns[i]);
         });
     }
 }); 

 function checkAnswer(currentQuestion, answerBtn) {
     disableAnswerBtn();
     let userSelection = answerBtn.innerText;
     userAnswers.push(userSelection);

     correctOption = currentQuestion.options.find(option => option.isCorrect);
     let correctAnswer = correctOption.text;
     
     if (userSelection === correctAnswer) {
         answerBtn.classList.add('correct');
         incrementScore();
     } else {
         answerBtn.classList.add('incorrect');
     }
     }
 

// generate question

function generateQuestion(){
     currentQuestionIndex = Math.floor(Math.random()*quizQuestions.length);
     currentQuestion = quizQuestions[currentQuestionIndex];
     quizImage.src = currentQuestion.imageSrc;
     
     for (let i = 0; i < optionBtns.length; i++){
        optionBtns[i].textContent = currentQuestion.options[i].text;
        optionBtns[i].disabled = false;
        optionBtns[i].classList.remove('correct', 'incorrect');
     }
    }

    // next question


 nextQuestionBtn.addEventListener('click', function() {
    generateQuestion();
    startTimer();
})