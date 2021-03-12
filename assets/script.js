var scores = document.getElementById("view-scores");
var timer = document.getElementById("timer");
var scoresDiv = document.getElementById("scores-div");
var choices = document.getElementById("choices");
var results = document.getElementById("results");
var start = document.getElementById("start-button");
var questionsBox = document.getElementById("question-div")

var secondsLeft = 60;
var currentQuestion = 0;
var setTime = secondsLeft;
var score = 0

const questions = [ 
  {
    question: "Who invented JavaScript?",
    answers: [
      "a: Douglas Crockford",
      "b: Sheryl Sandberg",
      "c: Brendan Eich"
    ],
    correctAnswer: 2
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: [
      "a: Node.js",
      "b: TypeScript",
      "c: npm"
    ],
    correctAnswer: 2
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: [
      "a: Angular",
      "b: jQuery",
      "c: RequireJS",
      "d: ESLint"
    ],
    correctAnswer: 3
  },    
];

start.addEventListener("click", function(setTime) {
  startTimer();
  getQuestion();
});

function startTimer(){
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left";
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and send message
      sendMessage();
    }
  }, 1000);
}
//Obtaining questions from the questions inventory
function getQuestion(){
  removeEls(start);
  resetAnswers();
  questionsBox.innerHTML = "<p>" + questions[currentQuestion].question + "</p>";
  for (var i = 0; i < questions[currentQuestion].answers.length; i++){
    // console.log(questions[currentQuestion].answers[i])
    var button = document.createElement("button")
    button.dataset.index = i;
    button.innerText = questions[currentQuestion].answers[i];
    button.addEventListener("click", checkAnswer);
    choices.append(button);
  };
};

function sendMessage() {
  timer.textContent = "time's up!";
  };
setTime;

function checkAnswer(e) {
   console.log(e.target.dataset.index);
   var selectedAnswerIdx = e.target.dataset.index
   console.log(typeof selectedAnswerIdx);
   if (questions[currentQuestion].correctAnswer == selectedAnswerIdx){
     console.log("correct")
     score += secondsLeft;
   } else {
    score -= 10;
    secondsLeft = secondsLeft - 10;
    console.log("incorrect")
   }
   currentQuestion++;
   getQuestion();
   
}
function resetAnswers(){
  while (choices.firstChild) {
    choices.removeChild(choices.firstChild);
  };
};

const removeEls = (...els) => {
    for (let el of els) el.remove();
  }; 