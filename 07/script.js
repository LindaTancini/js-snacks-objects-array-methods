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

// Crea un array con solo i titoli dei film.
const titoli = movies.map((e) => e.title);
console.log(titoli);
console.log("-----");

//  Crea un array con stringhe del tipo "Titolo (Anno)".
const stringa = movies.map((e) => console.log(`${e.title} (${e.year})`));
console.log("-----");

// Trova tutti i film con voto (rating) maggiore di 8.7.
const voto = movies.filter((e) => e.rating > 8.7);
console.log(voto);
console.log("-----");

// Trova i film diretti da Christopher Nolan.
const christopher = movies.filter((e) => e.director === "Christopher Nolan");
console.log(christopher);
console.log("-----");

// Trova il film con id = 4.
const trovaFilm = movies.find((e) => e.id === 4);
console.log(trovaFilm);
console.log("-----");
// Trova il primo film uscito dopo il 2010.
const film2010 = movies.find((e) => e.year > 2010);
console.log(film2010);
console.log("-----");
// Stampa in console una frase per ogni film: "Il film Titolo è stato diretto da Regista".
movies.forEach((e) =>
  console.log(`Il film ${e.title}  è stato diretto da ${e.director}`)
);
console.log("-----");
// Quanti film ci sono nell’array?
console.log(`Ci sono ${movies.length} film`);
console.log("-----");
// Stampa il titolo del terzo elemento dell’array.
console.log(movies[2]);
console.log("-----");
// Prendi l’ultimo film dell’array e crea una frase "Il miglior film è: Titolo con voto Rating"
const ultimo = movies[movies.length - 1];
const frase = movies.map((e) =>
  console.log(`Il miglior film è: ${ultimo.title} con voto ${ultimo.rating}`)
);
