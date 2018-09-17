//How can I control when the game starts without displaying the questions?
// Game starts when start button is clicked
// Timer starts 
    //Timer has 1 minute and 20 seconds
    //Once timer is done the game is over
        //Displays the answers that are correct and incorrect
    //If player submits their answers before the time is up the player can click submit button
        //Displays the answers that are correct and incorrect
//

var startTime = 120;

var intervalId;

$("#start").on("click", run);
console.log(run);
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    startTime--;
    $("#timer").html("<h2>" + startTime + " secounds left" + "<h2>");
    if (startTime === 0) {
        stop();
        alert("Your time is up!");
    }

}

function stop() {
    clearInterval(intervalId);
}


// var timer = document.getElementById('timer')
// var timerId = setInterval(timer, 1000);

// function start () {
//     $("#startButton").on("click");
//     function timer () {
//         if (startTime == 0) {
//             clearTimeout(timerId);
//             timesUp();
//         } else {
//             timer.innerHTML = startTime + "seconds remaining";
//             startTime--;
//         }
//     }
// };

// function timesUp() {
//     alert("Times up!");
// }