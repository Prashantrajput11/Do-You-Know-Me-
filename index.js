var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log(` hello ${userName}, Do you know Prashant ?`);
var score=0;


function knowMeQuiz(question,answer)
{
  // var userans=readlineSync.question(question);
  var userans=readlineSync.question(question);

if(userans===answer)
{
  console.log("yay ! right");
  score=score+2;
  console.log(`your score is ${score}`);
   console.log(` ---------------------`);
}
else
{
  console.log("oops! this is a wrong choice");
  score=score-1;
  console.log(`your score is ${score}`);
}

}
var questions=[
{
  ques:"What is Prashant favourite food?",
  ans:"pasta"
},

{
  ques:"What is Prashant favourite web series?",
  ans:"tvd"
},

{
  ques:"What do Prashant Live?",
  ans:"delhi"
},

{
  ques:"What is Prashant age ? ",
  ans:"24"
}
];

for(var i=0;i<questions.length;i++)
{
  var currQuestion=questions[i];
    knowMeQuiz(currQuestion.ques,currQuestion.ans);
}

  console.log(` hey ${userName}, your final score is ${score}`);


  
