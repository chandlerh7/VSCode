function letsGo(){
console.log("FUNction time!");
}

letsGo();  /* This is how you call a function */

function calculateTotal (itemPrice, taxRate = 0.07, discountRate =0.1) {

    const groupsofTwenty = Math.floor(itemPrice/20);

    
    switch(groupsofTwenty) {
        case 0:
            return "no discount"
        case 1:
            return "Small discount";
        case 2: 
            return "Slightly larger discount";
        case 3:
            return "large discount";
        case 4:
            return "huge discount";
        default:
            return "no discount";
    }

    if ( itemPrice > 100){
        return itemPrice * (1+ taxRate) *(1-discountRate * 2);}
        else  { itemPrice > 50 
    return itemPrice * (1+taxRate)}}

console.log("Kidney = $20, Tax Rate = 40%", calculateTotal(20, 0.4)); /* This is how you solve math problems */

const items = [ 18, 24, 1, 13, 20,];

function showItems() {
    const newSection = document.createElement("section");
    newSection.innerHTML= "<h4>Items</h4>";

    let total= 0
    for(let i=0; i < items.length; i++) {
        newSection.innerHTML += "<p>$" + items[i] + "</p>"
        total += items[i];
    }

    newSection.innerHTML +="<hr/>";

    newSection.innerHTML += "<p>$" + calculateTotal(total,0.07) + "</p>";

    document.body.appendChild(newSection);

}   /* You will need to go over this section!*/

showItems()




