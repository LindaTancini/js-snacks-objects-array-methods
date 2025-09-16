const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    duration: 148,
    rating: 8.8,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    duration: 154,
    rating: 8.9,
  },
  {
    title: "The Matrix",
    director: "Lana e Lilly Wachowski",
    year: 1999,
    duration: 136,
    rating: 8.7,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    duration: 169,
    rating: 8.6,
  },
  {
    title: "Il padrino",
    director: "Francis Ford Coppola",
    year: 1972,
    duration: 175,
    rating: 9.2,
  },
];

// length - Trovare quanti film ci sono nell'array.
console.log(`Ci sono ${movies.length} film`);
console.log("----");

// Accesso - Accedere al primo film.
const primo = movies[0];
console.log(primo);
console.log("----");

// Accesso - Accedere all'ultimo film.
const ultimo = movies[movies.length - 1];
console.log(ultimo);
console.log("----");

// Accesso - Accedere al secondo film.
const secondo = movies[1];
console.log(secondo);
console.log("----");

// Dot notation	- Stampare titolo e regista del primo film usando dot notation.
console.log(primo.title);
console.log(primo.director);
console.log("----");

// Bracket notation -	Stampare titolo e regista del terzo film usando bracket notation.
const terzo = movies[2];
console.log(terzo["title"]);
console.log(terzo["director"]);
console.log("----");

// map() - Creare un array con tutti i titoli dei film.
const titoliFilm = movies.map((e) => e.title);
console.log(titoliFilm);
console.log("----");

// map() - Creare un array di stringhe descrittive tipo: "Inception di Christopher Nolan, 148 min, rating 8.8".
const descrizioneFilm = movies.map((e) =>
  console.log(
    `${e.title} di ${e.director}, ${e.duration} min, rating ${e.rating}`
  )
);
console.log("----");

// filter()	- Ottenere film con durata maggiore di 150 minuti.
const maggiore150 = movies.filter((e) => e.duration > 150);
console.log(maggiore150);
console.log("----");

// filter() - Ottenere film pubblicati dopo il 2000.
const dopo2000 = movies.filter((e) => e.year > 2000);
console.log(dopo2000);
console.log("----");

// filter()	- Filtrare tutti i film che non sono diretti da Christopher Nolan.
const noChris = movies.filter((e) => !e.director.includes("Christopher Nolan"));
console.log(noChris);
console.log("----");

// filter() - Ottenere film con rating maggiore di 8.5.
const ratingMaggiore = movies.filter((e) => e.rating > 8.5);
console.log(ratingMaggiore);
console.log("----");

// find() - Trovare il film intitolato "Pulp Fiction".
const pulp = movies.find((e) => e.title === "Pulp Fiction");
console.log(pulp);
console.log("----");

// find() - Trovare il film con esattamente 142 minuti.
const durata142 = movies.find((e) => (e.duration = 142));
console.log(durata142);
console.log("----");

// find() - Trovare il primo film con rating 9.0.
const ratingAlto = movies.find((e) => (e.rating = 9.0));
console.log(ratingAlto);
console.log("----");

// forEach() - Stampare tutti i titoli uno per uno.
movies.forEach((e) => console.log(e.title));
console.log("----");

// forEach() - Stampare una frase per ciascun film, tipo: "Il film 'Inception' dura 148 minuti".
movies.forEach((e) =>
  console.log(`Il film ${e.title} dura ${e.duration} minuti`)
);
console.log("----");
// Stampare titolo e rating del penultimo film.
const penultimo = movies[movies.length - 2];
console.log(penultimo.title);
console.log(penultimo.rating);
console.log("----");

// Creare un array con i titoli dei film pubblicati prima del 1995.
const prima1995 = movies.filter((e) => e.year < 1995).map((e) => e.title);
console.log(prima1995);
