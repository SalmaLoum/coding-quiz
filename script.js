/* Varaibles*/
var timerElement = document.querySelector(".timelapsed");
var startButton = document.querySelector("#quiz-button");
var startQuiz = document.querySelector(".intro");
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");

/* Questions*/

let questions = [
  {
    question: "What is not an example of an HTML event? ",
    choiceA: "Webpage loading",
    choiceB: "Webpage background is gradient",
    choiceC: "User clicking a mouse",
    choiceD: "User hitting a key",
    correct: "User clicking a mouse",
  },
  {
    question: "Which method would you use to find an ID element? ",
    choiceA: "GetElementByID()",
    choiceB: "getElementById()",
    choiceC: "getElementbyId()",
    choiceD: "getElement()",
    correct: "getElementbyId()",
  },
  {
    question: "Javascript variables can be ______ ",
    choiceA: "globally scoped",
    choiceB: "locally scoped",
    choiceC: "function scoped",
    choiceD: "all of the above",
    correct: "all of the above",
  },
  {
    question: "The first index of an array is ____. ",
    choiceA: "1",
    choiceB: "2",
    choiceC: "-1",
    choiceD: "0",
    correct: "0",
  },
  {
    question: "What are Javascript's Boolean data type values?",
    choiceA: "True and false",
    choiceB: "Property and key name",
    choiceC: "Value and index",
    choiceD: "Class and id",
    correct: "True and false",
  },
  {
    question:
      "'I like the movie Apocalypse Now' can be considered _____ in Javascript",
    choiceA: "a string",
    choiceB: "a number",
    choiceC: "a boolean value",
    choiceD: "your sad opinion",
    correct: "a string",
  },
  {
    question:
      "To see if two variables are equal in an if / else statement you would use ____. ",
    choiceA: "=",
    choiceB: "==",
    choiceC: "!=",
    choiceD: "'equals'",
    correct: "==",
  },
];

function startGame() {
  console.log("the game is starting");
  console.log(startQuiz);

  startQuiz.style.display = "none";
  displayAnswers();
  displayQuestions();
}

startButton.addEventListener("click", startGame);

//Adding each answer on the screen.

var questionsIndex = 0;

function displayAnswers() {
  var answerButton1 = document.createElement("button");
  answerButton1.textContent = questions[questionsIndex].choiceA;
  console.log(answerButton1);

  answersEl.appendChild(answerButton1);
}

//Adding each question on the screen.
function displayQuestions() {
  questionsEl.textContent = questions[questionsIndex].question;
}

//adding an event listener for choosing the answer
//in the for loop addEventListener ++  on the answers div
