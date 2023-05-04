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
    },
    {
        imageSrc: "assets/images/madrid.jpeg",
        options: [
            {text: 'Barcelona4', isCorrect: false},
            {text: 'Madrid', isCorrect: true},
            {text: 'Dublin', isCorrect: false},
            {text: 'London', isCorrect: false}
        ]
    }
];


 // Global variables
 let score = 0;

 // variables
 let correctUserAnswers = 0
 let questionSelector = [];
 const secondsDisplay = document.querySelector('#seconds');
 let time = 5;
 let timerInterval;
 let userAnswers = [];
 let questionsAnswered = 0;
 const MAX_QUESTIONS = 3;
 let currentQuestionIndex = 0;
 let questionCounter = document.querySelector('#question-counter');
let counter = 1;


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
   quizImage.src = quizQuestions[0].imageSrc;
 })

 let highScoresBtn = document.getElementsByClassName('high-score-button')[0];
 let rulesBtn = document.getElementsByClassName('rules-button')[0];
 let returnHomeBtn = document.getElementsByClassName('home-button')[0];
 let optionBtns = document.querySelectorAll('.option-btn');
 let optionOneBtn = document.getElementsByClassName('option-1-btn')[0];
 let optionTwoBtn = document.getElementsByClassName('option-2-btn')[0];
 let optionThreeBtn = document.getElementsByClassName('option-3-btn')[0];
 let optionFourBtn = document.getElementsByClassName('option-4-btn')[0];
 let submitUsernameBtn = document.getElementsByClassName('enter-username-btn')[0];
 let nextQuestionBtn = document.querySelector('.next-button');
 

 // DOM elements
 

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
 

 function startTimer() {
     timerInterval = setInterval(updateTimer, 1000);
 }



 function updateTimer() {

     if( secondsDisplay.textContent > 0){
     secondsDisplay.textContent = secondsDisplay.innerText - 1
     clearInterval(timerInterval);

     }else{
          optionBtns.forEach(btn => {
            btn.disabled = true
            btn.style.backgroundColor = "red"
          
          })
     }

 }

 quizStartBtn.addEventListener('click', startTimer);

 // Options


 for (let i = 0; i < optionBtns.length; i++) {
     optionBtns[i].addEventListener('click', () => {
         console.log('selected Answer', userSelection);
     })
 }

 

 // Prevent user from selecting multiple answers and selecting when the timer runs out

 function disableAnswerBtn() {
     for (let i = 0; i < optionBtns.length; i++) {
         optionBtns[i].disabled = true;
     }
 }

 // calculate answer



  quizQuestions.forEach((question, index) => {
     for (let i = 0; i < question.options.length; i++) {
        optionBtns[i].textContent = question.options[i];
        optionBtns[i].addEventListener('click', () => {
             checkAnswer(question, optionBtns[0]);
         });

     }
 }); 

//  function checkAnswer(currentQuestion, answerBtn) {
//       disableAnswerBtn();
//       let userSelection = answerBtn.innerText;
//       userAnswers.push(userSelection);

//       correctOption = currentQuestion.options.find(option => option.isCorrect);
//       let correctAnswer = correctOption.text;
//      console.log(currentQuestion, "<===correctAnswer")
//     console.log(userSelection, "<=== userSelection")
//      if (userSelection === correctAnswer) {
//          answerBtn.classList.add('correct');
//          incrementScore();
//      } else {
//          answerBtn.classList.add('incorrect');
//      }
//      }
 

// generate question


function generateQuestion() {
    if (questionsAnswered >= MAX_QUESTIONS) {
        // End the quiz
        console.log("Quiz ended");
        return;
    }

    // currentQuestionIndex = Math.floor(Math.random() * quizQuestions.length);
    currentQuestion = quizQuestions[currentQuestionIndex];
    quizImage.src = currentQuestion.imageSrc;

    for (let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].textContent = currentQuestion.options[i].text;
        optionBtns[i].disabled = false;
        optionBtns[i].classList.remove('correct', 'incorrect');
    }

    // Increment the number of questions answered
    questionsAnswered++;
    currentQuestionIndex++;
}


    // next question


 nextQuestionBtn.addEventListener('click', function() {
    generateQuestion();
    updateTimer();
    counter++;
    questionCounter.innerText = counter;
    optionBtns.forEach(btn => {
         btn.disabled = false
         btn.style.backgroundColor = "yellow"

       })
 secondsDisplay.textContent = secondsDisplay.innerText = 5
})

// Question counter




// reset quiz function

let resetQuizBtn = document.getElementsByClassName('retry-button')[0];
resetQuizBtn.addEventListener('click', function() {
    console.log('btn');
    restartQuiz();
    
});

function restartQuiz(){
    generateQuestion();
    updateTimer();
    console.log('restart');
    secondsDisplay.textContent = secondsDisplay.innerText = 5; 
    questionCounter.innerText = 1;
}

