//Objects Excersice 1 

// var someObjects = {};

// someObjects._name = "Hedwig";
// someObjects.age = 16;

// var prop = "color"

// someObjects[prop] = "red";
// //You can never use dot notation with numbers like below! 
// someObjects.123 = true;

//Objects Excersice 2

// var someObjects = {
//   friends: [
//     {name: "Malfoy"},
//     {name: "Crabbe"},
//     {name: "Goyle"}
//   ],
//   color: "baby blue",
//   isEvil: true

// };

//Objects Excersice 2

// var movieDB = [
//   {
//     title: "Rambo",
//     rating: 5,
//     hasWatched: true
//   },
//   {
//     title: "IT",
//     rating: 4.5,
//     hasWatched: true
//   },
//   {
//     title: "Joker",
//     rating: 3,
//     hasWatched: false
//   },
//   {
//     title: "Toy Story",
//     rating: 3.5,
//     hasWatched: false
//   }
// ];

// movieDB.forEach(function(movie){
//   var result = "You have ";
//   if(movie.hasWatched) {
//     result += "watched ";
//   } else {
//     result += "not seen ";
//   }
//   result += "\"" + movie.title + "\" - ";
//   result += movie.rating + " stars";
//   console.log(result);
// })

//Objects Excersice 3


var obj = {
  name: "Chuck",
  age: 45,
  isCool: false,
  friends: ["Tina","Mia"],
  add: function(x,y){
    return x + y;
  },
  
}
obj.add(10,50);


//Objects Excersice 4

var comments = {};
comments.data = ["Good Job", "Bye", "Lame..."];

function print(arr){
  arr.forEach(function(el){
    console.log(el);
  })
}
print(comments.data);

//Objects Excersice 5

var comments = {};
comments.data = ["Good Job", "Bye", "Lame..."];

function print(arr){
  arr.forEach(function(el){
    console.log(el);
  })
}

comments.print = function(){
  this.data.forEach(function(el){
    console.log(el);
  });
}


