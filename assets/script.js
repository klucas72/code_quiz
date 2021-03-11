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

const questions = [ 
        {
          question: "Who invented JavaScript?",
          answers: [
            "a: Douglas Crockford",
            "b: Sheryl Sandberg",
            "c: Brendan Eich"
          ],
          correctAnswer: "c"
        },
        {
          question: "Which one of these is a JavaScript package manager?",
          answers: [
            "a: Node.js",
            "b: TypeScript",
            "c: npm"
          ],
          correctAnswer: "c"
        },
        {
          question: "Which tool can you use to ensure code quality?",
          answers: [
            "a: Angular",
            "b: jQuery",
            "c: RequireJS",
            "d: ESLint"
          ],
          correctAnswer: "d"
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

  for (var i = 0; i < questions[currentQuestion].answers.length; i++){
    console.log(questions[currentQuestion].answers[i])
    var button = document.createElement("button");
    button.innerText = questions[currentQuestion].answers[i];
    button.setAttribute("data-id", i);
    button.addEventListener("click", function(event){
      event.stopPropagation()

      if (button.innerText === questions[currentQuestion].answer){
        score += secondsLeft;
      } else {
        score -= 10;
        secondsLeft = secondsLeft - 10;
      }
      questionsBox.innerHTML = "";
      if (currentQuestion === questions.length){
        return;
      } else {
        currentQuestion++;
        getQuestion();
      }
    }
  )};
}
 //wrap each answer in a button using inner-html
// choices.innerHTML = "<button>" + questions[currentQuestion].answers[i] + "</button>";

function sendMessage() {
  timer.textContent = "time's up!";
}
setTime

const removeEls = (...els) => {
    for (let el of els) el.remove();
  }