# Esercizi con Array di Oggetti (JavaScript)

## Array di partenza

```js
const books = [
  {
    id: 1,
    title: "Il Signore degli Anelli",
    author: "J.R.R. Tolkien",
    year: 1954,
  },
  { id: 2, title: "1984", author: "George Orwell", year: 1949 },
  { id: 3, title: "Il Nome della Rosa", author: "Umberto Eco", year: 1980 },
  { id: 4, title: "Orgoglio e Pregiudizio", author: "Jane Austen", year: 1813 },
  {
    id: 5,
    title: "Cronache del Ghiaccio e del Fuoco",
    author: "George R.R. Martin",
    year: 1996,
  },
];
```

## Esercizi

- map → Crea un array con solo i titoli dei libri.

- map → Crea un array con frasi del tipo "Titolo - Autore".

- filter → Trova tutti i libri pubblicati dopo il 1950.

- filter → Trova tutti i libri scritti da autori che si chiamano "George".

- find → Trova il libro con id = 3.

- find → Trova il primo libro pubblicato prima del 1900.

- forEach → Stampa in console una frase per ogni libro: "Il libro X è stato scritto da Y".

- length → Quanti libri ci sono nell’array?

- posizione → Trova il secondo elemento dell’array e stampane solo il titolo.

- posizione + map → Prendi l’ultimo libro dell’array e crea una frase "L'ultimo libro è: Titolo (Anno)".
