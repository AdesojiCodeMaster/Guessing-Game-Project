// Import readline module
const readline = require('readline');

// create realine interphase;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = randomInRange(0, 100);

let numAttempts = 4;


function checkGuess(num){
 if(num > secretNumber){
    console.log('Too high');
    return false;
 } else if (num < secretNumber){
    console.log('Too low');
    return false;
 } else { console.log('Correct!');
return true;}

}

function askGuess(){
  rl.question('Enter your secret number: ', (answer)=>{
      if(checkGuess(Number(answer)) === true){
         console.log('You Won!');
         rl.close();
      } else if (numAttempts === 0){
         console.log('You Lose!');
         rl.close();
      } else {
      askGuess();
      numAttempts--;}
   });
}


function randomInRange(min, max){
   let random = Math.floor(Math.random() * (max - min + 1)) + min;
   return random;
}





function askRange(){
   rl.question('Enter a max number: ', (answer1)=>{
      console.log('*'+answer1+'*');
   rl.question('Enter a min number: ', (answer2)=>{
      console.log('*'+answer2+'*');
      console.log("I'm thinking of a number between" + ' '+ answer2 + ' '+ 'and' + ' '+ answer1 + '...');

      secretNumber = randomInRange(Number(answer2), Number(answer1));

      askGuess();
     })
   })
}



function askLimit(){
   rl.question('Enter game limits: ', (answer)=>{
      numAttempts = Number(answer) - 1;
      askRange();
      askGuess();
   })
}

askLimit();
