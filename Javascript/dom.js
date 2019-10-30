let h1 = document.querySelector("h1");
h1.style.color = "black";

let h2 = document.querySelector("h2");
h2.style.color = "blue";

let h3 = document.querySelector("h3");
h3.style.color = "red";

let body = document.querySelector("body");
let isBlue = false;

setInterval(function(){
  if(isBlue){
    body.style.background = "white";
  } else{
    body.style.background = "green";
  }
  isBlue = !isBlue;
}, 1000);



