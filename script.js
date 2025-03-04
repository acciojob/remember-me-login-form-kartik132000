document.addEventListener("DOMContentLoaded", function () {
            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            const rememberMeCheckbox = document.getElementById("checkbox");
            const existingUserButton = document.getElementById("existing");
            const loginForm = document.getElementById("loginForm");

            // Check if credentials exist in localStorage
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingUserButton.style.display = "block";
            }

            // Handle form submission
            loginForm.addEventListener("submit", function (event) {
                event.preventDefault();
                const username = usernameInput.value;
                const password = passwordInput.value;

                alert("Logged in as " + username);

                if (rememberMeCheckbox.checked) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                    existingUserButton.style.display = "block";
                } else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                    existingUserButton.style.display = "none";
                }
            });

            // Handle login as existing user
            existingUserButton.addEventListener("click", function () {
                alert("Logged in as " + localStorage.getItem("username"));
            });
        });