//for loop excersise 1

// for(let i = 0; i < 5; i++){
//   console.log(i)
// }

//for loop excersise 2

// let str = "hello";

// for(let i = 0; i < str.length; i++){
//   console.log(str[i]);
// }

//for loop excersise 3

// for(let i = 0; i < 16; i+= 8){
//   console.log(i);
//}

//for loop excersise 4

var str = "ahceclwlxo";

for(let i = 1; i < str.length; i+= 2){
  console.log(str[i]);
}

//for loop excersise 5
console.log("Print All numbers between -10 and 19");
for(let i = -10; i < 20; i++){
  
  console.log(i)
}

//for loop excersise 6
console.log("Print All even numbers between 10 and 40");
for(let i = 10; i < 42; i++){
  if(i % 2 === 0)
  console.log(i)
}

//for loop excersice 7
console.log("Print All odd numbers between 300 and 333");
for(let i = 300; i <= 334; i++){
  if(i % 2 !== 0)
  console.log(i)
}

//for loop excersise 8
console.log("Print All numbers divisible by 5 AND 3 between 5 and 50");
for(let i = 5; i < 50; i++){
  if(i % 5 === 0 && i % 3 === 0)
  console.log(i)
}

//for loop excersise 9

var colors = ["red", "orange", "blue", "green"];

console.log("Iterate over an Array");
for(let i = 0; i < colors.length; i++){
 
  console.log(colors[i]);
}

//for loop excersise forEach 10

// var colors = ["red", "orange", "blue", "green"];

// console.log("Iterate over an Array with forEach syntax");
// colors.forEach(function(color){
//   console.log(color);
//   alert(color);
// });

//for loop excersise re-write in for loop syntax 11

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let colors = ["green", "red", "yellow", "orange"];

// for(let i = 0; i < numbers.length; i++){
//   if(numbers[i] % 3 === 0){
//     console.log(numbers[i]);
//   }
// }


