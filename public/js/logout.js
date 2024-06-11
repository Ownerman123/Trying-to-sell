const logoutBtn = document.querySelector("#logout-Btn");
logoutBtn.addEventListener('click', logOut);

function logOut() {
    fetch("/api/user/logout");
    window.location.replace('/');
}
