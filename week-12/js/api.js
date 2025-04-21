//digimon-api.vercel.app/api/digimon

async function getDigimon() {
// function getDigimon() {
// fetch("https://digimon-api.vercel.app/api/digimon")
// then(function (digiResp) {
    // return digiResp.json();
// }).then((digiData) => {
    console.log(digiData);
// }). catch (function (err) {
    console.warn(err);
// })
// .finally (() =>{
    // console.log("Fetch complete!");
    //  Code to cleanup => do it here 
// });

try {
    const digiResp = await fetch ("https://digimon-api.vercel.app/api/digimon");

    const digiData = await digiResp.json();

    digimonListRef.innerHTML= "";

    for (let i=0; i < digiData.length; i++){
        const currentDigimon = digiData[i];

const newCard = document.createElement("div");
        newCard.innerHTML += `<img src="${currentDigimon.img}" alt="${currentDigimon.name}"/>
        // <h4> Koromon</h4>
        // <button class="">&hearts;</button>`;

        newCard.onclick = likeDigimon;





        digimonListRef.appendChild(newCard);



        // <div class="digimon-card">
    // </div>
    }


    console.log(digiData);
} catch(err) {
    console.warn (err);

}

getDigimon();

console.log("End of function");
}



function likeDigimon() {
    console.log("Haha, you clicked me. NOW YOU ARE CURSED FOR A 100 YEARS");
}

// key value pair
// localStorage.setItem("key", array)

// 1. Store all liked Digimon as an Array 
// likedDigimon = ["Koromon" , "Tsunomon"]

localStorage.setItem(digimonName, JSON.stringify)