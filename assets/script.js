

var secondsLeft;
var timeEl = document.querySelector(".timer");
var currentQuestion = 0;
var timerInterval;
var startBtn = document.querySelector("#start");

// Function to create timer in upper right corner of page

function setTime() {
    secondsLeft = 10;
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining";

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000)
}


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

    console.log(qhtml);
    q.innerHTML = qhtml;
    
    document.getElementById("one").addEventListener("click", pressOne);
    document.getElementById("two").addEventListener("click", pressTwo);
    document.getElementById("three").addEventListener("click", pressThree);
    document.getElementById("four").addEventListener("click", pressFour);

   } else {
    clearInterval(timerInterval);
    q.innerHTML = "Game Over";
}
}

function endGame() {
    var name = prompt("Please enter your initials");
    localStorage.setItem(name, secondsLeft);
    highScore();
   }


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

function speedUpTimer() {
    console.log("speedup");
}

function startQuiz() {
    currentQuestion = 0;
    setTime();
    askNextQuestion();
}
function highScore() {
    var q = document.getElementById("quiz");
    q.innerHTML = "";

}

startBtn.addEventListener("click", startQuiz);



// Function to lose time with wrong answer

// Function to save initials and score
