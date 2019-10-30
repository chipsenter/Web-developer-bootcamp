// var tags1 = document.getElementsByClassName("bolded");
// console.dir(tags);

// var tag1 = document.getElementById("highlight");
// console.log(tag);

// var tags2 = document.getElementsByTagName("li");
// console.dir(tag);

// // select a ID on the page
// var tag2 = document.querySelector("#highlight");

// // select A class on the page , will only show the first .highlight element
// var tag2 = document.querySelector(".highlight");

// // select A class on the page , will show all "li" elements
// var tag3 = document.querySelectorAll("li");

var h1 = document.querySelector("h1");

// Add a class to style multiple elements! 
h1.classList.add("big");
h1.classList.toggle("big");
h1.classList.remove("big");

// by using textContent you can output the text inside of an element

var ul = document.querySelector("ul");

ul.textContent // 
ul.innerHTML // similar but shows everything inside of an HTML element

// Get and Set new attributes 
ul.getAttribute("src");
ul.setAttribute("src", "www.johan.com");

srcset


