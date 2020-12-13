


// TODO: Create a History Quiz!
var quizList = [
    {
        question: "question 1",
        choices: ["a", "b", "c", "d"],
        correctAnswer: "a"
    }
    {
        question: "question 2",
        choices: ["a", "b", "c", "d"],
        correctAnswer: "c"
    }
]

var timeLeft = 90;

var timerInterval;

var timeEl = document.getElementById("clock")
// Create variable for player score
// Create variable for question index
// Create variable for initials input





function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // quizEnd()
        }

    }, 1000);
}
setTime();
// Create a function to display question and answer
// Create four variables for answers
// Create one variable for question
// Create one variable for the message
// Create conditional for when all questions done
// Create function for end of quiz
// Create function for saved data in local storage (player score)
// TODO: Prompt user to click start button from the home page

// TODO: Once the button is clicked, the countdown timer starts and the user is presented with a series of multiple choice questions

// TODO: For every question answered correctly, they are notified that they got the correct answer

// TODO: If the user answers the question incorrectly, they are notified that their answer was incorrect and 5 seconds are taken off of the timer

// TODO: Once the user has answered all of the questions or the timer reaches 0, the remaining time left on the timer is calculated into a score and presented to them.

// TODO: The user is then prompted to enter their initials through an input field and submitted via a button. Their score is then presented at the top left field of the screen.
