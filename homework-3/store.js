let itemPrice = "P";
console.log("The variable for item price is", itemPrice);

let totalafterTax = "T";
console.log("The variable for the total after tax is", totalafterTax);

let discounttotalafterTax = "D";
console.log("The variable for the discounted total after tax is", discounttotalafterTax);

let P = 40.99;
let T = P * (1 + 0.07);
console.log("The toal after tax is", T.toFixed(2));

let B = false;
console.log("The item qualifies for the discount", B);

let D = P * (1 + 0.07) * (1 - 0.10);
console.log("When the total is $43.86, the discounted total after tax is", D.toFixed(2)) ;

let A = 50 * (1 + 0.07) * (1 - 0.10);
console.log("When the total is $50, the discounted total after tax is", A.toFixed(2))