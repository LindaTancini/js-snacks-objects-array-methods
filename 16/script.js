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
// 2. Calcolare il costo totale di tutti i manga  -> for
// 3. Stampare i manga pubblicati prima del 2000 -> for
// 4. Stampare autore e anno di pubblicazione di ogni manga -> forEach
// 5. Creare un array con solo i prezzi dei manga -> map
// 6. Ottenere tutti i manga con rating >= 95     -> filter
// 7. Trovare il primo manga con prezzo < 8€     -> find
// 8. Creare un array di frasi tipo: "[title] è un manga di [author]" -> map
// 9. Ottenere tutti i manga del genere "Shonen" -> filter
// 10. Trovare il manga intitolato "Death Note"   -> find
// 11. Stampare titolo e rating di ogni manga     -> forEach
// 12. Creare un array con gli anni di pubblicazione dei manga -> map
// 13. Stampare il titolo del primo manga         -> accesso diretto [0]
// 14. Stampare il prezzo dell’ultimo manga       -> accesso diretto [length-1]
// 15. Stampare quanti manga ci sono nell’array   -> length
// 16. Stampare titolo e autore del penultimo manga -> accesso diretto [length-2]
// 17. Verificare se ci sono manga con rating < 90 e stampare un messaggio -> condizione if
// 18. Creare un array con i titoli dei manga con prezzo ≥ 10 -> filter + map
// 19. Stampare i manga del genere "Shojo" con frase tipo "[title] scritto da [author]" -> filter + forEach
// 20. Creare un array con titoli e rating dei manga pubblicati dopo il 2000 -> filter + map
