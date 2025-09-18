const games = [
  {
    title: "The Witcher 3",
    genre: "RPG",
    platform: "PC",
    year: 2015,
    rating: 9.8,
  },
  {
    title: "The Last of Us",
    genre: "Action",
    platform: "PS4",
    year: 2013,
    rating: 9.7,
  },
  {
    title: "Zelda: Breath of the Wild",
    genre: "Adventure",
    platform: "Switch",
    year: 2017,
    rating: 9.9,
  },
  {
    title: "God of War",
    genre: "Action",
    platform: "PS4",
    year: 2018,
    rating: 9.6,
  },
  {
    title: "Minecraft",
    genre: "Sandbox",
    platform: "PC",
    year: 2011,
    rating: 9.0,
  },
];

// LENGHT - ACCESSO - NOTATION //

// Contare quanti videogiochi ci sono nell’array.
console.log(`Ci sono ${games.length} giochi`);
console.log("-------------------------------");
// Accedere al secondo gioco.
const secondo = games[1];
console.log("Secondo gioco:", secondo);
console.log("-------------------------------");
// Accedere al penultimo gioco
const penultimo = games[games.length - 2];
console.log("Penultimo gioco:", penultimo);
console.log("-------------------------------");
// Stampare titolo e piattaforma del primo gioco.
const primo = games[0];
console.log("Titolo primo gioco:", primo.title);
console.log("Piattaforma primo gioco:", primo.platform);
console.log("-------------------------------");
// Stampare titolo e anno di uscita del terzo gioco.
const terzo = games[2];
console.log("Titolo terzo gioco:", terzo["title"]);
console.log("Anno d'uscita terzo gioco:", terzo["year"]);
console.log("-------------------------------");

// MAP //

// Creare un array con tutte le piattaforme dei giochi.
const piattaforme = games.map((e) => e.platform);
console.log("Piattaforme:", piattaforme);
console.log("-------------------------------");
// Creare un array di stringhe tipo: "The Witcher 3 (RPG, 2015) - rating 9.8".
const stringhe = games.map((e) =>
  console.log(`${e.title} (${e.genre}, ${e.year}) - rating ${e.rating}`)
);
console.log("-------------------------------");

// FILTER //

// Ottenere tutti i giochi con rating maggiore di 9.
const rating9 = games.filter((e) => e.rating > 9);
console.log(rating9);
console.log("-------------------------------");
// Ottenere tutti i giochi usciti prima del 2010.
const prima2010 = games.filter((e) => e.year < 2010);
console.log(prima2010);
console.log("-------------------------------");
// Filtrare i giochi che non appartengono al genere RPG.
const noRPG = games.filter((e) => !e.genre.includes("RPG"));
console.log(noRPG);
console.log("-------------------------------");

// FIND //

// Trovare il gioco intitolato "The Last of Us".
const trovaTitolo = games.find((e) => e.title === "The Last of Us");
console.log(trovaTitolo);
console.log("-------------------------------");
// Trovare il gioco con anno 2017.
const trovaGioco = games.find((e) => (e.year = 2017));
console.log(trovaGioco);
console.log("-------------------------------");
// Trovare il primo gioco con piattaforma “Switch”.
const trovaPiattaforma = games.find((e) => (e.platform = "Switch"));
console.log(trovaPiattaforma);
console.log("-------------------------------");

// FOR EACH //

// Stampare tutti i titoli con il loro genere.
games.forEach((e) => console.log(`${e.title} - ${e.genre}`));
console.log("-------------------------------");
// Stampare una frase tipo: "Il gioco 'God of War' è uscito nel 2018 sulla piattaforma PS4".
games.forEach((e) =>
  console.log(
    `Il gioco ${e.title} è uscito nel ${e.year} sulla piattaforma ${e.platform}`
  )
);
console.log("-------------------------------");

// MIX //

// 	Stampare titolo e rating dell’ultimo gioco.
const ultimo = games[games.length - 1];
console.log("Titolo ultimo gioco:", ultimo.title);
console.log("Rating ultimo gioco:", ultimo.rating);
console.log("-------------------------------");
// Creare un array con i titoli dei giochi che hanno come genere “Action”.
const action = games.filter((e) => e.genre === "Action").map((e) => e.title);
console.log(action);
console.log("-------------------------------");
// Trovare il numero totale di anni di uscita sommati di tutti i giochi (usando .map() + .reduce()).
const years = games.map((e) => e.year);
const totalYears = years.reduce((sum, year) => sum + year, 0);
console.log("Somma totale degli anni di uscita:", totalYears);
console.log("-------------------------------");
// 	Creare un array con "Titolo - [rating/10]" per ogni gioco (es: "Zelda - 9.7/10").
const descrizione = games.map((e) => `${e.title} - ${e.rating}/10`);
console.log(descrizione);
console.log("-------------------------------");
// Stampare tutti i giochi in ordine crescente di anno (puoi usare .sort()).
const giochiCrescente = [...games].sort((a, b) => a.year - b.year);
giochiCrescente.forEach((e) => console.log(`${e.year} - ${e.title}`));
