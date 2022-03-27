// Variables are defined for the different elements on the page
var timerEl= document.querySelector("#timer");
var startquiz = document.querySelector("#button");

// This looks for the click on the begin quiz button to start the quiz
startquiz.addEventListener("click", function startTimer() {
    console.log("You've clicked me")
    var timeLeft = 75;
    
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
          timerEl.textContent = timeLeft + ' seconds remaining';
          timeLeft--;
        } else if (timeLeft === 1) {
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else {
          timerEl.textContent = '';
          clearInterval(timeInterval);
          displayMessage();
        }
      }, 1000);
    };

    function displayMessage(){

    }
    
    startTimer();
