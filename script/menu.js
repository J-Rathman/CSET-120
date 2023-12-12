window.onload = () => {
    const btns = document.getElementsByClassName("add-to-cart-btn");
    for (let btn of btns) {
        btn.addEventListener("click", addToCart);
    }
}

const cart = [];
let total = 0;

function addToCart(event) {
    if (document.getElementById("order-placeholder")) {
        let placeholder = document.getElementById("order-placeholder");
        placeholder.parentNode.removeChild(placeholder);
    }
    let parent = event.target.parentNode.parentNode;
    let newItem = document.createElement("li");
    let itemPrice = parent.querySelector(".menu-item-price span").textContent;
    newItem.innerHTML =  `${parent.querySelector(".menu-item-info h3").textContent}  -  ${itemPrice}`;
    let itemList = document.getElementsByClassName("order-list")[0].querySelector("ul");
    itemList.appendChild(newItem);
    total += parseFloat(itemPrice.replace("$", ""));
    total = Math.round(total * 100) / 100;
}

