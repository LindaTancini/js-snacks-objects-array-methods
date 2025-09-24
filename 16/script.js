const manga = [
  {
    id: 1,
    title: "Naruto",
    author: "Masashi Kishimoto",
    year: 1999,
    price: 8,
    genre: "Shonen",
    rating: 91,
  },
  {
    id: 2,
    title: "Demon Slayer",
    author: "Koyoharu Gotouge",
    year: 2016,
    price: 11,
    genre: "Shonen",
    rating: 96,
  },
  {
    id: 3,
    title: "Death Note",
    author: "Tsugumi Ohba",
    year: 2003,
    price: 7,
    genre: "Thriller",
    rating: 95,
  },
  {
    id: 4,
    title: "My Hero Academia",
    author: "Kohei Horikoshi",
    year: 2014,
    price: 10,
    genre: "Shonen",
    rating: 93,
  },
  {
    id: 5,
    title: "Sailor Moon",
    author: "Naoko Takeuchi",
    year: 1991,
    price: 6,
    genre: "Shojo",
    rating: 89,
  },
];

// 1. Stampare tutti i titoli dei manga          -> for
for (let i = 0; i < manga.length; i++) {
  console.log("Titolo del Manga:", manga[i].title);
}
console.log("-------------------------------");
// 2. Calcolare il costo totale di tutti i manga  -> for
let totale = 0;
for (let i = 0; i < manga.length; i++) {
  totale += manga[i].price;
}
console.log(totale);
console.log("-------------------------------");
// 3. Stampare i manga pubblicati prima del 2000 -> for
for (let i = 0; i < manga.length; i++) {
  if (manga[i].year < 2000) {
    console.log("Manga pubblicati prima del 2000:", manga[i].title);
  }
}
console.log("-------------------------------");
// 4. Stampare autore e anno di pubblicazione di ogni manga -> forEach
manga.forEach((e) =>
  console.log(` Autore : ${e.author} - Anno pubblicazione manga: ${e.year}`)
);
console.log("-------------------------------");
// 5. Creare un array con solo i prezzi dei manga -> map
const prezzi = manga.map((e) => e.price);
console.log("Prezzi dei manga:", prezzi);
console.log("-------------------------------");
// 6. Ottenere tutti i manga con rating >= 95     -> filter
const rating = manga.filter((e) => e.rating >= 95);
console.log("Manga con rating maggiore 95:", rating);
console.log("-------------------------------");
// 7. Trovare il primo manga con prezzo < 8€     -> find
const prezzoBasso = manga.find((e) => e.price < 8);
console.log("Prezzo 8€:", prezzoBasso);
console.log("-------------------------------");
// 8. Creare un array di frasi tipo: "[title] è un manga di [author]" -> map
const frasi = manga.map((e) => `${e.title} è un manga di ${e.author}`);
console.log(frasi);
console.log("-------------------------------");
// 9. Ottenere tutti i manga del genere "Shonen" -> filter
const shonen = manga.filter((e) => e.genre === "Shonen");
console.log("Manga Shonen:", shonen);
console.log("-------------------------------");
// 10. Trovare il manga intitolato "Death Note"   -> find
const dn = manga.find((e) => e.title === "Death Note");
console.log(dn);
console.log("-------------------------------");
// 11. Stampare titolo e rating di ogni manga     -> forEach
manga.forEach((e) => console.log(`Titolo: ${e.title} - Rating: ${e.rating}`));
console.log("-------------------------------");
// 12. Creare un array con gli anni di pubblicazione dei manga -> map
const anniPubblicazione = manga.map((e) => e.year);
console.log("Anni di Pubblicazione dei Manga:", anniPubblicazione);
console.log("-------------------------------");
// 13. Stampare il titolo del primo manga         -> accesso diretto [0]
const primo = manga[0];
console.log("Primo manga:", primo);
console.log("-------------------------------");
// 14. Stampare il prezzo dell’ultimo manga       -> accesso diretto [length-1]
const ultimo = manga[manga.length - 1];
console.log("Ultimo Manga:", ultimo);
console.log("-------------------------------");
// 15. Stampare quanti manga ci sono nell’array   -> length
console.log(`Ci sono ${manga.length} manga`);
console.log("-------------------------------");
// 16. Stampare titolo e autore del penultimo manga -> accesso diretto [length-2]
const penultimo = manga[manga.length - 2];
console.log("Penultimo Manga:", penultimo);
console.log("-------------------------------");
// 17. Verificare se ci sono manga con rating < 90 e stampare un messaggio -> condizione if
let ratingBasso = false;
for (let i = 0; i < manga.length; i++) {
  if (manga[i].rating < 90) {
    ratingBasso = true;
    break;
  }
}
if (ratingBasso) {
  console.log("Ci sono manga con rating minone di 90");
} else {
  console.log("Tutti i manga hanno rating superiore/uguale a 90");
}
console.log("-------------------------------");
// 18. Creare un array con i titoli dei manga con prezzo ≥ 10 -> filter + map
const titoli = manga.filter((e) => e.price > 10).map((e) => e.title);
console.log("Manga con prezzo maggiore di 10€: ", titoli);
console.log("-------------------------------");
// 19. Stampare i manga del genere "Shojo" con frase tipo "[title] scritto da [author]" -> filter + forEach
const shojo = manga
  .filter((e) => e.genre === "Shojo")
  .forEach((e) => console.log(`${e.title} è scritto da ${e.author}`));
console.log("-------------------------------");
// 20. Creare un array con titoli e rating dei manga pubblicati dopo il 2000 -> filter + map
const dopo2000 = manga
  .filter((e) => e.year > 2000)
  .map((e) => ({ Titolo: e.title, Rating: e.rating }));
console.log("Manga pubblicati dopo l'anno 2000:", dopo2000);
