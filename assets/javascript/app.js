//How can I control when the game starts without displaying the questions?
// Game starts when start button is clicked
// Timer starts 
//Timer has 1 minute and 20 seconds
//Once timer is done the game is over
//Displays the answers that are correct and incorrect
//If player submits their answers before the time is up the player can click submit button
//Displays the answers that are correct and incorrect
//
var correct = 0
var incorrect = 0
var questions = [
    {
        question: "What is the first voice we hear in The Fellowship of the Ring?",
        answers: [ 'Frodo', 'Gandalf', 'Bilbo', 'Galadriel'],
        correctAnswer: 'Galadriel'
    },
    {
        question: "Who is in possesion of the Ring of Power before Bilbo?",
        answers: [ 'Gandalf', 'Elrond', 'Gollum', 'Galadriel'],
        correctAnswer: 'Gollum'
    },
    {
        question: "Saruman says to Gandalf, 'The Nine have left Minas Morgul. They crossed the River Isen on Midsummers Eve, disguised as riders in black.' Who was Saruman referring too?",
        answers: [ 'Orcs', 'The Nazgul', 'Goblins', 'Trolls'],
        correctAnswer: 'The Nazgul'
    },
    {
        question: "Once the Ring Wraiths trap the hobbits on the Weathertop and stab Frodo with a Morgul Blade - who comes to their aid?",
        answers: [ 'Aragorn', 'Gandalf', 'Gimli', 'Legolas'],
        correctAnswer: 'Aragorn'
    },
    {
        question: "How many companions set off from Rivendell and form what is known as The Fellowship of the Ring?",
        answers: [ '8', '7', '11', '9'],
        correctAnswer: '9'
    },
    {
        question: "'You shall not pass!' This famous quote is yelled by whom when battling the Belrog in Moria?",
        answers: [ 'Boromir', 'Gandalf', 'Legolas', 'Aragorn'],
        correctAnswer: 'Gandalf'
    },
    {
        question: "The Lord of the Rings almost bankrupted which film company?",
        answers: [ 'Universal Studios', 'Warner Bros.', 'Disney', 'New Line Cinema'],
        correctAnswer: 'New Line Cinema'
    },
    {
        question: "In what country is the movie The Lord of the Rings filmed?",
        answers: [ 'Australia', 'New Zealand', 'Scottland', 'England'],
        correctAnswer: 'New Zealand'
    }
];

// var questions = {
//     q1: {
//         name: "question 1",
//         choices: [$("#q1Incorrect1"), $("#q1Incorrect2"), $("#q1Incorrect3"), $("#q1Correct")],
//         answer: $("#q1Correct"),
//     },
//     q2: {
//         name: "question 2",
//         choices: [$("#q2Incorrect1"), $("#q2Incorrect2"), $("#q2Incorrect3"), $("#q2Correct")],
//         answer: $("#q2Correct"),
//     },
//     q3: {
//         name: "question 3",
//         choices: [$("#q3Incorrect1"), $("#q3Incorrect2"), $("#q3Incorrect3"), $("#q3Correct")],
//         answer: $("#q3Correct"),
//     },
//     q4: {
//         name: "question 4",
//         choices: [$("#q4Incorrect1"), $("#q4Incorrect2"), $("#q4Incorrect3"), $("#q4Correct")],
//         answer: $("#q4Correct"),
//     },
//     q5: {
//         name: "question 5",
//         choices: [$("#q5Incorrect1"), $("#q5Incorrect2"), $("#q5Incorrect3"), $("#q5Correct")],
//         answer: $("#q5Correct"),
//     },
//     q6: {
//         name: "question 6",
//         choices: [$("#q6Incorrect1"), $("#q6Incorrect2"), $("#q6Incorrect3"), $("#q6Correct")],
//         answer: $("#q6Correct"),
//     },
//     q7: {
//         name: "question 7",
//         choices: [$("#q7Incorrect1"), $("#q7Incorrect2"), $("#q7Incorrect3"), $("#q7Correct")],
//         answer: $("#q7Correct"),
//     },
//     q8: {
//         name: "question 8",
//         choices: [$("#q8Incorrect1"), $("#q8Incorrect2"), $("#q8Incorrect3"), $("#q8Correct")],
//         answer: $("#q8Correct"),
//     }
// }   


// Setting the startTime counter to 90
var startTime = 90;
// Variable that will hold our interval ID when we execute
// the "run" function
var intervalId;

var usersChoice = $()
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
var select = document.getElementsByTagName("input")


//  The run function sets an interval
//  that runs the decrement function once a second.
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
//  The .show() function shows the content for the "Quiz" Div.
function run() {
    console.log(run);
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#quiz").show();
    

    // loop through the questions object and 

}

function start () {
    var quizBox = $("#quiz")
    for (var i = 0; i < questions.lenght; i++){
        quizBox.append("<h3>" + questions[i].question + "</h3>")
        for (var j = 0; j < questions[i].answers.length; j++){
            quizBox.append("<input type='radio' name='question-" + i + " ' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j])
        }
    }
}

function done () {
    $.each($("input[name='question-0]:checked"), function() {
        if($(this).val() === questions[0].correctAnswer){
            correct++
        } else {
            incorrect++
        }  
    })

    $.each($("input[name='question-1]:checked"), function() {
        if($(this).val() === questions[1].correctAnswer){
            correct++
        } else {
            incorrect++ 
    }
    })
    $.each($("input[name='question-2]:checked"), function() {
        if($(this).val() === questions[2].correctAnswer){
            correct++
        } else {
            incorrect++
        }
    })

    $.each($("input[name='question-3]:checked"), function() {
        if($(this).val() === question[3].correctAnswer){
            correct++
        } else {
            incorrect++
        }
    })

    $.each($("input[name='question-4]:checked"), function() {
        if($(this).val() === question[4].correctAnswer){
            correct++
        } else {
            incorrect++
        }
    })

    $.each($("input[name='question-5]:checked"), function() {
        if($(this).val() === question[5].correctAnswer){
            correct++
        } else {
            incorrect++
        }
    })

    $.each($("input[name='question-6]:checked"), function() {
        if($(this).val() === question[6].correctAnswer){
            correct++
        } else {
            incorrect++
        }
    })

    $.each($("input[name='question-7]:checked"), function() {
        if($(this).val() === question[7].correctAnswer){
            correct++
        } else {
            incorrect++
        }
    })
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

