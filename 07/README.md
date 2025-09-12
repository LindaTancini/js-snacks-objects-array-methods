# Esercizi con Array di Oggetti (JavaScript)

## Array di partenza

```js
const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana e Lilly Wachowski",
    year: 1999,
    rating: 8.7,
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
  },
  {
    id: 4,
    title: "Parasite",
    director: "Bong Joon-ho",
    year: 2019,
    rating: 8.6,
  },
  {
    id: 5,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
  },
];
```

## Esercizi

- map → Crea un array con solo i titoli dei film.

- map → Crea un array con stringhe del tipo "Titolo (Anno)".

- filter → Trova tutti i film con voto (rating) maggiore di 8.7.

- filter → Trova i film diretti da Christopher Nolan.

- find → Trova il film con id = 4.

- find → Trova il primo film uscito dopo il 2010.

- forEach → Stampa in console una frase per ogni film: "Il film Titolo è stato diretto da Regista".

- length → Quanti film ci sono nell’array?

- posizione → Stampa il titolo del terzo elemento dell’array.

- posizione + map → Prendi l’ultimo film dell’array e crea una frase "Il miglior film è: Titolo con voto Rating".
