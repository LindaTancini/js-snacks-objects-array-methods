// Array di partenza
const fruits = [
  { name: "Mela", color: "rosso", price: 2, imported: false },
  { name: "Banana", color: "giallo", price: 1, imported: true },
  { name: "Uva", color: "viola", price: 3, imported: false },
  { name: "Arancia", color: "arancione", price: 2, imported: true },
  { name: "Pera", color: "verde", price: 2, imported: false },
  { name: "Kiwi", color: "marrone", price: 4, imported: true },
];

// 1. (.length) Contare quanti frutti ci sono nell’array.
console.log(`Ci sono ${fruits.length} frutti`);
console.log("-------------------------------");
// 2. (Accesso) Stampare il nome del primo frutto.
const primo = fruits[0];
console.log("Primo frutto:", primo.name);
console.log("-------------------------------");
// 3. (Accesso) Stampare il nome dell’ultimo frutto.
const ultimo = fruits[fruits.length - 1];
console.log("Ultimo frutto:", ultimo.name);
console.log("-------------------------------");
// 4. (Accesso) Stampare il colore del penultimo frutto.
const penultimo = fruits[fruits.length - 2];
console.log("Penultimo frutto:", penultimo.color);
console.log("-------------------------------");
// 5. (Accesso) Stampare nome e prezzo del secondo frutto.
const secondo = fruits[1];
console.log("Secondo frutto:", secondo.name, secondo.price);
console.log("-------------------------------");
// 6. (Dot / Bracket) Stampare il nome e colore del terzo frutto.
const terzo = fruits[2];
console.log("Terzo frutto in DOT:", terzo.name, terzo.color);
console.log("Terzo frutto bracket:", terzo["name"], terzo["color"]);
console.log("-------------------------------");
// 7. (.map) Creare un array con solo i nomi dei frutti.
const nomi = fruits.map((e) => e.name);
console.log(nomi);
console.log("-------------------------------");
// 8. (.map) Creare un array di stringhe tipo: "Mela (rosso), prezzo: 2€, importato: sì/no".
const stringhe = fruits.map(
  (e) => `${e.name} (${e.color}), prezzo: ${e.price}, importato: ${e.imported}`
);
console.log(stringhe);
console.log("-------------------------------");
// 9. (.map) Creare un array con tutti i prezzi moltiplicati per 2.
const doppi = fruits.map((e) => e.price * 2);
console.log(doppi);
console.log("-------------------------------");
// 10. (.map) Creare un array che contiene solo i colori dei frutti.
const colori = fruits.map((e) => e.color);
console.log(colori);
console.log("-------------------------------");
// 11. (.filter) Ottenere tutti i frutti importati.
const importati = fruits.filter((e) => e.imported === true);
console.log(importati);
console.log("-------------------------------");
// 12. (.filter) Ottenere tutti i frutti con prezzo superiore a 2.
const superiore2 = fruits.filter((e) => e.price > 2);
console.log(superiore2);
console.log("-------------------------------");
// 13. (.filter) Ottenere i frutti di colore verde.
const verde = fruits.filter((e) => e.color === "verde");
console.log(verde);
console.log("-------------------------------");
// 14. (.filter) Filtrare solo i frutti non importati.
const noImportati = fruits.filter((e) => e.imported === false);
console.log(noImportati);
console.log("-------------------------------");
// 15. (.filter) Filtrare tutti i frutti con prezzo pari (2, 4...).
const pari = fruits.filter((e) => e.price % 2 == 0);
console.log(pari);
console.log("-------------------------------");
// 16. (.find) Trovare il primo frutto che si chiama "Kiwi".
const kiwi = fruits.find((e) => e.name === "Kiwi");
console.log(kiwi);
console.log("-------------------------------");
// 17. (.find) Trovare il primo frutto con prezzo inferiore a 2.
const prezzoInferiore = fruits.find((e) => e.price < 2);
console.log(prezzoInferiore);
console.log("-------------------------------");
// 18. (.find) Trovare il primo frutto arancione.
const arancione = fruits.find((e) => e.color === "arancione");
console.log(arancione);
console.log("-------------------------------");
// 19. (.find) Trovare il primo frutto importato con prezzo maggiore di 3.
const importatoMaggiore = fruits.find(
  (e) => e.imported === true && e.price > 3
);
console.log(importatoMaggiore);
console.log("-------------------------------");
// 20. (.forEach) Stampare una frase per ogni frutto: "Il frutto Mela è di colore rosso e costa 2€".
fruits.forEach((e) =>
  console.log(`Il frutto ${e.name} è di colore ${e.color} e costa ${e.price} €`)
);
console.log("-------------------------------");
// 21. (mix) Creare un array con i nomi dei frutti non importati.
const mix1 = fruits.filter((e) => e.imported === false).map((e) => e.name);
console.log(mix1);
console.log("-------------------------------");
// 22. (mix) Creare un array di stringhe per frutti importati tipo: "[name] è un frutto [color]".
const mix2 = fruits
  .filter((e) => e.imported === true)
  .map((e) => `${e.name} è un frutto di colore ${e.color}`);
console.log(mix2);
