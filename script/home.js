function orderPopup() {
    document.getElementsByClassName("order-popup")[0].classList.remove("hidden");
}

let cart = [];
function addHighlight(item) {
    window.location = "order.html";
    cart.push(item);
}
