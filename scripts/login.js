document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const successMessage = document.getElementById("successMessage");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        if (!loginForm.checkValidity()) {
            loginForm.classList.add("was-validated");
            return;
        }

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "test@example.com" && password === "password123") {
            successMessage.classList.remove("d-none");
            loginForm.reset();
            loginForm.classList.remove("was-validated");
        } else {
            alert("Invalid email or password!");
        }
    });
});
