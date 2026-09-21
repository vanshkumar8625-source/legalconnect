// Get the login form
const loginForm = document.getElementById("loginForm");


// Run this when user submits the form
loginForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get email and password values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    // Check if both fields contain data
    if (email === "" || password === "") {

        alert("Please enter email and password.");

        return;
    }


    // Temporary frontend login message
    alert("Login successful!");


    // Later we will connect this with role-based authentication.

});