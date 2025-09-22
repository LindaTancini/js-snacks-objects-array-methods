const pets = [
  { name: "Luna", type: "gatto", age: 2, vaccinated: true },
  { name: "Rocky", type: "cane", age: 5, vaccinated: false },
  { name: "Nemo", type: "pesce", age: 1, vaccinated: false },
  { name: "Kira", type: "coniglio", age: 3, vaccinated: true },
  { name: "Milo", type: "gatto", age: 4, vaccinated: true },
  { name: "Buddy", type: "cane", age: 7, vaccinated: true },
];

// LENGTH - ACCESSO - NOTATION //

// Contare quanti animali ci sono nell’array.
console.log(`Ci sono ${pets.length} animali`);
console.log("-------------------------------");
// Stampare il nome del primo animale.
const primo = pets[0];
console.log("Nome primo animale:", primo.name);
console.log("-------------------------------");
// Stampare il nome dell’ultimo animale.
const ultimo = pets[pets.length - 1];
console.log("Nome ultimo animale:", ultimo.name);
console.log("-------------------------------");
// Stampare il tipo del penultimo animale.
const penultimo = pets[pets.length - 2];
console.log("Nome penultimo animale:", penultimo.name);
console.log("-------------------------------");
// Stampare nome e tipo del secondo animale.
const secondo = pets[1];
console.log("Nome secondo animale:", secondo.name);
console.log("Tipo secondo animale:", secondo.type);
console.log("-------------------------------");
// Stampare il nome e tipo terzo animale.
const terzo = pets[2];
console.log("Nome terzo animale:", terzo["name"]);
console.log("Tipo terzo animale: ", terzo["type"]);
console.log("-------------------------------");

// MAP //

// Creare un array con solo i nomi degli animali.
const nomiAnimali = pets.map((e) => e.name);
console.log("Nomi di tutti gli animali:", nomiAnimali);
console.log("-------------------------------");
// Creare un array di stringhe tipo: "Luna (gatto), 2 anni, vaccinato: sì/no".
const stringhe = pets.map(
  (e) => `${e.name} (${e.type}) , ${e.age} anni, vaccinato : ${e.vaccinated}`
);
console.log(stringhe);
console.log("-------------------------------");
// Creare un array con tutte le età moltiplicate per 2.
const etaMoltiplicate = pets.map((e) => e.age * 2);
console.log(etaMoltiplicate);
console.log("-------------------------------");
// Creare un array che contiene solo la tipologia degli animali.
const tipologia = pets.map((e) => e.type);
console.log("Tipologie degli animali:", tipologia);
console.log("-------------------------------");

// FILTER //

// Ottenere tutti i gatti.
const soloGatti = pets.filter((e) => e.type === "gatto");
console.log(soloGatti);
console.log("-------------------------------");
// Ottenere tutti gli animali vaccinati.
const soloVaccinati = pets.filter((e) => e.vaccinated === true);
console.log(soloVaccinati);
console.log("-------------------------------");
// Ottenere gli animali con età maggiore di 3 anni.
const maggiore3 = pets.filter((e) => e.age > 3);
console.log(maggiore3);
console.log("-------------------------------");
// Filtrare solo i cani non vaccinati.
const caniNoVacc = pets.filter(
  (e) => e.type === "cane" && e.vaccinated === false
);
console.log(caniNoVacc);
console.log("-------------------------------");
// Filtrare tutti gli animali che hanno età pari (2, 4, 6...).
const pari = pets.filter((e) => e.age % 2 === 0);
console.log(pari);
console.log("-------------------------------");

// FIND //

// Trovare il primo animale che si chiama "Milo".
const milo = pets.find((e) => e.name === "Milo");
console.log(milo);
console.log("-------------------------------");
// Trovare il primo animale con età inferiore a 2 anni.
const inferiore = pets.find((e) => e.age < 2);
console.log(inferiore);
console.log("-------------------------------");
// Trovare il primo coniglietto.
const coniglietto = pets.find((e) => e.type === "coniglio");
console.log(coniglietto);
console.log("-------------------------------");
// Trovare il primo animale vaccinato con età maggiore di 5.
const primoAnimale = pets.find((e) => e.vaccinated === true && e.age > 5);
console.log(primoAnimale);
console.log("-------------------------------");
// FOR EACH //

// Stampare una frase per ogni animale: "L’animale Luna è un gatto di 2 anni".
pets.forEach((e) =>
  console.log(`L'animale ${e.name} è un ${e.type} di ${e.age} anni`)
);
console.log("-------------------------------");

// MIX //

// Creare un array con i nomi degli animali vaccinati.
const vaccinati = pets.filter((e) => e.vaccinated === true);
console.log(vaccinati);
console.log("-------------------------------");
// Creare un array di stringhe per animali non vaccinati tipo: `"[name] è un [type]"`.
const stringa = pets
  .filter((e) => e.vaccinated === false)
  .map((e) => `${e.name} è un ${e.type}`);
console.log(stringa);
