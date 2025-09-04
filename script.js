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
