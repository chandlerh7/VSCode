let listofInstruments = [
    "Piano",
    "Guitar",
    "Violin",
    "Drums",
    "Saxophone",
    "Flute"
]

const ulRef = document.querySelector("ul");
console.log("ul textContent", ulRef.textContent);


for (let i=0; i < listofInstruments.length; i++) {console.log("For Loop:", listofInstruments[i])}

ulRef.innerHTML = "<li ='instruments'> Piano </li>";
ulRef.innerHTML = "<li ='instruments'> Guitar </li>";
ulRef.innerHTML = "<li ='instruments'> Violin </li>";
ulRef.innerHTML = "<li ='instruments'> Drums </li>";
ulRef.innerHTML = "<li ='instruments'> Saxophone </li>";
ulRef.innerHTML = "<li ='instruments'> Flute </li>";
