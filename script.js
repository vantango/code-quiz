


// TODO: Create a History Quiz!

// TODO: Prompt user to click start button from the home page
btn.addEventListener("click", quizList)
var generateQuiz = document.querySelector("btn");

// Create a function to display question and answer
function displayQuiz(quizList) {

    // TODO: Once the button is clicked, the countdown timer starts and the user is presented with a series of multiple choice questions
    var quizList = [
        {
            question1: "Who was the 27th President of the United States?",
            choices: {
                A: "William Howard Taft",
                B: "Franklin Pierce",
                C: "Theodore Roosevelt",
                D: "Woodrow Wilson"
            }
        correctAnswer = "A"
        }
        {
            question2: "What year did the Berlin Conference take place?",
            choices: {
                A: "1867",
                B: "1995",
                C: "1884",
                D: "1721",
            }
            correctAnswer = "C"
        }
        {
            question3: "Which ancient empire ruled the British Isles between 208-11 AD?",
            choices: {
                A: "Greeks",
                B: "Byzantines",
                C: "Romans",
                D: "Huns",
            }
        correctAnswer = "C"
        }
        {
            question4: "Who invented the world wide web?",
            choices: {
                A: "Brendan Eich",
                B: "Barbara Liskov",
                C: "Alan Turing",
                D: "Tim Berners-Lee",
            }
        correctAnswer = "D"
        }
        {
            question5: "What year did Colombia gain it's independence?",
            choices: {
                A: "1810",
                B: "1782",
                C: "1656",
                D: "1938",
            }
        correctAnswer = "A"
        }
        {
            question6: "Which Tsar of Russia freed the serfs?",
            choices: {
                A: "Ivan V",
                B: "Alexander II",
                C: "Peter III",
                D: "Catherine II",
            }
        correctAnswer = "B"
        }
        {
            question7: "Who launched the counter-offensive that initiated the Battle of the Bulge in WWII?",
            choices: {
                A: "UK",
                B: "Russia",
                C: "United States",
                D: "Germany",
            }
        correctAnswer = "D"
        }
        {
            question8: "Which famous Spanish painter is known for the masterpiece 'Last Meninas?'",
            choices: {
                A: "Salvador Dali",
                B: "Pablo Picasso",
                C: "Diego Velasquez",
                D: "Francisco de Goya",
            }
        correctAnswer = "C"
        }
    ]
}
var timeLeft = 90;

var timerInterval;

var timeEl = document.getElementById("clock")
// Create variable for player score
var playerScore = document.getElementById("player-score");
// Create variable for question index
var questionIndex = document.getElementById("display-question"[0]);
// Create variable for initials input
var initials = "initials";









// Create four variables for answers
var answer1 = "A";
var answer2 = "B";
var answer3 = "C";
var answer4 = "D";
// Create one variable for question
var question =;
// Create one variable for the message
// Create conditional for when all questions done
// Create function for end of quiz
// Create function for saved data in local storage (player score)





function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Game Over!";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // quizEnd()
        }
    }, 1000);
}

setTime();

// TODO: For every question answered correctly, they are notified that they got the correct answer

// TODO: If the user answers the question incorrectly, they are notified that their answer was incorrect and 5 seconds are taken off of the timer

// TODO: Once the user has answered all of the questions or the timer reaches 0, the remaining time left on the timer is calculated into a score and presented to them.



// TODO: The user is then prompted to enter their initials through an input field and submitted via a button. Their score is then presented at the top left field of the screen.
