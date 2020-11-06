var timeEl = document.querySelector("text-light");
var mainEl = document.getElementById("time-display");

var secondsLeft = 45;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till end of quiz.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
};

function myTimer() {
    var interval = setInterval(function() {
        timer.innerHTML = sec + " seconds left";
        sec--;
        if (sec == -1) {
            clearInterval(interval);
            alert("Time out!!");
            tryagain();
        } else if (yourscore.style.display === "block") {
            clearInterval(interval);
        }
    }, 1000);
};

document.getElementById("form1").onsubmit = function() {
    Hammer = parseInt(document.querySelector('input[name = "Hammer"]:checked').value);
    shield = parseInt(document.querySelector('input[name = "shield"]:checked').value);
    stone = parseInt(document.querySelector('input[name = "stone"]:checked').value);
    panther = parseInt(document.querySelector('input[name = "panther"]:checked').value);


    result = Hammer + shield + stone + panther;

    document.getElementById("grade").innerHTML = result;
    return false;
};