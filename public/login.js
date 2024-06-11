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
    $('#signup-form').on('submit', function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        // Gather the user data from the form fields
        var userData = {
            username: $('#new-username').val().trim(), // Get the trimmed value of the input field with id 'username'
            password: $('#new-password').val().trim(),  // Get the trimmed value of the input field with id 'password'
            email: $('#new-email').val().trim(), // Get the trimmed value of the input field with id 'email'
            name: $('#new-name').val().trim(), // Get the trimmed value of the input field with id 'name'
        };

        // If either username or password is missing, stop execution of the function
        if (!userData.username || !userData.password || !userData.email || !userData.name) {
            console.log(userData, "you done donked up");
            return;
        }

        // Call the loginUser function with the entered username and password
        signUpUser(userData.username, userData.password, userData.email, userData.name);

        // Clear the input fields
        $('#new-username').val('');
        $('#new-password').val('');
        $('#new-email').val('');
        $('#new-name').val('');
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
            window.location.replace('/');
        })
        .catch(function(err) {
            // If there's an error, log it to the console
            console.log(err);
        });
    }
    function signUpUser(username, password, email, name) {
        // Send a POST request to the '/api/login' route with the username and password as data
        $.post('/api/user/signup', {
            username: username,
            password: password,
            email: email,
            name: name,
        })
        .then(function() {
            // If the request is successful, redirect the user to the '/homepage' route
            window.location.replace('/');
        })
        .catch(function(err) {
            // If there's an error, log it to the console
            console.log(err);
        });
    }
});