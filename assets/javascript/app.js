//How can I control when the game starts without displaying the questions?
// Game starts when start button is clicked
// Timer starts 
//Timer has 1 minute and 20 seconds
//Once timer is done the game is over
//Displays the answers that are correct and incorrect
//If player submits their answers before the time is up the player can click submit button
//Displays the answers that are correct and incorrect
//



// Setting the startTime counter to 90
var startTime = 120;
// Variable that will hold our interval ID when we execute
// the "run" function
var intervalId;
hide();
function hide () {
    document.getElementById("quiz").style.display = "none";
}
// When the start button gets clicked, run the start function.
$("#start").on("click", run);
console.log(run);
console.log($("#start").on("click",run));


//  The run function sets an interval
//  that runs the decrement function once a second.
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
    console.log(run);
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
// The decremtn function.
function decrement() {
    // The startTime decreses by one.
    startTime--;
    // Show the time aka the "start Time" in the #timer tag
    $("#timer").html("<h2>" + startTime + " secounds left" + "<h2>");
    // When the startTime hits 0 ...
    if (startTime === 0) {
        // ... run the stop function.
        stop();
        // Alert the user that the time is up.
        alert("Your time is up!");
    }

}
// The stop function
function stop() {
    // Clears the intervalId
    // We jsut pass the name of the interval
    // to the clearInterval function.
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