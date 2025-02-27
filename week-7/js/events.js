const h1ref = document.querySelector("h1")
function changeH1style() {
    if (h1ref.style.backgroundColor !== "pink") {
        h1ref.style.backgroundColor ="pink";  
    } else {
        h1ref.style.backgroundColor ="white";
    }
    
}

h1ref.onclick = changeH1style;


const nameref= document.querySelector("#name");

function changeH1color(e) {
    console.log(e.target.value);
    h1ref.style.color = "yellow";

nameref.onchange = changeH1color;
}

h1ref.onclick = changeH1style;
nameref.onchange= changeH1color;

const sizeRef = document.querySelector("#size")
function changeH1size(e) {
    const fontSize= Number(e.target.value);
    if(fontSize>=8){
    h1ref.style.fontSize = e.target.value + "px";
    } else {
        e.target.value = 8;
    }
}
sizeRef.oninput = changeH1size;
