//Loop1

// var count = 1;

// while(count < 20) {
//   console.log("Count is: " + count)
//   count+=2;
// }

//Loop2

// var str = prompt("hello, input something");

// var count = 0;

// while(count < str.length) {
//   console.log(str[count]);
//   count++
// }

//Loop3 print all the odd numbers up to 9

// var num = 1;

// while(num <= 10) {
//   console.log("You printed: " + num )
//   num += 2;
// }

//Loop4 print every 4th number up to 20

// var num = 1;

// while(num <= 20 ){
//   if(num % 4 === 0){
//     console.log("You printed: " + num)
//   }
//   num++
// }

//Loop5 print every num from 100 up to 150

// var num = 100;

// while(num <= 150) {
//   console.log(num + 1)
//   num++;
// }

//Loop6 print all numbers between -10 and 19

// var num = -10;

// while(num <= 19){
//   console.log("You printed " + num)
//   num++
// }

//Loop7 print all even numbers between 10 and 40

// var num = 10;

// while(num <= 40){
//   if(num % 2 === 0)
//   console.log("You printed: " + num)
//   num++;
// }

//Loop8 print alle odd numbers between 300 and 333

// var num = 300;

// while(num <= 333){
//   if(num % 2 !== 0)
//   console.log("You printed: " + num)
//   num++;
// }

//loop9 print all numbers divisible by 5 and 3 between 5 and 50

// var num = 5;

// while(num <= 50) {
//   if(num % 5 === 0 && num % 3 === 0){
//     console.log("You printed: " + num);
//   }
//   num++
// }

//loop10 Annoy-omatic practice

// var input = prompt("Are we there yet?");

// while(input !== "yes" && input !== "yeah"){
//   alert("You need to answer")
//   var input = prompt("Are we there yet?");
// }

// alert("Yay, You made it!")

//loop11 Annoy-omatic practice 2

var input = prompt("Are we there yet?");

while(input.indexOf("yes") === -1){
  alert("Keep trying then..")
  var input = prompt("Are we there yet?");
}

alert("Yay, You made it!")