


// TODO: Create a History Quiz!
var quizList = [
    {
        question: "Who was the 27th President of the United States?",
        choices: ["William Howard Taft", "Franklin Pierce", "Theodore Roosevelt", "Woodrow Wilson"],
        correctAnswer: "William Howard Taft"
    }
    {
        question: "What year did the Berlin Conference take place?",
        choices: ["1867", "1995", "1884", "1721"],
        correctAnswer: "1884"
    }
    {
        question: "Which ancient empire ruled the British Isles between 208-11 AD?",
        choices: ["Greeks", "Byzantines", "Romans", "Huns"],
        correctAnswer: "Romans"
    }
    {
        question: "Who invented the world wide web?",
        choices: ["Brendan Eich", "Barbara Liskov", "Alan Turing", "Tim Berners-Lee"],
        correctAnswer: "Tim Berners-Lee"
    }
    {
        question: "What year did Colombia gain it's independence?",
        choices: ["1810", "1782", "1656", "1938"],
        correctAnswer: "1810"
    }
    {
        question: "Which Tsar of Russia freed the serfs?",
        choices: ["Ivan V", "Alexander II", "Peter III", "Catherine II"],
        correctAnswer: "Alexander II"
    }
    {
        question: "Who launched the counter-offensive that initiated the Battle of the Bulge in WWII?",
        choices: ["UK", "Russia", "United States", "Germany"],
        correctAnswer: "Germany"
    }
    {
        question: "Which Spanish painter is known for the masterpiece 'Last Meninas?'",
        choices: ["Salvador Dali", "Pablo Picasso", "Diego Velasquez", "Francisco de Goya"],
        correctAnswer: "Diego Velasquez"
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
        timeEl.textContent = secondsLeft + "Round over!";

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
