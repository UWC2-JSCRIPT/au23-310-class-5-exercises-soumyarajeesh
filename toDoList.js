// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
//const addListItem = function(e) {
  //e.preventDefault();
  //const input = this.parentNode.getElementsByTagName('input')[0];
  //const text = input.value; // use this text to create a new <li>

  // Finish function here
//};
// Get references to elements
const todayList = document.querySelector('.today-list');
const addItemInput = document.querySelector('.add input');
const addItemButton = document.querySelector('.add-item');

// Function to create a new list item
function createListItem(text) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<span>${text}</span> <a class="delete">Delete</a>`;
  todayList.appendChild(listItem);

  // Add click event listener to toggle "done" class
  listItem.addEventListener('click', function () {
    listItem.classList.toggle('done');
  });

  // Add click event listener to delete the item
  const deleteLink = listItem.querySelector('.delete');
  deleteLink.addEventListener('click', function () {
    todayList.removeChild(listItem);
  });

  // Clear the input field after adding an item
  addItemInput.value = '';
}

// Event listener to add a new item
addItemButton.addEventListener('click', function () {
  const text = addItemInput.value.trim();
  if (text) {
    createListItem(text);
  }
});

// Event listener to add a new item when Enter key is pressed
addItemInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const text = addItemInput.value.trim();
    if (text) {
      createListItem(text);
    }
  }
});