let itemPrice = "P";
let totalafterTax = "T";
let discounttotalafterTax = "D";

let P = 40.99;
let T = P * (1 + 0.07);
console.log("The toal after tax is", T.toFixed(2));

let B = false;
console.log("The item qualifies for the discount", B);

let D = P * (1 + 0.07) * (1 - 0.10);
console.log("When the total is $43.86, the discounted total after tax is", D.toFixed(2)) ;

let A = 50 * (1 + 0.07) * (1 - 0.10);
console.log("When the total is $50, the discounted total after tax is", A.toFixed(2))