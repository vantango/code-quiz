// TODO: Create a History Quiz!

// TODO: Prompt user to click start button from the home page
var generateQuiz = document.querySelector("#start-quiz");

// Create a function to display question and answer

// TODO: Once the button is clicked, the countdown timer starts and the user is presented with a series of multiple choice questions
var quizList = [
    {
        question: "Who was the 27th President of the United States?",
        choices: ["William Howard-Taft", "Franklin Pierce", "Theodore Roosevelt", "Woodrow Wilson"],
        correctAnswer: "William Howard-Taft"
    },
    {
        question: "What year did the Berlin Conference take place?",
        choices: ["1867", "1995", "1884", "1721",],
        correctAnswer: "1884"
    },
    {
        question: "Which ancient empire ruled the British Isles between 208-11 AD?",
        choices: ["Greeks", "Byzantines", "Romans", "Huns",],
        correctAnswer: "Romans"
    },
    {
        question: "Who invented the world wide web?",
        choices: ["Brendan Eich", "Barbara Liskov", "Alan Turing", "Tim Berners-Lee",],
        correctAnswer: "Tim Berners-Lee"
    },
    {
        question: "What year did Colombia gain it's independence?",
        choices: ["1810", "1782", "1656", "1938",],
        correctAnswer: "1810"
    },
    {
        question: "Which Tsar of Russia freed the serfs?",
        choices: ["Ivan V", "Alexander II", "Peter III", "Catherine II",],
        correctAnswer: "Alexander II"
    },
    {
        question: "Who launched the counter-offensive that initiated the Battle of the Bulge in WWII?",
        choices: ["UK", "Russia", "United States", "Germany",],
        correctAnswer: "Germany"
    },
    {
        question: "Which famous Spanish painter is known for the masterpiece 'Last Meninas?'",
        choices: ["Salvador Dali", "Pablo Picasso", "Diego Velasquez", "Francisco de Goya",],
        correctAnswer: "Diego Velasquez"
    }
]
// Set time
var timeLeft = 60;
var timer = document.querySelector("#clock");
var quizTime = 0;

var timeEl = document.getElementById("clock")

// Create variable for player score
var playerScoreEl = document.getElementById("player-score");

// Create variable for question index
var questionIndex = 0;

// Create variable for initials input
var initials = "initials";
var playerScore = 0;

// Create variables for answers
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var correctAnswer = document.getElementById("correctAnswer")
var questionScreen = document.getElementById("display-questions")



// Create function for end of quiz


// The user is then prompted to enter their initials through an input field and submitted via a button. Their score is then presented at the top left field of the screen.
function gameResults() {
    console.log("game ends")
    var endScreenEl = document.getElementById("end-results-scoreboard")
    endScreenEl.style.display = "block";
    questionScreen.style.display = "none"
    // localStorage.setItem(
    //     "preferences",
    //     JSON.stringify({
    //         workMinutes: workMinutesInput.value.trim(),
    //         restMinutes: restMinutesInput.value.trim()
    //     })
    // );
    // Set the score on player-score element 
}

// Grab value of the playscore and the intials 
// Create function for saved data in local storage (player score)


//use localstorage.setItem() 


function validateAnswer() {
    // If the answer is right, add 5 seconds to the time left 
    if (this.textContent === quizList[questionIndex].correctAnswer) {
        // Variable for the message
        // Penalty time + 5 seconds
        timeLeft = timeLeft + 5;
        correctAnswer.textContent = "Correct!"
    } else {
        // Penalty time - 5 seconds 
        timeLeft = timeLeft - 5;
        correctAnswer.textContent = "Incorrect!"
    }

    // Move to next question 
    questionIndex++;

    // Conditional for when all questions done
    // Reaches last question 
    if (questionIndex === quizList.length) {
        gameResults()
    }
    else (
        displayQuestion()
    )
}

function displayQuestion() {

    // Displays my current question here 
    var question1 = document.getElementById("display-question")
    question1.textContent = quizList[questionIndex].question

    // Setting my answer choices for the current question index 
    answer1El.textContent = quizList[questionIndex].choices[0]
    answer2El.textContent = quizList[questionIndex].choices[1]
    answer3El.textContent = quizList[questionIndex].choices[2]
    answer4El.textContent = quizList[questionIndex].choices[3]

    answer1El.value = quizList[questionIndex].choices[0]
    answer2El.value = quizList[questionIndex].choices[1]
    answer3El.value = quizList[questionIndex].choices[2]
    answer4El.value = quizList[questionIndex].choices[3]
    console.log(answer1El)

    // Adding Event listinere on click of each ans button 
    answer1El.onclick = validateAnswer;
    answer2El.onclick = validateAnswer;
    answer3El.onclick = validateAnswer;
    answer4El.onclick = validateAnswer;
}

// User clicks start button to launch first question in index
generateQuiz.addEventListener("click", function () {
    document.querySelector("#display-questions").style.display = "block";
    document.querySelector("#start-screen").style.display = "none";
    displayQuestion()
    // Once the user has answered all of the questions or the timer reaches 0, the remaining time left on the timer is calculated into a score and presented.
    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft + " seconds left in quiz";
        if (timeLeft === 0 || questionIndex === 7) {
            clearInterval(timeInterval);
        }
    }, 1000);
})






// TODO: For every question answered correctly, they are notified that they got the correct answer

// TODO: If the user answers the question incorrectly, they are notified that their answer was incorrect and 5 seconds are taken off of the timer






