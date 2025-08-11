document.addEventListener('DOMContentLoaded', function() {
    // --- Form Validation Script ---
    const bookingForm = document.getElementById('bookingForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    bookingForm.addEventListener('submit', function(event) {
        let isValid = true;

        // Clear previous errors
        nameError.textContent = '';
        emailError.textContent = '';

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email.';
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Stop the form from submitting
        } else {
            alert('Booking inquiry submitted!');
            bookingForm.reset();
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // --- Dynamic Trip Planner Script ---
    const tripInput = document.getElementById('trip-input');
    const addTripBtn = document.getElementById('add-trip');
    const tripList = document.getElementById('trip-list');

    function addTripItem() {
        const taskText = tripInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            removeButton.addEventListener('click', function() {
                listItem.remove();
            });

            listItem.appendChild(removeButton);
            tripList.appendChild(listItem);
            tripInput.value = '';
            tripInput.focus(); // Keep focus on the input for quick entry
        }
    }

    addTripBtn.addEventListener('click', addTripItem);
    tripInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTripBtn.click();
        }
    });
});