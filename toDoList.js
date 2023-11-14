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
const taskInput = document.getElementById('taskInput');
const addItemLink = document.querySelector('.add-item');

// Function to add a new list item
function addListItem(taskText) {
  // Create a new <li> element
  const li = document.createElement('li');

  // Create a <span> element for task description
  const span = document.createElement('span');
  span.textContent = taskText;

  // Create an <a> element for task deletion
  const deleteLink = document.createElement('a');
  deleteLink.textContent = 'Delete';
  deleteLink.className = 'delete';

  // Create <a> elements for moving the task up and down
  const moveUpLink = document.createElement('b');
  moveUpLink.textContent = 'Move Up';
  moveUpLink.className = 'move-up';
  moveUpLink.href = '#';

  const moveDownLink = document.createElement('c');
  moveDownLink.textContent = 'Move Down';
  moveDownLink.className = 'move-down';
  moveDownLink.href = '#';

  // Add a click event listener to toggle the "done" class
  li.addEventListener('click', function() {
    li.classList.toggle('done');
  });

  // Add a click event listener to remove the <li>
  deleteLink.addEventListener('click', function() {
    todayList.removeChild(li);
  });

  // Add a click event listener to move the task up
  moveUpLink.addEventListener('click', function(event) {
    event.preventDefault();
    const prevElement = li.previousElementSibling;
    if (prevElement) {
      todayList.insertBefore(li, prevElement);
    }
  });

  // Add a click event listener to move the task down
  moveDownLink.addEventListener('click', function(event) {
    event.preventDefault();
    const nextElement = li.nextElementSibling;
    if (nextElement) {
      todayList.insertBefore(nextElement, li);
    }
  });

  // Append the <span> and <a> elements to the <li>
  li.appendChild(span);
  li.appendChild(deleteLink);
  li.appendChild(moveUpLink);
  li.appendChild(moveDownLink);

  // Append the <li> to the todayList
  todayList.appendChild(li);
}

// Add a click event listener to the "Add" link
addItemLink.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addListItem(taskText);
    taskInput.value = ''; // Clear the input field
  }
});

// Listen for Enter key press in the input field
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      addListItem(taskText);
      taskInput.value = ''; // Clear the input field
    }
  }
});
