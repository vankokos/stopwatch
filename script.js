let stopwatch = document.querySelector(".stopwatch")
let timerMinutes = document.getElementById("timerMinutes")
let timerSeconds = document.getElementById("timerSeconds")
let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")
let lapBtn = document.getElementById("lap")
let resetBtn = document.getElementById("reset")

let minutes = 0
let seconds = 0
timerMinutes.innerHTML = minutes;
timerSeconds.innerHTML = seconds;

startBtn.addEventListener("click", ()=> {
    let interval = setInterval(() => {
        
        if(seconds == 60) {
            let newMinutes = 1 + minutes++
            timerMinutes.innerHTML = newMinutes
            seconds = 0
        } else {

            let newSeconds = seconds++
            timerSeconds.innerHTML = newSeconds
        }
    }, 1000);

    stopBtn.addEventListener("click", () => {
        clearInterval(interval)
    })

    lapBtn.addEventListener("click", ()=> {
        let lap = document.createElement("p")
        lap.innerHTML = `${minutes}:${seconds}`

        stopwatch.appendChild(lap)
    })

    resetBtn.addEventListener("click", ()=> {
        clearInterval(interval)

        minutes = 0;
        seconds = 0;

        timerMinutes.innerHTML = minutes;
        timerSeconds.innerHTML = seconds;
    })
})
