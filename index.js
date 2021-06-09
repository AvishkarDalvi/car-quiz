var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question('What is your name? ');

console.log('Welcome ' + userName + ' to Are you a car geek?');

var correct=true;

function play(question, answer,level) {
  console.log('Level '+level);
  var userAns = readlineSync.question(question);
  if (userAns === answer) {
    score = score + 1;
    console.log('Right!');
  } else {
    console.log('Wrong!');
    correct=false;
  }
  console.log('Current score is ', score);
  console.log('________________________');
}

var questionOne = {
  question: 'How many rings are there in the Audi logo? ',
  answer: '4'
};

var questionTwo = {
  question: 'What does the commonly used automotive abbreviation ABS stand for? ',
  answer: 'anti lock braking system'
};

var questionThree = {
  question: 'Which was the first Bond film to star an Aston Martin? ',
  answer: 'Goldfinger'
};

var questionFour = {
  question: 'What does BMW stand for? ',
  answer: 'Bayerische Motoren Werke'
};

var level1 = [questionOne, questionTwo];

var level2 = [questionThree, questionFour];

var questions = [level1, level2];

for (let i = 0; i < questions.length; i++) {
  const level = questions[i];
  for (let j = 0; j < level.length; j++) {
    play(level[j].question, level[j].answer,i+1);
    if(correct && j===(level.length-1)){
      console.log('You have cleared this level!');
    }
  }
  if(!correct){
    console.log('You have failed this level!');
    break;
  }
}


