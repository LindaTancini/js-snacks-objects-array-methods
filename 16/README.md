# Esercizi con Array di Oggetti (JavaScript)

## Array di partenza

```js
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
```

| #   | Metodo / Tipo                | Descrizione                                                                         |
| --- | ---------------------------- | ----------------------------------------------------------------------------------- |
| 1   | `for`                        | Stampare tutti i titoli dei manga.                                                  |
| 2   | `for`                        | Calcolare il costo totale di tutti i manga.                                         |
| 3   | `for`                        | Stampare i manga pubblicati prima del 2000.                                         |
| 4   | `forEach`                    | Stampare autore e anno di pubblicazione di ogni manga.                              |
| 5   | `map`                        | Creare un array con solo i prezzi dei manga.                                        |
| 6   | `filter`                     | Ottenere tutti i manga con rating maggiore o uguale a 95.                           |
| 7   | `find`                       | Trovare il primo manga con prezzo inferiore a 8€.                                   |
| 8   | `map`                        | Creare un array di frasi tipo: `"[title] è un manga di [author]"`.                  |
| 9   | `filter`                     | Ottenere tutti i manga del genere "Shonen".                                         |
| 10  | `find`                       | Trovare il manga intitolato "Death Note".                                           |
| 11  | `forEach`                    | Stampare titolo e rating di ogni manga.                                             |
| 12  | `map`                        | Creare un array con gli anni di pubblicazione.                                      |
| 13  | Accesso                      | Stampare il titolo del primo manga.                                                 |
| 14  | Accesso                      | Stampare il prezzo dell’ultimo manga.                                               |
| 15  | `length`                     | Stampare quanti manga ci sono nell’array.                                           |
| 16  | Accesso                      | Stampare titolo e autore del penultimo manga.                                       |
| 17  | Condizione                   | Verificare se ci sono manga con rating < 90 e stampare un messaggio.                |
| 18  | Misti (`filter` + `map`)     | Creare un array con i titoli dei manga con prezzo ≥ 10.                             |
| 19  | Misti (`filter` + `forEach`) | Stampare i manga del genere "Shojo" con frase tipo `"[title] scritto da [author]"`. |
| 20  | Misti (`filter` + `map`)     | Creare un array con titoli e rating dei manga pubblicati dopo il 2000.              |
