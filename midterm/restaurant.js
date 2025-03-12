const menuItemsUlRef = document.getElementById("menu");
const cartTableUlRef = document.getElementById("cart");
const noItemsUlRef = document.getElementById("no-items");

 const menuItems = ["Hamburger - $2.99",
    "Cheeseburger - $3.99",
    "Cheese Pizza - $3.99",
    "Pepperoni Pizza - $4.99",
    "Sausage Pizza - $4.99",
    "Caesar Salad - $3.99",
    "Fries - $1.99",
    "Onion Rings - $2.49"];

const cart = [];

//add the logic to show the no-items row if there are no items in the cart list//

for (let i = 0; i < menuItems.length; i++){
    console.log(menuItems[i]);
}

for (let i = 0; i < cart.length; i++){
    console.log(cart[i]);
}