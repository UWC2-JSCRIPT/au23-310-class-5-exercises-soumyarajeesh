// Do not change
//document.getElementById('cat').addEventListener('click', () => {
 // alert('meow!');
//});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
document.addEventListener("DOMContentLoaded", function () {
  // Add a click event listener for the "more info" link
  const moreInfoLink = document.getElementById("more-info");
  moreInfoLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the link from navigating to a new webpage
    alert("Here's some more info");
  });

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const barkButton = document.getElementById("dog");
  barkButton.addEventListener("click", function () {
    alert("Bow Wow");
  });
});