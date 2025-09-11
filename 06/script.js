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

// Crea un array con solo i titoli dei libri.
const titoli = books.map((e) => e.title);
console.log(titoli);
console.log("-------");

// Crea un array con frasi del tipo "Titolo - Autore".
const descrizione = books.map((e) => console.log(`${e.title} - ${e.author}`));
console.log("-------");

// Trova tutti i libri pubblicati dopo il 1950.
const pubbDopo = books.filter((e) => e.year > 1950);
console.log(pubbDopo);
console.log("-------");

// Trova tutti i libri scritti da autori che si chiamano "George".
const george = books.filter((e) => e.author.includes("George"));
console.log(george);
console.log("-------");

// Trova il libro con id = 3.
const trovaLibro = books.find((e) => e.id === 3);
console.log(trovaLibro);
console.log("-------");

// Trova il primo libro pubblicato prima del 1900.
const pubbPrima = books.find((e) => e.year < 1900);
console.log(pubbPrima);
console.log("-------");

// Stampa in console una frase per ogni libro: "Il libro X è stato scritto da Y".
books.forEach((e) =>
  console.log(`Il libro ${e.title} è stato scritto da ${e.author}`)
);
console.log("-------");

//  Quanti libri ci sono nell’array?
console.log(`Ci sono ${books.length} libri`);
console.log("-------");

// Trova il secondo elemento dell’array e stampane solo il titolo.
const secondo = books[1];
console.log(`Il secondo libro è ${secondo.title}`);

// Prendi l’ultimo libro dell’array e crea una frase "L'ultimo libro è: Titolo (Anno)".
const ultimo = books[books.length - 1];
console.log(ultimo);
const ultimoLibro = books.map((e) =>
  console.log(`L'ultimo libro è: ${ultimo.title} ${ultimo.year}`)
);
