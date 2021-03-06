// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

// chiedere all'utente il numero di km da percorrere
var kmDaPercorrere = parseInt(prompt("Quanti km desidera percorrere?"));

// chiedere all'utente l'età
var anniAcquirente = parseInt(prompt("Qual è la sua età?"))

// prezzo biglietto intero
var prezzoBigliettoIntero = 0.21 * kmDaPercorrere;

// prezzo totale
var prezzoBigliettoTotale = prezzoBigliettoIntero;

// sconto del 20%
var sconto20 = ((20 * prezzoBigliettoIntero) / 100);

// sconto del 40%
var sconto40 = ((40 * prezzoBigliettoIntero) / 100);

if ((anniAcquirente > 1 && anniAcquirente < 102) && (kmDaPercorrere > 0 && kmDaPercorrere < 2000)) {

     document.getElementById("km-da-percorrere").innerHTML = kmDaPercorrere;

     document.getElementById("età-utente").innerHTML = anniAcquirente;

     document.getElementById("prezzo-intero").innerHTML = prezzoBigliettoIntero.toFixed(2);

     if (anniAcquirente < 18) {
          prezzoBigliettoTotale = prezzoBigliettoIntero - sconto20;
          document.getElementById("sconto").innerHTML = "Avendo meno di 18 anni lei ha diritto ad uno sconto del <b>20%</b>";
     } else if (anniAcquirente > 65) {
          prezzoBigliettoTotale = prezzoBigliettoIntero - sconto40;
          document.getElementById("sconto").innerHTML = "Avendo più di 65 anni lei ha diritto ad uno sconto del <b>40%</b>";
     } else {
          document.getElementById("sconto").innerHTML = "Nessuno sconto applicabile";
     }

     document.getElementById("totale").innerHTML = prezzoBigliettoTotale.toFixed(2);

} else {
     alert("L'età inserita deve essere compresa tra 1 e 102 anni mentre la distanza deve essere compresa tra 1km e 2000km");
}
