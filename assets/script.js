var secondsLeft;
var currentQuestion = 0;
var timerInterval;
var timeEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit");
var directions = document.querySelector("#directions");
var container = document.querySelector(".container");
var runGame = document.getElementById("runGame");
var stopGame = document.getElementById("stopGame");
var finished = document.getElementById("finished");
var score = document.getElementById("score");
var pName = "";

// Function to create timer

function setTime() {
  secondsLeft = 60;
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining";

    if (secondsLeft == 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

// Function to create quiz using objects

var quizQuestions = [
  {
    inquiry: "The Array object stores multiple values in a single _______.",
    choices: {
      choice1: "function",
      choice2: "variable",
      choice3: "class",
      choice4: "program",
    },
    answer: 0,
    correct: true,
  },

  {
    inquiry: "What method is used to join different arrays?",
    choices: {
      choice1: "add",
      choice2: "splice",
      choice3: "concat",
      choice4: "copyWithin",
    },
    answer: 2,
    correct: true,
  },

  {
    inquiry: "What are the properties of an object?",
    choices: {
      choice1: "splice:add",
      choice2: "class:id",
      choice3: "key:value",
      choice4: "variable:description",
    },
    answer: 2,
    correct: true,
  },

  {
    inquiry: "What is not a valid string method?",
    choices: {
      choice1: "toUpperCase",
      choice2: "split",
      choice3: "replaceAll",
      choice4: "divide",
    },
    answer: 3,
    correct: true,
  },

  {
    inquiry: "How do you call a function?",
    choices: {
      choice1: "invoke",
      choice2: "call its name",
      choice3: "scream loudly",
      choice4: "offer it coffee",
    },
    answer: 0,
    correct: true,
  },

  {
    inquiry: "How do you access an array element?",
    choices: {
      choice1: "call its function",
      choice2: "assign a variable",
      choice3: "remember its position",
      choice4: "index number",
    },
    answer: 3,
    correct: true,
  },
];

// Function to actually bring up questions for player to answer

function askNextQuestion() {
  var q = document.getElementById("quiz");

  if (currentQuestion < quizQuestions.length) {
    var qhtml = "<p>";
    qhtml = qhtml + quizQuestions[currentQuestion].inquiry;
    qhtml += "</p>";
    qhtml += "<button id='one'>";
    qhtml += quizQuestions[currentQuestion].choices.choice1;
    qhtml += "</button>";
    qhtml += "<button id='two'>";
    qhtml += quizQuestions[currentQuestion].choices.choice2;
    qhtml += "</button>";
    qhtml += "<button id='three'>";
    qhtml += quizQuestions[currentQuestion].choices.choice3;
    qhtml += "</button>";
    qhtml += "<button id='four'>";
    qhtml += quizQuestions[currentQuestion].choices.choice4;
    qhtml += "</button>";

    q.innerHTML = qhtml;

    document.getElementById("one").addEventListener("click", pressOne);
    document.getElementById("two").addEventListener("click", pressTwo);
    document.getElementById("three").addEventListener("click", pressThree);
    document.getElementById("four").addEventListener("click", pressFour);
  } else {
    clearInterval(timerInterval);
    q.innerHTML = "Game Over";
    endGame();
  }
}

// Functions to check answer and either penalize or not

function pressOne() {
  if (quizQuestions[currentQuestion].answer != 0) {
    speedUpTimer();
  }
  currentQuestion++;
  askNextQuestion();
}
function pressTwo() {
  if (quizQuestions[currentQuestion].answer != 1) {
    speedUpTimer();
  }
  currentQuestion++;
  askNextQuestion();
}
function pressThree() {
  if (quizQuestions[currentQuestion].answer != 2) {
    speedUpTimer();
  }
  currentQuestion++;
  askNextQuestion();
}
function pressFour() {
  if (quizQuestions[currentQuestion].answer != 3) {
    speedUpTimer();
  }
  currentQuestion++;
  askNextQuestion();
}

// Function to decrement time as penalty for wrong answer

function speedUpTimer() {
  secondsLeft -= 10;
  console.log("speedup");
}

// Function to start quiz

function startQuiz() {
  timeEl.setAttribute("style", "display: block");
  runGame.setAttribute("style", "display: block");
  directions.setAttribute("style", "display: none");
  startBtn.setAttribute("style", "display: none");
  finished.setAttribute("style", "display: none");
  stopGame.setAttribute("style", "display: none");

  currentQuestion = 0;
  setTime();
  askNextQuestion();
}

// Function to end game

function endGame() {
  var playerName = document.getElementById("playerName");

  stopGame.setAttribute("style", "display: block");
  timeEl.setAttribute("style", "display: none");
  finished.setAttribute("style", "display: block");

  score.innerHTML = "<p>" + "You scored a  " + secondsLeft + "</p>";
}

// Function to collect player info and store in local storage

function finishedGame() {
  var pName = document.getElementById("pName").value;

  localStorage.setItem(pName, secondsLeft);
}

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", finishedGame);
