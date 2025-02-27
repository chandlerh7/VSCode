const itemsUlRef = document.querySelector("#item");
const cartUlRef = document.querySelector("#cart");
const removeBtnRef = document. querySelector("#remove-item")
const items = [
    "Apple",
    "Orange",
    "Plum",
    "Pear",
    "Hairy Potato"];

const cart=[];

function addItemsToCart(e) {
    cart.push(e.target.dataset.name);
}
console.log(cart);
    function showCart() {
        for (let i=0; i< cart.length; i++) {
            cartUlRef.innerHTML += "<li>" + cart[i] + "<li/>"
        }
    }

for( let i =0; i < items.length; i++){
    const newLi = document.createElement("li");
    newLi.innerText = items[i]


const newBtn = document.createElement("button");
newBtn.innerText="+";
itemsUlRef.appendchild(newBtn);

itemsUlRef.innerHTML +="<li/>";
    
}

removeBtnRef.onclick = removeItemFromCart;