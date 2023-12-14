
function login() {
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (username === "admin@fusionfeast.com" && password === "admin") {
        window.location.href = "admin.html";
    } else {
        window.location.href = "index.html";
    }
}

