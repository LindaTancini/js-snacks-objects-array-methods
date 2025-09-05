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
