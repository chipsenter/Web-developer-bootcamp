// Function Practise 1
function singSong() {
  console.log("Twinkle, twinkle, little star,");
  console.log("How I wonder what you are!");
  console.log("Up above the world so high,");
  console.log("Like a diamond in the sky.");
}
// singSong()
// singSong()
// singSong()
// singSong()

// Function Practise 2
function square(num) {
  console.log(num * num)
}
// square(10)
// square(3)
// square(4)

// Function Practise 3
function sayHello(name) {
  var userName = prompt("Hi there my name is Johan, What is your name?");
  alert("Hi " + userName + " Nice to meet you, let me calculate the area for you?")
}
//sayHello();

// Function Practise 4
function area(length, width) {
  var length = prompt("Enter Length in meters.");
  var width = prompt("Enter width in meters.");
  alert("Your area will be: " + length * width + "square meters!");


}
//area()

// Function Practise 5
// Function declaration 
// function capitalize(str){
//   return str.charAt(0).toUppercase() + str.slice(1);
// }
// capitalize()

// Function expression 

// var capitalize = function(str) {
//   return str.charAt(0).toUppercase() + str.slice();
// }

//Function Practise 6

// function test(x, y) {
//   return y - x;
// }
// test(10,40);

//Function Practise 6

// function test(x) {
//   return x*2;
//   console.log(x);
//   return x/2;
// }
// test(40);

//Function Practise 7 v.1

// function isEven(num) {
//   var num = prompt("Check if your number is Odd or Even..")
//   if(num % 2 === 0){
//     return true;
//   } else {
//     return false;
//   }

// }
// isEven();

//Function Practise 7 v.2

//  function isEven(num) {
//     return num % 2 === 0;
//  }
//  isEven();

//Function Practise 8

// function factorial(num)
// {
//     if (num === 0) {
//        return 1; }
//     else
//       { return num * factorial( num - 1 ); }
// }
// factorial(5);

//Function Practise 8

// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }
//   else { return num * factorial(num - 1); }
// }
// factorial(5);

//Function Practise 9

function kebabToSnake(str) {
  var res = str.replace(/-/g, "_");
  return res;
}
kebabToSnake("kebab-snake-johan");
