alert("Hello from the JS file");

var userName = prompt("What's your first name?");
var userLastName = prompt("What's your last name?");
var userAge = prompt('How old are you?');
var fullName = (userName + " " + userLastName);

if (userAge >= 35){
  alert("Your an old fucker!")
} else if( userAge < 20 && userAge > 15) {
  alert("You are just a teenager hahaha..")
} else {
  alert("You are a little kiddo! GO HOME!")
}

alert("Nice to meet you, " + userName + " Your full name is " + fullName);
alert("You are " + userAge + " years old!");
console.log("Nice to meet you, " + userName + " Your full name is " + userName + " " + userLastName);
console.log("You are " + userAge + " old!");