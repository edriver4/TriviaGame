//How can I control when the game starts without displaying the questions?
// Game starts when start button is clicked
// Timer starts 
//Timer has 1 minute and 20 seconds
//Once timer is done the game is over
//Displays the answers that are correct and incorrect
//If player submits their answers before the time is up the player can click submit button
//Displays the answers that are correct and incorrect
//


var questions = {
    q1: {
        name: "question 1",
        choices: [$("#q1Incorrect1"), $("#q1Incorrect2"), $("#q1Incorrect3"), $("#q1Correct")],
        answer: $("#q1Correct"),
    },
    q2: {
        name: "question 2",
        choices: [$("#q2Incorrect1"), $("#q2Incorrect2"), $("#q2Incorrect3"), $("#q2Correct")],
        answer: $("#q2Correct"),
    },
    q3: {
        name: "question 3",
        choices: [$("#q3Incorrect1"), $("#q3Incorrect2"), $("#q3Incorrect3"), $("#q3Correct")],
        answer: $("#q3Correct"),
    },
    q4: {
        name: "question 4",
        choices: [$("#q4Incorrect1"), $("#q4Incorrect2"), $("#q4Incorrect3"), $("#q4Correct")],
        answer: $("#q4Correct"),
    },
    q5: {
        name: "question 5",
        choices: [$("#q5Incorrect1"), $("#q5Incorrect2"), $("#q5Incorrect3"), $("#q5Correct")],
        answer: $("#q5Correct"),
    },
    q6: {
        name: "question 6",
        choices: [$("#q6Incorrect1"), $("#q6Incorrect2"), $("#q6Incorrect3"), $("#q6Correct")],
        answer: $("#q6Correct"),
    },
    q7: {
        name: "question 7",
        choices: [$("#q7Incorrect1"), $("#q7Incorrect2"), $("#q7Incorrect3"), $("#q7Correct")],
        answer: $("#q7Correct"),
    },
    q8: {
        name: "question 8",
        choices: [$("#q8Incorrect1"), $("#q8Incorrect2"), $("#q8Incorrect3"), $("#q8Correct")],
        answer: $("#q8Correct"),
    }
}   


// Setting the startTime counter to 90
var startTime = 90;
// Variable that will hold our interval ID when we execute
// the "run" function
var intervalId;
                                // hide();
                                // function hide () {
                                    // document.getElementById("quiz").style.display = "none";
                                // }
// .hide() function hides all of the content within the "quiz" div.  .hide() is calling the hide function that is predefined in JQuery.
$("#quiz").hide();
// When the start button gets clicked, run the start function.
$("#start").on("click", run);
console.log(run);
console.log($("#start").on("click",run));


//  The run function sets an interval
//  that runs the decrement function once a second.
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
//  The .show() function shows the content for the "Quiz" Div.
function run() {
    console.log(run);
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#quiz").show();
}
// The decremtn function.
function decrement() {
    // The startTime decreses by one.
    startTime--;
    // Show the time aka the "start Time" in the #timer tag
    $("#timer").html("<h2>" + startTime + " seconds left" + "<h2>");
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