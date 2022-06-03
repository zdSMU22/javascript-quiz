var startQuiz = document.querySelector("#btn-begin");
var Scores = document.querySelector("#btn-highScores")
var timerEl = document.querySelector("#timer");
var questionContainer = document.createElement("questionContainer");
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');
var submitScore = document.querySelector("#submitScore");
var highScoreName = document.querySelector("#nameTextArea");
var highScorePage = document.createElement ("enterIntials");


var questions = {
    0: "Javascript is what type of language?",
    1: "Which of the following keywords is used to define a variable in Javascript?",
};

var answers = {
    0: {
        0:"object-oriented",
        1:"object-based",
        2:"procedural",
        3:"none of the above",
    },

    1: {
        0:"var",
        1:"let",
        2:"both A and B",
        3:"none of the Above",
    }
}

answer1.style.display = "none";
answer2.style.display = "none";
answer3.style.display = "none";
answer4.style.display = "none";
submitScore.style.display =  "none";
highScoreName.style.display = "none";

// This starts the timer and counts down from 75 to 0 once the begin quiz button is clicked
startQuiz.addEventListener("click", function startTimer() {

    console.log("You've clicked me")
    var timeLeft = 75;


    var timeInterval = setInterval(function () {
        timerEl.innerHTML = timeLeft;

        if (timeLeft > 1) {
            timerEl.textContent = 'Time remaining: ' + timeLeft + ' seconds';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = 'Time remaining: ' + timeLeft + ' seconds';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
});

//See lines 232
    if(timeLeft >0) {
        questionContainer.style.display = "";
        answer1.style.display = "";
        answer2.style.display = "";
        answer3.style.display = "";
        answer4.style.display = "";

        answer1.textContent = answers.answers[answerNumber][0];
        answer2.textContent = answers.answers[answerNumber][1];
        answer3.textContent = answers.answers[answerNumber][2];
        answer4.textContent = answers.answers[answerNumber][3];
        

    }





// see lines 79-99 on dump
// Scores.addEventListener("click", function(){
//     var playerIntials = "";
//     var playerScore = "";

//     for (var i=0; i < localStorage.length; i++){
//         var 
//     }
// })
