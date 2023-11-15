// Given the <body> element as variable body,
// access the <main> node and log to the console.
var body = document.body;
var mainNode = body.querySelector('main');
console.log(mainNode);


// Given the <ul> element as variable ul,
// access <body>  and log to the console.
var ul = document.querySelector('ul');
console.log(ul);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
var p = document.querySelector('p');
var thirdLi = ul.querySelector('li:nth-child(3)');
console.log(thirdLi);





