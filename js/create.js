document.addEventListener("DOMContentLoaded", () => {
    // Get the form element
    const form = document.querySelector(".create-account-form");

    // Add event listener for form submission
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get values from the form
        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Validate the form
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Log the captured values to the console (or you can send them to the server)
        console.log("Full Name: " + fullName);
        console.log("Email: " + email);
        console.log("Phone: " + phone);
        console.log("Password: " + password); // In a real app, you should never log passwords
        console.log("Confirm Password: " + confirmPassword);

        // Optionally, you can send these values to a server via AJAX or use them as needed
        // Example of a mock function that handles form submission:
        submitForm(fullName, email, phone, password);
    });

    // Mock form submission handler (e.g., sends data to server)
    function submitForm(fullName, email, phone, password) {
        // Here, you can send the captured data to a server via AJAX, for example:
        // This is just a mockup to simulate a server response
        console.log("Form submitted with data:", { fullName, email, phone, password });
        alert("Account created successfully!");
    }
});
