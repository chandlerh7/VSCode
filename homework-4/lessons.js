const listofInstruments = [
    "Piano",
    "Guitar",
    "Violin",
    "Drums",
    "Saxophone",
    "Flute"
]

const ulRef = document.querySelector("ul");
console.log("ul textContent", ulRef.textContent);

for (let i=0; i < listofInstruments.length; i++) {console.log(listofInstruments[i]);}