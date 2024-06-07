$(document).ready(function() {
    $('#login-form').on('submit', function(event) {
        event.preventDefault();

        var userData = {
            username: $('#username').val().trim(),
            password: $('#password').val().trim()
        };

        if (!userData.username || !userData.password) {
            return;
        }

        loginUser(userData.username, userData.password);
        $('#username').val('');
        $('#password').val('');
    });

    function loginUser(username, password) {
        $.post('/api/login', {
            username: username,
            password: password
        })
        .then(function() {
            window.location.replace('/homepage');
        })
        .catch(function(err) {
            console.log(err);
        });
    }
});