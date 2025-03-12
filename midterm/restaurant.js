const menuItemsUlRef = document.getElementById("menu");
let cartTableUlRef = document.getElementById("cart");
const noItemsUlRef = document.getElementById("no-items");
const removeBtnRef = document.getElementById("removeitems");

 const menuItems = ["Hamburger - $2.99",
    "Cheeseburger - $3.99",
    "Cheese Pizza - $3.99",
    "Pepperoni Pizza - $4.99",
    "Sausage Pizza - $4.99",
    "Caesar Salad - $3.99",
    "Fries - $1.99",
    "Onion Rings - $2.49"];

const cart = [];

for (let i = 0; i < menuItems.length; i++){
    const newLi = document.createElement("li");
    newLi.innerText = menuItems[i];

    const newBtn = document.createElement("button");
    newBtn.innerText = "+";
    newBtn.dataset.item = menuItems[i];
    newLi.appendChild(newBtn);
    newBtn.onclick = addItemToCart;
    menuItemsUlRef.appendChild(newLi); 
}

for (let i = 0; i < cart.length; i++){
  const newTr = document.createElement("tr");
  newTr.innerText = cart[i];

  const newTd = document.createElement("td");
  newTd.innerText = "data cell";
  newTd.dataset.name = cart[i];
  newTr.appendChild(newTd);
  newTd.onclick = addItem; 

}

 function addItemToCart(e) {
    cart.push(e.target.dataset.item);
    showCart();
 }

 function showCart() {
    cartTableUlRef="";
            // logic to show the no-items row when there is not items in the cart

function removeItemFromCart() {
      cart.shift();
      showCart();
    }
    
removeBtnRef.onclick = removeItemFromCart;
removeBtnRef.addEventListener();
   
for (let i = 0; i < cart.length; i++) {
        cartTableUlRef.innerHTML += "<li>" + cart[i] + "</li>";
      }
 }