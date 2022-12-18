/* 
1) - L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
2) - Ogni cella ha un numero progressivo, da 1 a 100.
3) - Ci saranno quindi 10 caselle per ognuna delle 10 righe.
4) - Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro,
ed emetto un messaggio in console con il numero della cella cliccata.
*/
//! NO BOOTSTRAP, RIPASSO CSS A MANO
//^ MILESTONE 1
// Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
//^MILESTONE 2
/* Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. 
Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna. */
//^ MILESTONE 3
// In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
//^ MILESTONE 4
// Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!


const realGrid = document.getElementById("realGrid")
const button = document.getElementById("button")
button.addEventListener ("click" , function () {
    realGrid.classList.add ("active")
}
)
for (i = 1; i <= 100; i++) {
    const realGridChild = document.createElement("div")
    realGridChild.classList.add("cell" , "flex" , "center" , "styleCell")
    const finalGenerate = realGrid.appendChild(realGridChild)
    finalGenerate.innerText = i;
    let finalGenerateClick;
    finalGenerate.addEventListener("click", function () {
        finalGenerateClick = realGridChild.classList.add("azzurro" )
        console.log(finalGenerate.innerText)
    })
}






