let listofScores = [
    "95",
    "72",
    "88",
    "45",
    "60",
    "79",
    "82",
    "91",
    "50",
    "38"
]

const ulRef = document.querySelector("ul");
console.log("ul textContent", ulRef.textContent);

const pRef = document.getElementById("chewy");
console.log("pRef:", pRef);

for (let i=0; i < listofScores.length; i++) {console.log("For Loop:", listofScores[i])}

ulRef.innerHTML = "<li> 95 </li>";
ulRef.innerHTML = "<li> 72 </li>";
ulRef.innerHTML = "<li> 88 </li>";
ulRef.innerHTML = "<li> 45 </li>";
ulRef.innerHTML = "<li> 60 </li>";
ulRef.innerHTML = "<li> 79 </li>";
ulRef.innerHTML = "<li> 82 </li>";
ulRef.innerHTML = "<li> 91 </li>";
ulRef.innerHTML = "<li> 50 </li>";
ulRef.innerHTML = "<li> 38 </li>";


