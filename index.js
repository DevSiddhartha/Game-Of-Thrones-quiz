var readlineSync = require("readline-sync");
const chalk = require('chalk');

var userName = readlineSync.question("Enter your name : ");
console.log(chalk.redBright("DRACARYS ! \n"));
console.log(chalk.greenBright("M’ATHCHOMAROON! \n"))
console.log("Welcome " + userName + " to DO YOU KNOW GAME OF THRONES !");
console.log("\nGame of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO.\n")
console.log("Instructions: Type the option name (a,b,c,d) and press Enter.\n");

var score = 0;

//high score array object
var highScore = [
  {
    name : "Sid",
    score : 5
  }
]

//array of objects

var questions = [
  { question : "What is the name of Jon's direwolf? ? \n a)Nymeria \n b)Summer \n c)Grey Wind \n d)Ghost \n",
  answer : "d"
  },
  {
    question : "How many fingertips did Stannis Baratheon chop off of Davos' hand(s)? \n a)One \n b)Four \n c)Two \n d)Three \n",
    answer : "b"
  },
  {
    question : "Who is king of Westeros when the the series begins? \n a)Robert Baratheon \n b)Eddard Stark \n c)Tywin Lanniste \n d)Aerys Targaryan \n",
    answer : "a"
  },
  {
    question : "What noble house is Catelyn Stark from? \n a)House Stark \n b)House Martell \n c)House Tully \n d)House Lannister \n",
    answer : "c"
  },
  {
    question : "Which chemical was used during the Battle of the Blackwater to destroy Stannis Baratheon's fleet? \n a)Essence of Nightshade \n b)Milk of the poppy \n c)Wildfire \n d)The Strangler \n",
    answer : "c"
  },
  {
    question : "Which character did The Mountain kill when he took on ‘the Viper’? \n a)Oberyn Martell \n b)Doran Martell \n c)Jaime Lannister \n d)Tyrion Lannister \n",
    answer : "a"
  }
]

//function for calling game
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log(chalk.greenBright("right !"));
    score++;
  }else{
    console.log(chalk.redBright("wrong !"));
  }
  console.log("current score is: " + score);
  console.log("-------------------------");
}

for(var i = 0; i < questions.length; i++){
  play(questions[i].question, questions[i].answer);
}
console.log(chalk.blue.bold("Your score is : " + score));
console.log(chalk.bgBlue("\nCurrent High Score = 4"));
console.log("Send me a screenshot if your score is more than current high score !");
console.log(chalk.greenBright("SAN ATHCHOMARI YERAAN!"));