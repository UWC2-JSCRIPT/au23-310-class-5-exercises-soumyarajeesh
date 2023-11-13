// Given the <body> element as variable body,
// access the <main> node and log to the console.
//const body = document.querySelector('body');
const body = document.body; 
const mainElement = body.querySelector("main"); // Access the <main> node
console.log(mainElement);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
//const ul = document.querySelector('ul');
const ul = document.querySelector("ul"); // Get the <ul> element
const bodyElement = ul.closest("body"); // Access the <body> element using closest
console.log(bodyElement);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
//const p= document.querySelector('p');
const p1= document.querySelector("p"); // Get the <p> element
const thirdLiInP = p1.querySelectorAll("li")[2]; // Access the 3rd <li> in the <p> using querySelectorAll
console.log(thirdLiInP);