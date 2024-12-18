// Get the withdraw form element
const withdrawForm = document.querySelector('.withdraw-form');

// Add an event listener to handle form submission
withdrawForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting (default behavior)
    event.preventDefault();

    // Get the values entered in the account number and withdrawal amount fields
    const accountNumber = document.getElementById('account-number').value;
    const withdrawalAmount = document.getElementById('withdrawal-amount').value;

    // Display the entered values in an alert box
    alert("successfully withdrawal");
});
