// Variables===================================
var intervalId;
var timer =20;
var timerRunning = false;
   
// Answer Functions================================
function handleClick()
      {  
        var correctAnswers = 0;
        for(var i = 0; i <= 3; i++) {
        var radios = document.getElementsByName('group'+i);
        for(var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if(radio.value == "correct" && radio.checked) {
                correctAnswers++;
                $(".totalCorrect").html(correctAnswers);
                console.log(correctAnswers);
                }
            }
        }                   
      }

//   Time Functions===========================
function count() {
    time--;
    var converted = timeConverter(time);
    $("#timer").text(converted);
}

function timeConverter(t) {
    var seconds = t - (minutes * 60);
    if (seconds < 20) {
        seconds = "0" + seconds;
    }
    
}    

function start() {
    intervalId = setInterval(count, 1000);
  }
  
function stop() {
    console.log("stop");
    clearInterval(intervalId); 
  }

// Process========================================
$(document).ready(function(){

    window.onload = function() {
        $("#playButton").on("click", timer.start);
        start();
        count();
    };

    $("#playButton").on("click", function() {
        console.log("Reset clicked");
        correctAnswers = 0;
        $("#timer").text("20");
    })

    $("#submitButton").on("click", function() {
        handleClick();
        stop();
    })

});



















// }, {
//     question: "Standing four feet tall, what species of penguin is the tallest?",
//     choices: ["Rockhopper", "Adelie", "Emperor", "Macaroni"],
//     correctAnswer: 2
// }, {
//     question: "This famous photograph features a sailor and nurse kisssing on what day?",
//     choices: ["Veterans Day", "Memorial Day", "Independence Day", "VJ Day"],
//     correctAnswer: 3
// }, {
//     question: "What game is considered the oldest board game in the world?",
//     choices: ["Go", "Mah Jongg", "Checkers", "Chess"],
//     correctAnswer: 0
// }, {
//     question: "The color of your brain is predominantly what color?",
//     choices: ["Grey", "White", "Black", "Red"],
//     correctAnswer: 0
// }];
// ==========================

// Functions
// ===========================

    
//     function timeUp() {
//         $("#questions").text(questions[currentQuestion].question);
//         $("#choices").text(questions[currentQuestion].choices);
//         currentQuestion++;
//         for (i=0; i<questions.length; i++) {
//             if (currentQuestion === questions.length) {
//                 stop();
//                 console.log("Condition met");
//                 return;
//         }
//         console.log (questions[currentQuestion].question);   
//         }
//     }

//     function resetQuiz() {
//         currentQuestion = 0;
//         correctAnswers = 0;
//         hideScore();
//     }

//     function displayNewQuestion() {
//         intervalId = setInterval(count, 1000 * 5);
//         console.log("Clicked Start Button");
//         if (timer === 0) {
//             stop();
            
//         }
//     }
    
//     function start() {
//         displayNewQuestion();
//     }

//     function stop() {
//         clearInterval(intervalId);
//     }

//     function hideScore() {
//         $(document).find("#result").hide();
//     }

//     function displayScore() {
//        $(document).find("#result").text("You scored: " + correctAnswers + " out of: " + questions.length);
//     }

// // =============================================

    

// $(document).ready(function() {

//     setInterval(count, 1000 * 5);

//     $("#startButton").on("click", displayNewQuestion);

//     $("#nextButton").on("click", function() {
//         for (i=0; i<questions.length; i++) {
//             if (questions < questions.length[i]) {
//         currentQuestion++;
//             }
//         }
//         start();
//         var timer = setInterval(timeUp, 1000 * 5);
//         if (timer === 0) {
//             timeUp();
//         }
//         console.log("You clicked the button!");
//     });

//     $("#againButton").on("click", function() {
//         resetQuiz();
//     });

// });
