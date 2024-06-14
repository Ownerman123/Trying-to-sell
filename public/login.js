$(document).ready(function() {
    $('#login-form').on('submit', function(event) {
        event.preventDefault();

        var userData = {
            username: $('#username').val().trim(),
            password: $('#password').val().trim()
        };

        if (!userData.username || !userData.password) {
            alert('Please enter both username and password.');
            return;
        }

        loginUser(userData.username, userData.password);

        $('#username').val('');
        $('#password').val('');
    });

    function loginUser(username, password) {
        $.post('/api/user/login', {
            username: username,
            password: password
        })
        .then(function(response) {
            window.location.replace('/');
        })
        .catch(function(err) {
            console.log(err);
            alert('Login failed. Please check your username and password.');
        });
    }
});
