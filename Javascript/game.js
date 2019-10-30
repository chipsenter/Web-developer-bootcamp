
var secretNumber = 4;

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess)

  if (guess === secretNumber){
    alert("You guessed the right number!")
  } 
  else if(guess > secretNumber){
    alert("You guessed Too high..Guess again!")
  } 
  else {
    alert("You guessed Too low!..Guess again!")
  } 



  


