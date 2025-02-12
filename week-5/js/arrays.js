console.log("let's talk arrays");

const zodiacSigns = [
    "Libra",
    "Cancer",
    "Leo",
    "Taurus",
    "Scorpio",
    "Aquarius",
    "Gemini",
    "Virgo",
    "Pisces",
    "Aries",
    "Sagittarius",
    "Capricorn"
]

console.log("zodiacSigns", zodiacSigns);
console.table(zodiacSigns);

console.log("2nd Zodiac:", zodiacSigns [1]);
console.log("# of Zodiacs:", zodiacSigns.length);
const zodiacSignsUlRef = document.getElementById("zodiac-signs");

for (let i=0; i < zodiacSigns.length; i++) { zodiacSignsUlRef.innerHTML += "<li>" + zodiacSigns[i] + "</li>";
    console.log("For Loop:", zodiacSigns[i]);
}

let whileI = 0;
while(whileI < zodiacSigns.length); {
console.log ("While Loop:", zodiacSigns[whileI]);
whileI++; 
}

let whileDoI =0;
do { whileDoI++;
    } while(whileDoI < zodiacSigns.length);

const gradeStatsSectionRef = document.querySelector ("# grade-stats");
const grades = [20, 90, 15, 87, 99, 75, 81, 61, 43, 67];

for (let i = 0; i < grades.length; i++) { const grade = grades [i]; sumOfGrades += grades;}

gradeStatsSectionRef.innerHTML+= 
"<h4>Avg: " + sumOfGrades/ grades.length + "</h4>";

