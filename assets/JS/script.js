// Variables are defined for the different elements on the page
var timerEl = document.querySelector("#timer");
var startQuiz = document.querySelector("#btn-begin");
var submitQuiz = document.querySelector("#btn-submit");
var seeResult = document.querySelector("#see-result");

var score = 0;
var time = 75;

// Questions are defined in an array to be used
var quizQuestions = [
    {
        question: "Javascript is what type of language?",
        answers: {
            a: "object-oriented",
            b: "object-based",
            c: "procedural",
            d: "none of the above",
        },
        correctAnswer: "a"
    },

    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: {
            a: "var",
            b: "let",
            c: "both A and B",
            d: "none of the Above",
        },
        correctAnswer: "c"
    },

    // {
    //     question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    //     answers: {
    //         a: "Throws an error",
    //         b: "Ignores the statements",
    //         c: "Gives a warning",
    //         d: "None of the above",
    // },
    // correctAnswer: "b"
    // },

    // {
    //     question: "Which of the following methods can be used to display data in some form using Javascript?",
    //     answers: {
    //         a: "document.write()",
    //         b: "console.log()",
    //         c: "window.alert()",
    //         d: "all of the above",
    // },
    // correctAnswer: "d"
    // },

    // {
    //     question: "How can a datatype be declared to be a constant type?",
    //     answers: {
    //         a: "const",
    //         b: "var",
    //         c: "let",
    //         d: "constant",
    // },
    // correctAnswer: "a"
    // },

    // {
    //     question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
    //     answers: {
    //         a: "Both the datatype and the result of the expression are compared.",
    //         b: "Only the datatype of the expression is compared.",
    //         c: "Only the value of the expression is compared.",
    //         d: "None of the above.",
    // },
    // correctAnswer: "a"
    // },

    // {
    //     question: "What is the use of the <noscript> tag in Javascript?",
    //     answers: {
    //         a: "The contents are displayed by non-JS-based browsers.",
    //         b: "Clears all the cookies and caches.",
    //         c: "Both A and B.",
    //         d: "None of the above.",
    // },
    // correctAnswer: "a"
    // },

    // {
    //     question: "When an operators value is NULL, the typeof returned by the unary operator is:",
    //     answers: {
    //         a: "boolean",
    //         b: "undefined",
    //         c: "object",
    //         d: "integer",
    // },
    // correctAnswer: "c"
    // },


    // {
    //     question: "What does the Javascript “debugger” statement do?",
    //     answers: {
    //         a: "It will debug all the errors in the program at runtime.",
    //         b: "It acts as a breakpoint in a program.",
    //         c: "It will debug error in the current statement if any.",
    //         d: "All of the above",
    // },
    // correctAnswer: "b"
    // },


    // {
    //     question: "The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
    //     answers: {
    //         a: "object serialization",
    //         b: "object encapsulation",
    //         c: "object inheritance",
    //         d: "none of the above",
    // },
    // correctAnswer: "a"
    // },
];

// This looks for the click on the begin quiz button to start the quiz

startQuiz.addEventListener("click", function startTimer() {
    console.log("You've clicked me")
    var timeLeft = 75;
    var timerEl;

    var timeInterval = setInterval(function () {
        count--
        timerEl.innerHTML = timeLeft;

        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
// Ensure when timer hits zero to call gameOver function

        }
    }, 1000);


});

startQuiz.addEventListener("click", function buildQuiz(quizQuestions) {
    console.log('quiz questions', quizQuestions)
    var output = [];

   
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
            console.log('curr quest', currentQuestion)
            console.log('question numb', questionNumber)
            //var input = document.createElement(`<input type='radio' name='${questionNumber}' value='${letter}' >`)
           // console.log('input element ', input)
            //for (letter in currentQuestion.answers) {
               // answers.push(
                    //<input type="radio" name="question${questionNumber}" value="${letter}">
                    //    ${letter} :
                    //    ${currentQuestion.answers[letter]}
                    //</input>
                //);
           // }
            //output.push(
               // <><div class="question"> ${currentQuestion.question} </div><div class="answers"> ${answers.join('')} </div></>
            //);
        }
    );
    //quizContainer.innerHTML = output.join('');
});

// quizQuestions.forEach(
//     (currentQuestion, questionNumber) => {
//         const answers = [];
//         answers.push(
            //<input type="radio" name="question${question}" value="${letter}">
            //    ${letter} :
            //    ${currentQuestion.answers[letter]}
            //</input>
    //     );
    // });

//output.push(
//    <><div class="question"> ${currentQuestion.questionNumber} </div><div class="answers"> ${answers.join('')} </div></>
//);

//quizContainer.innerHTML = output.join('');

// buildQuiz();



// Penalize the time but where does this go?
function setStatusClass() {
    if (correctAnswer) {
    } else {
        countPenality = count - 10;
        timerEl.innerHTML = countPenality
    }
}

function gameOver(){
    alert('game is over')
}

function timer(){
    alert('timer is on')

    //if time is equal to zero
    //call gameOver()
}

function randomizeQuestions(){
    alert('start random questions')

    //if answer is incorrect deduct time and say incorrect
    //else just say correct

    //if user answers all questions 
    // call gameOver()
}

function startGame(){
    randomizeQuestions()
    timer()
}


