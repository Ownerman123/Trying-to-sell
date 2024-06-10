// Wait for the document to be fully loaded
$(document).ready(function() {
    // Attach an event handler for the 'submit' event to the form with id 'login-form'
    $('#login-form').on('submit', function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Gather the user data from the form fields
        var userData = {
            username: $('#username').val().trim(), // Get the trimmed value of the input field with id 'username'
            password: $('#password').val().trim()  // Get the trimmed value of the input field with id 'password'
        };

        // If either username or password is missing, stop execution of the function
        if (!userData.username || !userData.password) {
            return;
        }

        // Call the loginUser function with the entered username and password
        loginUser(userData.username, userData.password);

        // Clear the input fields
        $('#username').val('');
        $('#password').val('');
    });

    // Define the loginUser function
    function loginUser(username, password) {
        // Send a POST request to the '/api/login' route with the username and password as data
        $.post('/api/user/login', {
            username: username,
            password: password
        })
        .then(function() {
            // If the request is successful, redirect the user to the '/homepage' route
            window.location.replace('/homepage');
        })
        .catch(function(err) {
            // If there's an error, log it to the console
            console.log(err);
        });
    }
});