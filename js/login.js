// Get the form element
const loginForm = document.getElementById('loginForm');

// Add an event listener to handle form submission
loginForm.addEventListener('submit', function (event) {
    // Prevent the form from submitting the default way (refreshing the page)
    event.preventDefault();

    // Get the values entered in the email and password fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Display an alert with the email and password (for demonstration purposes)
    alert("login successfully");
});
