
//document.getElementsByClassName("logo-link")[0].addEventListener("click", () => window.location.href = "index.html");

for (let element of document.getElementsByClassName("logo-link")) {
    element.addEventListener("click", () => window.location.href = "index.html");
}

function goHome() {
    window.location.href = "index.html";
}

function orderPopup() {
    document.getElementsByClassName("order-popup")[0].classList.remove("hidden");
    document.getElementsByClassName("main-content")[0].classList.add("hidden");
    window.scrollTo(0, 0);
}

