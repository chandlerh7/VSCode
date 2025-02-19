const listofScores = [
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

const listofScoresRef = document.querySelector ("chewy");
let scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];

for (let i = 0; i < scores.length; i++) { const scores = scores [i]; sumOfScores += scores;}

listofScoresRef.innerHTML+= 
"<h4>Avg: " + sumOfScores/ scores.length + "</h4>";

