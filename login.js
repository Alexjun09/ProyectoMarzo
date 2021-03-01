const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-input-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ADMIN" && password === "ASIR2020") {
        alert("Has iniciado sesión correctamente!");
        window.location.replace('index.html');
    } else {
        alert("Los datos introducidos son incorrectos, porfavor intentalo de nuevo.");
        location.reload();
    }
})