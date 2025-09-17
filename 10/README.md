# Esercizi con Array di Oggetti (JavaScript)

## Array di partenza

```js
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
```

| #   | Metodo           | Descrizione                                                                                         |
| --- | ---------------- | --------------------------------------------------------------------------------------------------- |
| 1   | `.length`        | Trovare quante canzoni ci sono nell'array.                                                          |
| 2   | Accesso          | Accedere alla **prima canzone**.                                                                    |
| 3   | Accesso          | Accedere all'**ultima canzone**.                                                                    |
| 4   | Accesso          | Accedere alla **terza canzone**.                                                                    |
| 5   | Dot notation     | Stampare **titolo e artista della prima canzone** usando dot notation.                              |
| 6   | Bracket notation | Stampare **titolo e artista della quarta canzone** usando bracket notation.                         |
| 7   | `.map()`         | Creare un array con tutti i **titoli delle canzoni**.                                               |
| 8   | `.map()`         | Creare un array di stringhe descrittive tipo: `"Bohemian Rhapsody di Queen, 1975, durata 354 sec"`. |
| 9   | `.filter()`      | Ottenere canzoni con durata maggiore di **300 secondi**.                                            |
| 10  | `.filter()`      | Ottenere canzoni pubblicate **dopo il 2000**.                                                       |
| 11  | `.filter()`      | Filtrare tutte le canzoni che **non sono dei Queen**.                                               |
| 12  | `.filter()`      | Ottenere canzoni con **popolarità maggiore di 90**.                                                 |
| 13  | `.find()`        | Trovare la canzone intitolata `"Imagine"`.                                                          |
| 14  | `.find()`        | Trovare la canzone con **esattamente 431 secondi**.                                                 |
| 15  | `.find()`        | Trovare la prima canzone con **popolarità 100**.                                                    |
| 16  | `.forEach()`     | Stampare tutti i **titoli uno per uno**.                                                            |
| 17  | `.forEach()`     | Stampare una frase per ciascuna canzone, tipo: `"La canzone 'Thriller' dura 357 secondi"`.          |
| 18  | `.forEach()`     | Stampare `"Titolo: [title], Artista: [artist], Anno: [year]"` per ciascuna canzone.                 |
| 19  | Mix              | Stampare **titolo e popolarità della seconda canzone**.                                             |
| 20  | Mix              | Creare un array con i **titoli delle canzoni pubblicate prima del 1980**.                           |
