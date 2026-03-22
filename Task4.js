let time = 3600; // 1 hour in seconds
let timerInterval;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (timerInterval) return;

    timerInterval = setInterval(() => {

        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            document.getElementById("message").textContent = "Time's up!";
        }

    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    time = 3600;
    document.getElementById("message").textContent = "";
    updateDisplay();
}

updateDisplay();