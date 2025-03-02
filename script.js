//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingButton = document.getElementById("existing");

    // Check if credentials are saved in localStorage
    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        existingButton.style.display = "block";
    }

    // Handle form submission
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        alert("Logged in as " + username);

        if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    });

    // Handle existing user login
    existingButton.addEventListener("click", function () {
        const savedUsername = localStorage.getItem("username");
        alert("Logged in as " + savedUsername);
    });
});
