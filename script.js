//questions and answers 
var questions = [

    {
        question: "Commonly used data types DO NOT include:",
        choices: [
            'a: strings',
            'b: booleans',
            'c: alerts',
            'd: numbers'
        ],
        answer: 'c: alerts'
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        choices: [
            'a: quotes',
            'b: curly brackets',
            'c: parentheses',
            'd: square brackets'
        ],
        answer: 'c: parentheses'
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: [
            'a: numbers and strings',
            'b: other arrays',
            'c: booleans',
            'd: all of the above'
        ],
        answer: 'd: all of the above'
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: [
            'a: commas',
            'b: curly brackets',
            'c: quotes',
            'd: parentheses'
        ],
        answer: 'c: quotes'
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            'a: JavaScript',
            'b: terminal/bash',
            'c: for loops',
            'd: console.log'
        ],
        answer: 'd: console.log'
    }

]

var currentQuestionIndex = 0
var score = 0
var startbutton = document.getElementById("startquiz")
var questionsElement = document.querySelector(".questions")
var choicesElement = document.querySelector(".choices")


//when the start button is pressed, questions are displayed.
startbutton.addEventListener("click", start)
nextbutton.addEventListener("click", () => {
    currentQuestionIndex++ 
    setNextQuestion()
})

//timer
function start() 
{
    document.getElementById("timer"); 
    displayQuestions(); 
    var timeRemaining = 60;
    var quizTimer = setInterval(function () {
        if (timeRemaining <= 0){
            clearInterval(quizTimer);
            alert("Game Over")
            document.getElementById("countdown").innerHTML = "Game Over";
        } else {
            document.getElementById("countdown").innerHTML = timeRemaining;
        }
        timeRemaining -= 1;
    }, 1000);
} 


function displayQuestions() {
    
    //console.log (questions[currentQuestionIndex].question)
    questionsElement.textContent = questions[currentQuestionIndex].question
    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        console.log(questions[currentQuestionIndex].choices[i])
        var choices = questions[currentQuestionIndex].choices[i];
        var button = document.createElement("button")
        var lineBreak = document.createElement("br")
        button.classList.add("btn")
        button.classList.add("btn-secondary")
        button.classList.add("mb-2")
        button.textContent = choices
        choicesElement.appendChild(button);
        choicesElement.appendChild(lineBreak);
    }
}