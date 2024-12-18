// Get the form element
const depositForm = document.querySelector('.deposit-form');

// Add an event listener to handle form submission
depositForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting (default behavior)
    event.preventDefault();

    // Get the values entered in the account number and deposit amount fields
    const accountNumber = document.getElementById('account-number').value;
    const depositAmount = document.getElementById('deposit-amount').value;

    // Display the entered values in an alert box
    alert("successfully deposited");
});
