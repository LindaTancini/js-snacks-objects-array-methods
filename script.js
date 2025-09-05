// FOR EACH
// Stampa con forEach il nome di ogni studente.
const students = [
  { name: "Alice", age: 19 },
  { name: "Marco", age: 22 },
  { name: "Giulia", age: 18 },
  { name: "Luca", age: 25 },
];
students.forEach((e) => console.log(e.name));
console.log("----");
// Stampa con forEach il titolo e il prezzo di ciascun prodotto.
const products = [
  { title: "Laptop", price: 900 },
  { title: "Mouse", price: 25 },
  { title: "Keyboard", price: 60 },
  { title: "Monitor", price: 200 },
];
products.forEach((e) => console.log(`${e.title} - ${e.price}`));
console.log("----");

// MAP
//Crea un nuovo array contenente solo i titoli.
const books = [
  { title: "Il Signore degli Anelli", author: "Tolkien" },
  { title: "1984", author: "Orwell" },
  { title: "Il Nome della Rosa", author: "Eco" },
];
const map1 = books.map((e) => e.title);
console.group(map1);
console.log("----");
//Crea un nuovo array di stringhe nel formato "Brand - Year".
const cars = [
  { brand: "Toyota", year: 2018 },
  { brand: "BMW", year: 2021 },
  { brand: "Fiat", year: 2015 },
];
const map2 = cars.map((e) => `${e.brand} - ${e.year}`);
console.log(map2);
console.log("----");
//Crea un nuovo array contenente solo le età.
const users = [
  { name: "Anna", age: 30 },
  { name: "Paolo", age: 45 },
  { name: "Chiara", age: 28 },
];
const map3 = users.map((e) => e.age);
console.log(map3);
console.log("----");

// FILTER
// Filtra solo quelli di tipo "cat".
const animals = [
  { name: "Jerry", type: "mouse" },
  { name: "Tom", type: "cat" },
  { name: "Garfield", type: "cat" },
  { name: "Snoopy", type: "dog" },
];
const filter1 = animals.filter((e) => e.type === "cat");
console.log(filter1);
console.log("----");
// Filtra solo i film con rating > 7.
const movies = [
  { title: "Inception", rating: 9 },
  { title: "Avatar", rating: 7 },
  { title: "Frozen", rating: 6 },
  { title: "Interstellar", rating: 10 },
];
const filter2 = movies.filter((e) => e.rating > 7);
console.log(filter2);
console.log("----");
// Filtra solo quelli con grade >= 18.
const studentsGrades = [
  { name: "Alessio", grade: 28 },
  { name: "Martina", grade: 17 },
  { name: "Giorgio", grade: 30 },
  { name: "Francesca", grade: 15 },
];
const filter3 = studentsGrades.filter((e) => e.grade >= 18);
console.log(filter3);
console.log("----");

// FIND
//Trova la prima persona che vive a "Milano".
const people = [
  { name: "Sara", city: "Roma" },
  { name: "Davide", city: "Milano" },
  { name: "Elena", city: "Torino" },
  { name: "Matteo", city: "Milano" },
];
const find1 = people.find((e) => e.city === "Milano");
console.log(find1);
console.log("----");
// Trova il prodotto con id = 3.
const productsById = [
  { id: 1, name: "Tablet" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Smartwatch" },
  { id: 4, name: "Laptop" },
];
const find2 = productsById.find((e) => e.id === 3);
console.log(find2);
console.log("----");

// LUNGHEZZA E RICERCA
// Conta quanti studenti hanno un’età maggiore di 20.
const studentsAges = [
  { name: "Luca", age: 19 },
  { name: "Marco", age: 21 },
  { name: "Elisa", age: 23 },
  { name: "Marta", age: 17 },
];
const extra1 = studentsAges.filter((e) => e.age > 20);
console.log(extra1.length);
console.log("----");

//Verifica se esiste almeno un film con rating = 10.
const movieRatings = [
  { title: "Shrek", rating: 8 },
  { title: "Titanic", rating: 9 },
  { title: "The Godfather", rating: 10 },
  { title: "Cars", rating: 7 },
];
const extra2 = movieRatings.some((e) => (e.rating = 10));
console.log(extra2);
console.log("----");
// Trova la lunghezza dell’array e stampa: "La libreria contiene X libri".
const booksCount = [
  { title: "Dune", pages: 500 },
  { title: "It", pages: 1200 },
  { title: "Dracula", pages: 400 },
];
const extra3 = booksCount.length;
console.log(`La libreria contiene ${extra3} libri`);
console.log("----");
// Trova il primo ordine con total > 100.
const orders = [
  { customer: "Alberto", total: 80 },
  { customer: "Chiara", total: 120 },
  { customer: "Gianni", total: 50 },
  { customer: "Elisa", total: 200 },
];
const extra4 = orders.find((e) => e.total > 100);
console.log(extra4);
console.log("----");
// Conta quante canzoni durano più di 3 minuti.
const songs = [
  { title: "Song A", duration: 180 },
  { title: "Song B", duration: 240 },
  { title: "Song C", duration: 200 },
  { title: "Song D", duration: 300 },
];
const extra5 = songs.filter((e) => e.duration > 180);
console.log(extra5.length);
