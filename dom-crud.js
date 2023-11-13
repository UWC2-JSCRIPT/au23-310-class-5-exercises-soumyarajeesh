// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const buyNowLink = document.createElement("a");
buyNowLink.textContent = "Buy Now!";
buyNowLink.id = "cta";
const lastParagraph = document.querySelector("p:last-child");
lastParagraph.insertAdjacentElement("afterend", buyNowLink);

// Access (read) the data-color attribute of the <img>,
// log to the console

const image = document.querySelector("img");
const dataColorAttribute = image.getAttribute("data-color");
console.log(dataColorAttribute);
// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const thirdListItem = document.querySelectorAll("li")[2]; // Select the third <li> (index 2)
thirdListItem.classList.add("highlight");

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
//const lastParagraph = document.querySelector("p:last-child");
lastParagraph.remove();