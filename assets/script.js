var scores = document.getElementById("view-scores");
var timer = document.getElementById("timer");
var scoresDiv = document.getElementById("scores-div");
var choices = document.getElementById("choices");
var results = document.getElementById("results");
var start = document.getElementById("start-button");

var secondsLeft = 60;
var setTime = secondsLeft

const questions = [
    [
        {
          question: "Who invented JavaScript?",
          answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
          },
          correctAnswer: "c"
        },
        {
          question: "Which one of these is a JavaScript package manager?",
          answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
          },
          correctAnswer: "c"
        },
        {
          question: "Which tool can you use to ensure code quality?",
          answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
          },
          correctAnswer: "d"
        },
    ],
];

start.addEventListener("click", function(setTime) {
  console.log("i was clicked")
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left";
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and send message
      sendMessage();
    }
    // function displayQuestions(questions) {
    //   console.log("I am showing")
    //   var output = [];
    //   var answers;
    //   for (var i=0; i<questions.length; i++){
    //     answers = [];
        
    //   }
    // };
  }, 1000);
});

function sendMessage() {
  timer.textContent = "time's up!";
}
setTime