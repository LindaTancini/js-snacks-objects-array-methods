// Array di partenza
const games = [
  { title: "Zelda", genre: "avventura", year: 2017, multiplayer: false },
  { title: "Mario Kart", genre: "corsa", year: 2014, multiplayer: true },
  { title: "Minecraft", genre: "sandbox", year: 2011, multiplayer: true },
  { title: "The Witcher 3", genre: "RPG", year: 2015, multiplayer: false },
  { title: "Overwatch", genre: "sparatutto", year: 2016, multiplayer: true },
  {
    title: "Animal Crossing",
    genre: "simulazione",
    year: 2020,
    multiplayer: true,
  },
];

// 1. (.length) Contare quanti giochi ci sono nell’array.
console.log(`Ci sono ${games.length} giochi`);
console.log("-------------------------------");
// 2. (Accesso) Stampare il titolo del primo gioco.
const primo = games[0];
console.log("Primo gioco:", primo.title);
console.log("-------------------------------");
// 3. (Accesso) Stampare l’ultimo gioco della lista.
const ultimo = games[games.length - 1];
console.log("Ultimo gioco:", ultimo);
console.log("-------------------------------");
// 4. (Accesso) Stampare il genere del penultimo gioco.
const penultimo = games[games.length - 2];
console.log("Genere penultimo gioco:", penultimo.genre);
console.log("-------------------------------");
// 5. (Accesso) Stampare titolo e anno del secondo gioco.
const secondo = games[1];
console.log("Titolo e anno secondo gioco:", secondo.title, secondo.year);
console.log("-------------------------------");
// 6. (Dot / Bracket) Stampare il titolo e genere del terzo gioco.
const terzo = games[2];
console.log("Terzo gioco DOT:", terzo.title, terzo.genre);
console.log("Terzo gioco bracket:", terzo["title"], terzo["genre"]);
console.log("-------------------------------");
// 7. (.map) Creare un array con solo i titoli dei giochi.
const titoli = games.map((e) => e.title);
console.log(titoli);
console.log("-------------------------------");
// 8. (.map) Creare un array di stringhe tipo: "Zelda (avventura), 2017, multiplayer: sì/no".
const stringhe = games.map(
  (e) => `${e.title} (${e.genre}), ${e.year}, multiplayer: ${e.multiplayer}`
);
console.log(stringhe);
console.log("-------------------------------");
// 9. (.map) Creare un array con tutti gli anni aumentati di 1.
const aumentoAnni = games.map((e) => e.year + 1);
console.log(aumentoAnni);
console.log("-------------------------------");
// 10. (.map) Creare un array che contiene solo i generi dei giochi.
const generi = games.map((e) => e.genre);
console.log(generi);
console.log("-------------------------------");
// 11. (.filter) Ottenere tutti i giochi multiplayer.
const multi = games.filter((e) => e.multiplayer === true);
console.log(multi);
console.log("-------------------------------");
// 12. (.filter) Ottenere tutti i giochi usciti dopo il 2015.
const dopo2015 = games.filter((e) => e.year < 2015);
console.log(dopo2015);
console.log("-------------------------------");
// 13. (.filter) Ottenere i giochi di genere “RPG”.
const rpg = games.filter((e) => e.genre === "RPG");
console.log(rpg);
console.log("-------------------------------");
// 14. (.filter) Filtrare solo i giochi non multiplayer.
const noMulti = games.filter((e) => e.multiplayer === false);
console.log(noMulti);
console.log("-------------------------------");
// 15. (.filter) Filtrare tutti i giochi usciti in anni pari.
const anniPari = games.filter((e) => e.year % 2 == 0);
console.log(anniPari);
console.log("-------------------------------");
// 16. (.find) Trovare il primo gioco che si chiama "Minecraft".
const minecraft = games.find((e) => e.title === "Minecraft");
console.log(minecraft);
console.log("-------------------------------");
// 17. (.find) Trovare il primo gioco uscito prima del 2012.
const primo2012 = games.find((e) => e.year < 2012);
console.log(primo2012);
console.log("-------------------------------");
// 18. (.find) Trovare il primo gioco di genere “corsa”.
const corsa = games.find((e) => e.genre === "corsa");
console.log(corsa);
console.log("-------------------------------");
// 19. (.find) Trovare il primo gioco multiplayer uscito dopo il 2018.
const primoMulti = games.find((e) => e.year > 2018 && e.multiplayer === true);
console.log(primoMulti);
console.log("-------------------------------");
// 20. (.forEach) Stampare una frase per ogni gioco: "Il gioco Zelda è di genere avventura uscito nel 2017".
games.forEach((e) =>
  console.log(`Il gioco ${e.title} è di genere ${e.genre} uscito nel ${e.year}`)
);
console.log("-------------------------------");
// 21. (mix) Creare un array con i titoli dei giochi non multiplayer.
const giochiNoMulti = games
  .filter((e) => e.multiplayer === false)
  .map((e) => e.title);
console.log(giochiNoMulti);
console.log("-------------------------------");
// 22. (mix) Creare un array di stringhe per giochi multiplayer tipo: "[title] è un gioco [genre]".
const descrizione = games
  .filter((e) => e.multiplayer === true)
  .map((e) => `${e.title} è un gioco ${e.genre}`);
console.log(descrizione);
