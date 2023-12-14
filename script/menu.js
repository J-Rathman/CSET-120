
window.onload = () => {
    const btns = document.getElementsByClassName("add-to-cart-btn");
    for (let btn of btns) {
        btn.addEventListener("click", addToCart);
    }
    document.getElementsByClassName("order-confirm")[0].addEventListener("click", orderPopup);
}

function orderPopup() {
    document.getElementsByClassName("order-popup")[0].classList.remove("hidden");
    document.getElementsByClassName("menu-page")[0].classList.add("hidden");
    document.getElementsByClassName("payment-popup")[0].classList.add("hidden");
    document.getElementsByClassName("order-confirm")[0].classList.add("hidden");
    document.getElementsByClassName("receipt")[0].classList.add("hidden");
    window.scrollTo(0, 0);
}

function closePopup() {
    document.getElementsByClassName("order-popup")[0].classList.add("hidden");
    document.getElementsByClassName("payment-popup")[0].classList.add("hidden");
    document.getElementsByClassName("menu-page")[0].classList.remove("hidden");
    document.getElementsByClassName("receipt")[0].classList.add("hidden");
}

let total = 0;
let order = [];

function addToCart(event) {
    if (document.getElementById("order-placeholder")) {
        let placeholder = document.getElementById("order-placeholder");
        placeholder.parentNode.removeChild(placeholder);
        document.getElementsByClassName("order-proceed-btn")[0].classList.remove("unavailable");
        document.getElementsByClassName("order-proceed-btn")[0].onclick = proceedToPayment;
    }
    let parent = event.target.parentNode.parentNode;
    let newItem = document.createElement("li");
    let itemPrice = parent.querySelector(".menu-item-price span").textContent.replace("$", "");
    newItem.innerHTML =  `${parent.querySelector(".menu-item-info h3").textContent}  -  $<span class="list-price">${itemPrice}</span> <span class="quantity-btn-add">[+]</span> <span class="quantity-btn-remove">[—]</span>`;
    order.push(`${parent.querySelector(".menu-item-info h3").textContent} - ${itemPrice}`);
    let itemList = document.getElementsByClassName("order-list")[0].querySelector("ul");
    itemList.appendChild(newItem);
    total += parseFloat(itemPrice);
    total = Math.round(total * 100) / 100;
    updateTotal(itemList);
    updateButtons();
    showConfirmMsg();
}

function updateTotal(numOfItems) {
    document.getElementById("order-link").textContent = `Order (${numOfItems.children.length})`;
    for (let element of document.getElementsByClassName("subtotal")) {
        element.textContent = `$${total.toFixed(2)}`;
    }
    let tax = total * 0.06;
    tax = Math.round(tax * 100) / 100;
    for (let element of document.getElementsByClassName("tax")) {
        element.textContent = `$${tax.toFixed(2)}`;
    }
    let grandTotal = Math.round((total + tax) * 100) / 100;
    for (let element of document.getElementsByClassName("grand-total")) {
        element.textContent = `$${grandTotal.toFixed(2)}`;
    }
    let waitTime = `${numOfItems.children.length * 10} minutes`;
    for (let element of document.getElementsByClassName("wait-time")) {
        element.textContent = waitTime;
    }
}

function updateButtons() {
    for (let element of document.getElementsByClassName("quantity-btn-add")) {
        element.addEventListener("click", addOne);
    }
    for (let element of document.getElementsByClassName("quantity-btn-remove")) {
        element.addEventListener("click", removeOne);
    }
}

function addOne(event) {
    let target = event.target.parentNode;
    let newItem = document.createElement("li");
    newItem.innerHTML =  target.innerHTML;
    let itemList = document.getElementsByClassName("order-list")[0].querySelector("ul");
    itemList.appendChild(newItem);
    total += parseFloat(target.querySelector(".list-price").textContent);
    total = Math.round(total * 100) / 100;
    updateTotal(itemList);
    updateButtons();
}

function removeOne(event) {
    let target = event.target.parentNode;
    let itemList = document.getElementsByClassName("order-list")[0].querySelector("ul");
    total -= parseFloat(target.querySelector(".list-price").textContent);
    total = Math.round(total * 100) / 100;
    itemList.removeChild(target);
    updateTotal(itemList);
    if (itemList.children.length === 0) {
        let placeholder = document.createElement("li");
        placeholder.textContent = "Your items will appear here once added to order.";
        placeholder.setAttribute("id", "order-placeholder");
        itemList.appendChild(placeholder);
        document.getElementsByClassName("order-proceed-btn")[0].classList.add("unavailable");
        document.getElementsByClassName("order-proceed-btn")[0].onclick = "";
    }
    updateButtons();
}

function showConfirmMsg() {
    let confirmMsg = document.getElementsByClassName("order-confirm")[0];
    confirmMsg.textContent = `Added to order! Updated subtotal: $${total.toFixed(2)}`;
    confirmMsg.classList.remove("hidden");
    confirmMsg.style.color = "darkorange";
    document.getElementById("order-link").style.color = "darkorange";
    window.setTimeout(() => {
        confirmMsg.style.color = "white";
        document.getElementById("order-link").style.color = "";
    }, 300);
}

function proceedToPayment() {
    document.getElementsByClassName("payment-popup")[0].classList.remove("hidden");
    document.getElementsByClassName("order-popup")[0].classList.add("hidden");
    window.scrollTo(0, 0);
}

function proceedBtn() {
    document.getElementsByClassName("place-order-btn")[0].classList.remove("unavailable");
    document.getElementsByClassName("place-order-btn")[0].addEventListener("click", showReceipt);
}

function showReceipt() {
    document.getElementsByClassName("receipt")[0].classList.remove("hidden");
    document.getElementsByClassName("payment-popup")[0].classList.add("hidden");
    let tax = total * 0.06;
    tax = Math.round(tax * 100) / 100;
    let grandTotal = Math.round((total + tax) * 100) / 100;
    document.getElementById("order-name").textContent = `Thank you for your order, ${document.getElementById("name-input").value}!`;
    document.getElementById("order-number").textContent = `Order number: WO${Math.floor(Math.random() * 1000000)}`;
    document.getElementById("order-summary").textContent = `Order total: ${document.getElementsByClassName("order-list")[0].querySelector("ul").children.length} item(s) totalling $${grandTotal.toFixed(2)}`;
    document.getElementById("final-wait-time").textContent = `Your order will be ready for pickup at 750 E King St, Lancaster in approximately ${document.getElementsByClassName("order-list")[0].querySelector("ul").children.length * 10} minutes`;
}

function payByCard() {
    document.getElementsByClassName("card-info")[0].classList.remove("hidden");
}
