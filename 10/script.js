const songs = [
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    year: 1975,
    duration: 354,
    popularity: 98,
  },
  {
    title: "Imagine",
    artist: "John Lennon",
    year: 1971,
    duration: 183,
    popularity: 95,
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    year: 1982,
    duration: 357,
    popularity: 100,
  },
  {
    title: "Rolling in the Deep",
    artist: "Adele",
    year: 2010,
    duration: 228,
    popularity: 92,
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    year: 2017,
    duration: 233,
    popularity: 97,
  },
];

// LENGHT - ACCESSO - NOTATION //

// Trovare quante canzoni ci sono nell'array.
console.log(`Ci sono ${songs.length} canzoni`);
console.log("-------------------------------");
// Accedere alla prima canzone.
const primo = songs[0];
console.log("Prima canzone:", primo);
console.log("-------------------------------");
// Accedere all'ultima canzone.
const ultimo = songs[songs.length - 1];
console.log("Ultima canzone:", ultimo);
console.log("-------------------------------");
// Accedere alla terza canzone.
const terzo = songs[2];
console.log("Terza canzone:", terzo);
console.log("-------------------------------");
// 	Stampare titolo e artista della prima canzone usando dot notation.
console.log("Titolo prima canzone:", primo.title);
console.log("Artista prima canzone:", primo.artist);
console.log("-------------------------------");
// Stampare titolo e artista della quarta canzone usando bracket notation.
const quarta = songs[3];
console.log("Titolo quarta canzone:", quarta["title"]);
console.log("Artista quarta canzone:", quarta["artist"]);
console.log("-------------------------------");

// MAP //

// Creare un array con tutti i titoli delle canzoni.
const titoli = songs.map((e) => e.title);
console.log(titoli);
console.log("-------------------------------");
// Creare un array di stringhe descrittive tipo: "Bohemian Rhapsody di Queen, 1975, durata 354 sec".
const descrittive = songs.map((e) =>
  console.log(`${e.title} di ${e.artist} , ${e.year}, durata ${e.duration} sec`)
);
console.log("-------------------------------");

// FILTER //

// Ottenere canzoni con durata maggiore di 300 secondi.
const durataMaggiore = songs.filter((e) => e.duration > 300);
console.log(durataMaggiore);
console.log("-------------------------------");
// Ottenere canzoni pubblicate dopo il 2000.
const dopo2000 = songs.filter((e) => e.year > 2000);
console.log(dopo2000);
console.log("-------------------------------");
// Filtrare tutte le canzoni che non sono dei Queen.
const noQueen = songs.filter((e) => !e.artist.includes("Queen"));
console.log(noQueen);
console.log("-------------------------------");
// Ottenere canzoni con popolarità maggiore di 90.
const popolari = songs.filter((e) => e.duration > 90);
console.log(popolari);
console.log("-------------------------------");

// FIND //

// Trovare la canzone intitolata "Imagine".
const imagine = songs.find((e) => e.title === "Imagine");
console.log(imagine);
console.log("-------------------------------");
// Trovare la canzone con esattamente 431 secondi.
const secondiEsatti = songs.find((e) => (e.duration = 431));
console.log(secondiEsatti);
console.log("-------------------------------");
// Trovare la prima canzone con popolarità 100.
const massimoPopolarita = songs.find((e) => (e.popularity = 100));
console.log(massimoPopolarita);
console.log("-------------------------------");

// FOR EACH //

// Stampare tutti i titoli uno per uno.
songs.forEach((e) => console.log(e.title));
console.log("-------------------------------");
// 	Stampare una frase per ciascuna canzone, tipo: "La canzone 'Thriller' dura 357 secondi".
songs.forEach((e) =>
  console.log(`La canzone ${e.title} dura ${e.duration} secondi`)
);
console.log("-------------------------------");
// Stampare "Titolo: [title], Artista: [artist], Anno: [year]" per ciascuna canzone.
songs.forEach((e) =>
  console.log(
    `Titolo: [${e.title}] , Artista: [${e.artist}], Anno: [${e.year}]`
  )
);
console.log("-------------------------------");

// MIX //

// 	Stampare titolo e popolarità della seconda canzone.
const secondo = songs[1];
console.log("Titolo seconda canzone:", secondo.title);
console.log("Artista seconda canzone", secondo.artist);
// Creare un array con i titoli delle canzoni pubblicate prima del 1980.
const prima1980 = songs.filter((e) => e.year < 1980).map((e) => e.title);
console.log(prima1980);
