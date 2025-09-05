# 🥪 JS Array Snacks

## 🔹 forEach

### Stampa con forEach il nome di ogni studente.

```js
const students = [
  { name: "Alice", age: 19 },
  { name: "Marco", age: 22 },
  { name: "Giulia", age: 18 },
  { name: "Luca", age: 25 },
];
```

### Stampa con forEach il titolo e il prezzo di ciascun prodotto.

```js
const products = [
  { title: "Laptop", price: 900 },
  { title: "Mouse", price: 25 },
  { title: "Keyboard", price: 60 },
  { title: "Monitor", price: 200 },
];
```

## 🔹 map

### Crea un nuovo array contenente solo i titoli.

```js
const books = [
  { title: "Il Signore degli Anelli", author: "Tolkien" },
  { title: "1984", author: "Orwell" },
  { title: "Il Nome della Rosa", author: "Eco" },
];
```

### Crea un nuovo array di stringhe nel formato "Brand - Year".

```js
const cars = [
  { brand: "Toyota", year: 2018 },
  { brand: "BMW", year: 2021 },
  { brand: "Fiat", year: 2015 },
];
```

### Crea un nuovo array contenente solo le età.

```js
const users = [
  { name: "Anna", age: 30 },
  { name: "Paolo", age: 45 },
  { name: "Chiara", age: 28 },
];
```

## 🔹 filter

### Filtra solo quelli di tipo "cat".

```js
const animals = [
  { name: "Jerry", type: "mouse" },
  { name: "Tom", type: "cat" },
  { name: "Garfield", type: "cat" },
  { name: "Snoopy", type: "dog" },
];
```

### Filtra solo i film con rating > 7.

```js
const movies = [
  { title: "Inception", rating: 9 },
  { title: "Avatar", rating: 7 },
  { title: "Frozen", rating: 6 },
  { title: "Interstellar", rating: 10 },
];
```

### Filtra solo quelli con grade >= 18.

```js
const studentsGrades = [
  { name: "Alessio", grade: 28 },
  { name: "Martina", grade: 17 },
  { name: "Giorgio", grade: 30 },
  { name: "Francesca", grade: 15 },
];
```

## 🔹 find

### Trova la prima persona che vive a "Milano".

```js
const people = [
  { name: "Sara", city: "Roma" },
  { name: "Davide", city: "Milano" },
  { name: "Elena", city: "Torino" },
  { name: "Matteo", city: "Milano" },
];
```

### Trova il prodotto con id = 3.

```js
const productsById = [
  { id: 1, name: "Tablet" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Smartwatch" },
  { id: 4, name: "Laptop" },
];
```

## 🔹 Extra (lunghezza + ricerca)

### Conta quanti studenti hanno un’età maggiore di 20.

```js
const studentsAges = [
  { name: "Luca", age: 19 },
  { name: "Marco", age: 21 },
  { name: "Elisa", age: 23 },
  { name: "Marta", age: 17 },
];
```

### Verifica se esiste almeno un film con rating = 10.

```js
const movieRatings = [
  { title: "Shrek", rating: 8 },
  { title: "Titanic", rating: 9 },
  { title: "The Godfather", rating: 10 },
  { title: "Cars", rating: 7 },
];
```

### Trova la lunghezza dell’array e stampa: "La libreria contiene X libri".

```js
const booksCount = [
  { title: "Dune", pages: 500 },
  { title: "It", pages: 1200 },
  { title: "Dracula", pages: 400 },
];
```

### Trova il primo ordine con total > 100.

```js
const orders = [
  { customer: "Alberto", total: 80 },
  { customer: "Chiara", total: 120 },
  { customer: "Gianni", total: 50 },
  { customer: "Elisa", total: 200 },
];
```

### Conta quante canzoni durano più di 3 minuti.

```js
const songs = [
  { title: "Song A", duration: 180 },
  { title: "Song B", duration: 240 },
  { title: "Song C", duration: 200 },
  { title: "Song D", duration: 300 },
];
```
