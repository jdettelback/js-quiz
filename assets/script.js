

var secondsLeft = 10;
var timeEl = document.querySelector(".timer");
var currentQuestion = 0;
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");

var i=0

var startBtn = document.querySelector("#start");
var nextBtn = document.querySelector("#next");

// Function to create timer in upper right corner of page

function setTime() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        return "Time is Up";
    }
}, 1000)
}

setTime();

// Function to create quiz using objects

var quizQuestions = [
{   
    inquiry: "The Array object stores multiple values in a single _______.",
    choices: {
        choice1: "function", 
        choice2: "variable", 
        choice3: "class", 
        choice4: "program"},
    answer: 1,
    correct: true,
},

{   
    inquiry: "What method is used to join different arrays?",
    choices: {
        choice1: "add",
        choice2: "splice",
        choice3: "concat",
        choice4: "copyWithin"},
    answer: 3,
    correct: true,
},

{   
    inquiry: "What force is used to join different arrays?",
    choices: {
        choice1: "add",
        choice2: "splice",
        choice3: "concat",
        choice4: "copyWithin"},
    answer: 3,
    correct: true,
}
];


localStorage.setItem("quizQuestions", JSON.stringify(quizQuestions));

console.log(quizQuestions);


function askNextQuestion() {
    currentQuestion++;
    var q = document.getElementById("quiz");

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

    console.log(qhtml);
    q.innerHTML = qhtml;
    
    document.getElementById("one").addEventListener("click", pressOne);
    document.getElementById("two").addEventListener("click", pressTwo);
    document.getElementById("three").addEventListener("click", pressThree);
    document.getElementById("four").addEventListener("click", pressFour);

}

function pressOne() {
    if (quizQuestions[currentQuestion].answer != 0) {
        speedUpTimer();
    }
    askNextQuestion();
}
function pressTwo() {
    if (quizQuestions[currentQuestion].answer != 1) {
        speedUpTimer();
    }
    askNextQuestion();
}
function pressThree() {
    if (quizQuestions[currentQuestion].answer != 2) {
        speedUpTimer();
    }
    askNextQuestion();
}
function pressFour() {
    if (quizQuestions[currentQuestion].answer != 3) {
        speedUpTimer();
    }
    askNextQuestion();
}

function speedUpTimer() {
    console.log("speedup");
}

function startQuiz() {
    currentQuestion = -1;
    askNextQuestion();
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", askNextQuestion);


// Function to lose time with wrong answer

// Function to save initials and score


// Action to be performed on click store in named function
// function showResponse(event) {
//     // Prevent default action
//     event.preventDefault();
//     console.log(event);
//     var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
//     submissionResponseEl.textContent = response;
//   }
    
//   // Add listener to submit element
//   submitEl.addEventListener("click", showResponse);
  