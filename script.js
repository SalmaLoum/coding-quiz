/* Questions*/
var questions = [
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

/* Global Variables */
var timerElement = document.querySelector("#countdown");
var startButton = document.querySelector("#quiz-button");
var startQuiz = document.querySelector(".intro");
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var scoreForm = document.querySelector(".score-form");
var answerPrompt = document.querySelector(".responses");
var questionsIndex = 0;
var scoreSave = document.querySelector("#form");
var initialName = document.querySelector("#initials");
var scores = document.querySelector("#final-highscores");
var timeLapsed;
var timerCountDown = 40;
var scoresArray = [];
var finalScore = document.querySelector(".high-score");
var userScore = 0;

//Saving new initials to local storage
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

for (var i = 0; i < highScores.length; i++) {
  var score = document.createElement("p");
  score.textContent = highScores[i].initials + " " + highScores[i].score;
  scores.append(score);
  console.log(scores);
}

//Eventlistener for submitting initials
scoreSave.addEventListener("submit", function (event) {
  event.preventDefault();
  var info = {
    initials: initialName.value.trim(),
    score: userScore,
  };
  highScores.push(info);

  //Creating local storage in the browser
  localStorage.setItem("highScores", JSON.stringify(highScores));
  scores.innerHTML = "";
  for (var i = 0; i < highScores.length; i++) {
    var score = document.createElement("p");
    score.textContent = highScores[i].initials + " " + highScores[i].score;
    scores.append(score);
  }
});

// Starting game and displaying questions and answers only after user clicks the "start Game" button
function startGame() {
  startQuiz.style.display = "none";
  scoreForm.style.display = "none";

  displayAnswers();
  displayQuestions();
  timer();
}

//Starting the game
startButton.addEventListener("click", startGame);

//Adding each question on the screen.
function displayQuestions() {
  questionsEl.innerHTML = "";
  questionsEl.textContent = questions[questionsIndex].question;
}

//Validating the right answer & moving to the next question.
function renderNextQuestion(event) {
  if (event.target.textContent == questions[questionsIndex].correct) {
    answerPrompt.innerHTML = "Correct Answer!";
    userScore++;
  } else {
    answerPrompt.innerHTML = "Wrong Answer";
    //Deducting 10 seconds when wrong answers are clicked.
    timerCountDown -= 10;
  }

  //Showing the scores after ending the quiz while hiding the questions & answers
  questionsIndex++;
  if (questionsIndex == questions.length) {
    scoreForm.style.display = "block";
    questionsEl.style.display = "none";
    answersEl.style.display = "none";
    answerPrompt.style.display = "none";
    //stopping the time
    finalScore.textContent = "Your score is : " + userScore;
    clearInterval(timeLapsed);
    return;
  }

  displayAnswers();
  displayQuestions();
}

//Adding each answer on the screen.
function displayAnswers() {
  answersEl.innerHTML = "";
  var answerButton1 = document.createElement("button");
  answerButton1.textContent = questions[questionsIndex].choiceA;
  answerButton1.addEventListener("click", renderNextQuestion);
  answersEl.appendChild(answerButton1);

  var answerButton2 = document.createElement("button");
  answerButton2.textContent = questions[questionsIndex].choiceB;
  answerButton2.addEventListener("click", renderNextQuestion);
  answersEl.appendChild(answerButton2);

  var answerButton3 = document.createElement("button");
  answerButton3.textContent = questions[questionsIndex].choiceC;
  answerButton3.addEventListener("click", renderNextQuestion);
  answersEl.appendChild(answerButton3);

  var answerButton4 = document.createElement("button");
  answerButton4.textContent = questions[questionsIndex].choiceD;
  answerButton4.addEventListener("click", renderNextQuestion);
  answersEl.appendChild(answerButton4);
}

//Timer to count down and stop when reaching 0
function timer() {
  timeLapsed = setInterval(function () {
    timerCountDown--;
    timerElement.textContent = timerCountDown;
    if (timerCountDown <= 0) {
      answerPrompt.innerHTML = "You're out of time! Refresh and try again";
      finalScore.textContent = "Your score is : " + userScore;
      scoreForm.style.display = "block";
      questionsEl.style.display = "none";
      answersEl.style.display = "none";

      clearInterval(timeLapsed);
      return;
    }
  }, 1000);
}
