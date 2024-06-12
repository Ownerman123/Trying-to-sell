$(document).ready(function () {
  $("#signup-form").on("submit", function (event) {
    event.preventDefault();

    var userData = {
      username: $("#new-username").val().trim(),
      password: $("#new-password").val().trim(),
      email: $("#new-email").val().trim(),
      name: $("#new-name").val().trim(),
    };

    if (
      !userData.username ||
      !userData.password ||
      !userData.email ||
      !userData.name
    ) {
      alert("Please fill out all fields.");
      return;
    }

    signUpUser(
      userData.username,
      userData.password,
      userData.email,
      userData.name
    );

    $("#new-username").val("");
    $("#new-password").val("");
    $("#new-email").val("");
    $("#new-name").val("");
  });

  function signUpUser(username, password, email, name) {
    $.post("/api/userroutes/signup", {
      username: username,
      password: password,
      email: email,
      name: name,
    })
      .then(function (response) {
        window.location.replace("/");
      })
      .catch(function (err) {
        console.log(err);
        alert("Signup failed. Please try again.");
      });
  }
});
