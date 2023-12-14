
const menu = [
    {name: "Spaghetti and Meatballs", price: 10.99},
    {name: "Seafood Boil", price: 18.99},
    {name: "Creamy Tomato Pasta", price: 13.99},
    {name: "Chicken Parmesan Bake", price: 14.99},
    {name: "Fried Rice", price: 15.99},
    {name: "Cinnamon Roll", price: 3.99},
    {name: "Omelette", price: 3.99},
    {name: "Waffle", price: 4.99},
    {name: "Pancakes", price: 4.99},
    {name: "Brioche French Toast", price: 3.99},
    {name: "Strawberry Cheesecake", price: 4.99},
    {name: "Ice Cream", price: 1.99},
    {name: "Brownies", price: 1.99},
    {name: "Cupcake", price: 0.99},
    {name: "Pumpkin Pie", price: 3.99},
    {name: "Soda", price: 1.99},
    {name: "Cafe Mocha", price: 2.99},
    {name: "Coffee", price: 2.99},
    {name: "Thai Iced Tea Boba", price: 4.99},
    {name: "Lemonade", price: 1.99}
];

window.onload = () => {
    for (let item of menu) {
        let newLi = document.createElement("li");
        newLi.innerHTML = `<button onclick="this.parentNode.parentNode.removeChild(this.parentNode)">Remove</button> ${menu[menu.indexOf(item)].name} - $${menu[menu.indexOf(item)].price}`;
        document.getElementById("full-menu-list").appendChild(newLi);
    }
}

function resetMenu() {
    document.getElementById("full-menu-list").innerHTML = "";
    for (let item of menu) {
        let newLi = document.createElement("li");
        newLi.innerHTML = `<button onclick="this.parentNode.parentNode.removeChild(this.parentNode)">Remove</button> ${menu[menu.indexOf(item)].name} - $${menu[menu.indexOf(item)].price}`;
        document.getElementById("full-menu-list").appendChild(newLi);
    }
}

function addNewItem() {
    let newItem = document.createElement("li");
    newItem.innerHTML = `<form onsubmit="insertItem(this, this.children[0].value, this.children[1].value); return false;">
                            <input type="text" placeholder="Item name" required>
                            <input type="text" placeholder="Item price" required>
                            <input type="submit" value="Confirm">
                         </form>`;
    document.getElementById("full-menu-list").prepend(newItem);
}

function insertItem(li, name, price) {
    li.innerHTML = `<button onclick="this.parentNode.parentNode.removeChild(this.parentNode)">Remove</button> ${name} - $${price}`;   
}