// Stampa in console il titolo di ogni canzone.

const songsList = [
  { title: "Shape of You", artist: "Ed Sheeran" },
  { title: "Blinding Lights", artist: "The Weeknd" },
  { title: "Bohemian Rhapsody", artist: "Queen" },
];
songsList.forEach((e) => console.log(`Titoli delle canzoni: ${e.title}`));
console.log("------------");

//Crea un array con solo i nomi degli animali.

const zoo = [
  { name: "Leone", habitat: "Savana" },
  { name: "Pinguino", habitat: "Antartide" },
  { name: "Koala", habitat: "Foresta" },
];
const es2 = zoo.map((e) => e.name);
console.log(`Nomi degli animali: ${es2}`);
console.log("------------");

// Estrai solo le auto che hanno un prezzo maggiore di 20.000€.

const autos = [
  { brand: "Fiat", price: 15000 },
  { brand: "BMW", price: 35000 },
  { brand: "Toyota", price: 22000 },
  { brand: "Dacia", price: 12000 },
];
const es3 = autos.filter((e) => e.price > 20000);
console.log(es3);
console.log("------------");

// Trova il giocatore con la maglia numero 10.

const team = [
  { name: "Andrea", number: 7 },
  { name: "Marco", number: 10 },
  { name: "Luca", number: 9 },
];
const es4 = team.find((e) => e.number === 10);
console.log(es4);
console.log("------------");

// Trova quanti film ci sono nell’array.

const cinema = [
  { title: "Titanic", year: 1997 },
  { title: "Avatar", year: 2009 },
  { title: "Inception", year: 2010 },
  { title: "The Batman", year: 2022 },
];
const es5 = cinema.length;
console.log(es5);
console.log("------------");

// Conta quanti studenti hanno più di 25 anni.

const studentsList = [
  { name: "Paolo", age: 23 },
  { name: "Elisa", age: 27 },
  { name: "Chiara", age: 30 },
  { name: "Davide", age: 19 },
];
const es6 = studentsList.filter((e) => e.age > 25);
console.log(es6.length);
console.log("------------");

// Crea un array con stringhe del tipo "Titolo - Autore".

const novels = [
  { title: "Orgoglio e Pregiudizio", author: "Jane Austen" },
  { title: "I Promessi Sposi", author: "Alessandro Manzoni" },
  { title: "Il Gattopardo", author: "Tomasi di Lampedusa" },
];
const es7 = novels.map((e) => `${e.title} - ${e.author}`);
console.log(es7);
console.log("------------");

// Trova il primo film con anno minore del 2000.

const oldMovies = [
  { title: "The Matrix", year: 1999 },
  { title: "Interstellar", year: 2014 },
  { title: "The Dark Knight", year: 2008 },
];
const es8 = oldMovies.find((e) => e.year < 2000);
console.log(es8);
console.log("------------");

// Stampa ogni città con accanto il nome della nazione.

const destinations = [
  { city: "Roma", country: "Italia" },
  { city: "Berlino", country: "Germania" },
  { city: "Parigi", country: "Francia" },
];
destinations.forEach((e) => console.log(`${e.city} - ${e.country}`));
console.log("------------");

// Conta quanti prodotti costano meno di 10€.

const market = [
  { item: "Mela", price: 2 },
  { item: "Pane", price: 1 },
  { item: "Pasta", price: 3 },
  { item: "Carne", price: 15 },
];
const es10 = market.filter((e) => e.price < 10);
console.log(es10.length);
console.log("------------");

// Crea un nuovo array con i nomi dei clienti in maiuscolo.

const clients = [
  { name: "mario", age: 40 },
  { name: "giulia", age: 35 },
  { name: "andrea", age: 28 },
];
const es11 = clients.map((e) => e.name.toUpperCase());
console.log(es11);
console.log("------------");

// Trova solo i prodotti disponibili (available: true).

const shop = [
  { product: "Laptop", available: true },
  { product: "Mouse", available: false },
  { product: "Monitor", available: true },
];
const es12 = shop.filter((e) => e.available === true);
console.log(es12);
console.log("------------");

// Trova il primo utente che vive a Milano.

const accounts = [
  { username: "luca23", city: "Roma" },
  { username: "sara98", city: "Milano" },
  { username: "teo77", city: "Torino" },
];
const es13 = accounts.find((e) => e.city === "Milano");
console.log(es13);
console.log("------------");

// Stampa in console Nome - Prezzo di ogni prodotto.

const gadgets = [
  { name: "Cuffie", price: 60 },
  { name: "Speaker", price: 120 },
  { name: "Microfono", price: 80 },
];
gadgets.forEach((e) => console.log(`${e.name} - ${e.price}`));
console.log("------------");

// Stampa la frase: "Ci sono X canzoni nella playlist".

const playlist = [
  { title: "Song 1", duration: 200 },
  { title: "Song 2", duration: 180 },
  { title: "Song 3", duration: 240 },
  { title: "Song 4", duration: 300 },
];
const es15 = playlist.length;
console.log(`Ci sono ${es15} canzoni della playlist`);
console.log("------------");

// Conta quante persone hanno più di 30 anni.

const community = [
  { name: "Marco", age: 25 },
  { name: "Elisa", age: 35 },
  { name: "Paola", age: 40 },
  { name: "Davide", age: 29 },
];
const es16 = community.filter((e) => e.age > 30);
console.log(es16.length);
console.log("------------");

// Crea un array con stringhe del tipo: "Nome ha X anni".

const family = [
  { name: "Gianni", age: 50 },
  { name: "Luca", age: 20 },
  { name: "Francesca", age: 18 },
];
const es17 = family.map((e) => `${e.name} ha ${e.age} anni`);
console.log(es17);
console.log("------------");

// Trova il primo libro con più di 400 pagine.

const bookStore = [
  { title: "Cime tempestose", pages: 300 },
  { title: "It", pages: 1200 },
  { title: "Il piccolo principe", pages: 100 },
];
const es18 = bookStore.find((e) => e.pages > 400);
console.log(es18);
console.log("------------");

// Stampa in console "Città - Paese" per ogni destinazione.

const trips = [
  { city: "Londra", country: "Regno Unito" },
  { city: "New York", country: "USA" },
  { city: "Tokyo", country: "Giappone" },
];
trips.forEach((e) => console.log(`${e.city} - ${e.country}`));

// Conta quanti studenti hanno preso 30 all’esame.

const examSession = [
  { student: "Alessio", grade: 30 },
  { student: "Martina", grade: 28 },
  { student: "Chiara", grade: 30 },
  { student: "Lorenzo", grade: 25 },
];
const es20 = examSession.filter((e) => e.grade === 30);
console.log(es20.length);
