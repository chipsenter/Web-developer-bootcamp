var userInput1 = prompt("Let's see if we can convert Fahrenheit to Celsius?, Input Fahrenheit");

var Fahrenheit = (userInput1 - 32) * 5 / 9;
alert("That's gonna be " + Fahrenheit.toFixed(2) + " °C");
if (Fahrenheit > 15) {
  alert("I can live with that!");
} else {
  alert("This shit is to cold for me!");
}

var userInput2 = prompt("Let's see if we can convert Celsius to Fahrenheit?, Input Celsius");

var celsius = (userInput2 * 9 / 5) + 32;
alert("That's gonna be " + celsius.toFixed(2) + " °F");
if (celsius >= 50) {
  alert("I can live with that!");
}
else {
  alert("This shit is to cold for me!");
}

// var userInput3 = prompt("Let's see if we can convert Celsius to Kelvin?, Input Celsius");

// var kelvin = Number(userInput3) + 273.15;

// alert("That's gonna be " + kelvin + " K");
// if(kelvin >= 290) {
//   alert("I can live with that!");
// }
//  else {
//   alert("This shit is to cold for me!");
// }

function getInput() {
  var userInput3 = NaN;
  var count = 0
  while (isNaN(userInput3)) {
    userInput3 = Number(prompt((count++ ? 'Your answer was incorrect. Please try again \n' : '') + "Let's see if we can convert Celsius to Kelvin?, Input Celsius"))
  }
  return userInput3
}

var kelvin = getInput() + 273.15;

alert("That's gonna be " + kelvin + " K");
kelvin >= 280
  ? alert("I can live with that!")
  : alert("This shit is to cold for me!")


function getInput2() {
  var userInput4 = NaN;
  var count = 0
  while (isNaN(userInput4)) {
    userInput4 = Number(prompt((count++ ? 'Your answer was incorrect. Please try again \n' : '') + "Let's see if we can convert Kelvin to Celsius?, Input Kelvin"))
  }
  return userInput4
}

var kelvin2Celsius = getInput2() - 273.15;

alert("That's gonna be " + kelvin2Celsius.toFixed(2) + " °C");
kelvin2Celsius >= 10
  ? kelvin2Celsius >= 50
    ? alert("Im melting here!")
    : alert("I can live with that!")
  : alert("This shit is to cold for me!")  