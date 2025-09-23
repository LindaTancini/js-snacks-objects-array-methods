const prodotti = [
  { id: 1, nome: "Auricolari", prezzo: 50, quantita: 25 },
  { id: 2, nome: "Tazza", prezzo: 10, quantita: 40 },
  { id: 3, nome: "LEGO", prezzo: 60, quantita: 5 },
  { id: 4, nome: "Felpa", prezzo: 35, quantita: 12 },
  { id: 5, nome: "Libro JS", prezzo: 29, quantita: 7 },
];

// 1- Funzione: scrivi una funzione che riceve un prodotto e restituisce il valore totale (prezzo \* quantita).
function valore(prodotto) {
  return prodotto.prezzo * prodotto.quantita;
}
console.log("Valore dei prodotti", valore(prodotti[0]));
console.log("-------------------------------");
// 2- For: usando un ciclo for, stampa tutti i nomi dei prodotti in console.
for (let i = 0; i < prodotti.length; i++) {
  console.log("Nome prodotto:", prodotti[i].nome);
}
console.log("-------------------------------");
// 3- Funzione: scrivi una funzione che riceve un array e restituisce la lunghezza (quanti elementi ci sono).
function lunghezza(arr) {
  return arr.length;
}
console.log("Lunghezza Array:", lunghezza(prodotti));
console.log("-------------------------------");
// 4- For: usando un ciclo for, calcola la somma di tutte le quantità.
let somma = 0;
for (let i = 0; i < prodotti.length; i++) {
  somma += prodotti[i].quantita;
}
console.log("Totale somma:", somma);
console.log("-------------------------------");
// 5- Funzione: scrivi una funzione che riceve due prodotti e restituisce quello con il prezzo maggiore.
function maggiore(p1, p2) {
  return p1.prezzo >= p2.prezzo ? p1 : p2;
}
console.log("Comparazione prodotti:", maggiore(prodotti[1], prodotti[2]));
console.log("-------------------------------");
// 6- For: usando un ciclo for, trova il prezzo massimo tra tutti i prodotti.
let prezzoMassimo = prodotti[0].prezzo;
for (let i = 0; i < prodotti.length; i++) {
  if (prodotti[i].prezzo > prezzoMassimo) {
    prezzoMassimo = prodotti[i].prezzo;
  }
}
console.log("Prezzo massimo:", prezzoMassimo);
console.log("-------------------------------");
// 7- Funzione: scrivi una funzione che controlla se un prodotto ha prezzo maggiore di 30 e restituisce true/false.
function prezzoMaggiore(prodotto) {
  return prodotto.prezzo > 30;
}
console.log(prezzoMaggiore(prodotti[2]));
console.log(prezzoMaggiore(prodotti[4]));
console.log("-------------------------------");
// 8- For: usando un ciclo for, crea un nuovo array con solo i prezzi di tutti i prodotti.
let soloPrezzi = [];
for (let i = 0; i < prodotti.length; i++) {
  soloPrezzi.push(prodotti[i].prezzo);
}
console.log(soloPrezzi);
console.log("-------------------------------");
// 9- Funzione: scrivi una funzione che riceve un prodotto e restituisce una stringa formattata tipo "Auricolari - 50€".
function stringa(prodotto) {
  return `${prodotto.nome} - ${prodotto.prezzo}`;
}
console.log("Descrizione:", stringa(prodotti[0]));
// 10- For: usando un ciclo for, conta quanti prodotti hanno quantità minore di 10.
let minore = 0;
for (let i = 0; i < prodotti.length; i++) {
  if (prodotti[i].quantita < 10) {
    minore++;
  }
}
console.log(minore);
