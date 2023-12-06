function orderPopup() {
    document.getElementsByClassName("order-popup")[0].classList.remove("hidden");
    document.getElementsByClassName("main-content")[0].classList.add("hidden");
    window.scrollTo(0, 0);
}

let cart = [];
function addHighlight(item) {
    window.location = "order.html";
    cart.push(item);
}
