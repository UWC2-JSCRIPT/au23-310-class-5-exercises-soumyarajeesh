// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
const plusButton = document.getElementById('plusButton');
        const minusButton = document.getElementById('minusButton');
        const countDisplay = document.getElementById('countDisplay');

        let count = 0;

        // Function to update the count display
        function updateCountDisplay() {
            countDisplay.textContent = `Count: ${count}`;
        }

        plusButton.addEventListener('click', function () {
            count++;
            updateCountDisplay();
        });