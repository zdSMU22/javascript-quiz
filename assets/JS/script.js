var startQuiz = document.querySelector("#btn-begin");
var timerEl = document.querySelector("#timer");
var questionContainer = document.createElement("questionContainer");

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
// Ensure when timer hits zero to call gameOver function

        }
    }, 1000);
});
