var readlineSync = require("readline-sync");
const chalk = require("chalk");

var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + "! Do You Know Me?");

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(chalk.green("You are Right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("You are Wrong!"));
  }

  console.log(chalk.blue("Score: " + score));
  console.log("---------");
}

var questions = [
  {
    question: "What is my Name? ",
    answer: "Imran",
  },
  {
    question: "Where do I live? ",
    answer: "Gorakhpur",
  },
  {
    question: "My favourite Movie? ",
    answer: "Harry Potter",
  },
  {
    question: "I am a Tea or Coffee Person? ",
    answer: "Coffee",
  },
  {
    question: "I am Graduated In ",
    answer: "Computer Science",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.bgGreen("Total Score: " + score));
