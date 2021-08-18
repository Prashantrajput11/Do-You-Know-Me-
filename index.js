var readlineSync = require('readline-sync');
const chalk = require('chalk');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log(chalk.yellowBright(` hello ${userName}`));
// var isknown = readlineSync.question('Do you know Prashant? ');
if (readlineSync.keyInYN('Do you know Prashant? ')) {
  // 'Y' key was pressed.
  console.log('let us play then');
  // Do something...
} else {
  // Another key was pressed.
  console.log('Tata Bye Bye Khatam...');
  process.exit();
  // Do something...
}
var score=0;


function knowMeQuiz(question,answer)
{
  // var userans=readlineSync.question(question);
  var user_ans=readlineSync.question(question);

if(user_ans.toLowerCase()===answer)
{
  console.log(chalk.green.bold("yay ! right"));
  score=score+2;
  console.log(chalk.bgRed(`your score is ${score}`));
   console.log(` ---------------------`);
}
else
{
  console.log(chalk.red.bold("oops! this is a wrong choice"));
  score=score-1;
  console.log(chalk.bgRed(`your score is ${score} `));
}

}


var questions=[
{
  ques:"What is Prashant favourite food? (Hint :  mama mia)",
  ans:"pasta"
},

{
  ques:"What is Prashant favourite web series? (Hint : Vampires) ",
  ans:"tvd"
},

{
  ques:"Where do Prashant Live?(Hint : Kejriwal) ",
  ans:"delhi"
},

{
  ques:"What is Prashant age ? (Hint : 21tea4) ",
  ans:"24"
},
{
  ques:"Does Prashant wear spects?",
  ans: "yes"
},

{
  ques:"Does Prashant love reading books?",
  ans: "yes"
}
];

for(var i=0;i<questions.length;i++)
{
  var curr_question=questions[i];
    knowMeQuiz(curr_question.ques,curr_question.ans);
}

  console.log(chalk.bgBlueBright(` hey ${userName}, your final score is ${score}`));


  
