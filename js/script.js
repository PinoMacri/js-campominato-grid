/* 
1) - L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
2) - Ogni cella ha un numero progressivo, da 1 a 100.
3) - Ci saranno quindi 10 caselle per ognuna delle 10 righe.
4) - Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro,
ed emetto un messaggio in console con il numero della cella cliccata.
5)  NO BOOTSTRAP, RIPASSO CSS A MANO
*/
//* MILESTONE 1
// Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
//*MILESTONE 2
/* Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. 
Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna. */
//* MILESTONE 3
// In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
//* MILESTONE 4
// Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
//! ---------------------------------------SVOLGIMENTO-----------------------------------------
const realGrid = document.getElementById("realGrid")
//^ --------------DIFFICOLTA' 1-------------------
const button = document.getElementById("button")
button.addEventListener("click", function () {
    realGrid.classList.add("active")
    difficileDue.classList.remove("active")
    difficileTre.classList.remove("active")
}
)
for (i = 1; i <= 100; i++) {
    const realGridChild = document.createElement("div")
    realGridChild.classList.add("cell", "flex", "center", "styleCell")
    const finalGenerate = realGrid.appendChild(realGridChild)
    finalGenerate.innerText = i;
    finalGenerate.addEventListener("click", function () {
        if (realGridChild.classList.contains("azzurro")) {
            realGridChild.classList.remove("azzurro")
        } else {
            realGridChild.classList.add("azzurro")
        }
        console.log(finalGenerate.innerText)
    })
}
//^ --------------DIFFICOLTA' 2-------------------
const buttonDue = document.getElementById("buttonDue")
const difficileDue = document.getElementById("difficileDue")
buttonDue.addEventListener("click", function () {
    difficileDue.classList.add("active")
    realGrid.classList.remove("active")
    difficileTre.classList.remove("active")
}
)
for (i = 1; i <= 81; i++) {
    const realGridDue = document.createElement("div")
    realGridDue.classList.add("realGridDue", "flex", "center", "styleCell")
    const finalGenerateDue = difficileDue.appendChild(realGridDue)
    finalGenerateDue.innerText = i;
    finalGenerateDue.addEventListener("click", function () {
        if (realGridDue.classList.contains("azzurro")) {
            realGridDue.classList.remove("azzurro")
        } else {
            realGridDue.classList.add("azzurro")
        }
        console.log(finalGenerateDue.innerText)
    })
}
//^ --------------DIFFICOLTA' 3--------------------
const buttonTre = document.getElementById("buttonTre")
const difficileTre = document.getElementById("difficileTre")
buttonTre.addEventListener("click", function () {
    difficileTre.classList.add("active")
    realGrid.classList.remove("active")
    difficileDue.classList.remove("active")
}
)
for (i = 1; i <= 49; i++) {
    const realGridTre = document.createElement("div")
    realGridTre.classList.add("realGridTre", "flex", "center", "styleCell")
    const finalGenerateTre = difficileTre.appendChild(realGridTre)
    finalGenerateTre.innerText = i;
    finalGenerateTre.addEventListener("click", function () {
        if (realGridTre.classList.contains("azzurro")) {
            realGridTre.classList.remove("azzurro")
        } else {
            realGridTre.classList.add("azzurro")
        }
        console.log(finalGenerateTre.innerText)
    })
}



