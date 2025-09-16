# Esercizi con Array di Oggetti (JavaScript)

## Array di partenza

```js
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
```

| #   | Metodo           | Descrizione                                                                                            |
| --- | ---------------- | ------------------------------------------------------------------------------------------------------ |
| 1   | `.length`        | Trovare quanti film ci sono nell'array.                                                                |
| 2   | Accesso          | Accedere al **primo film**.                                                                            |
| 3   | Accesso          | Accedere all'**ultimo film**.                                                                          |
| 4   | Accesso          | Accedere al **secondo film**.                                                                          |
| 5   | Dot notation     | Stampare **titolo e regista del primo film** usando dot notation.                                      |
| 6   | Bracket notation | Stampare **titolo e regista del terzo film** usando bracket notation.                                  |
| 7   | `.map()`         | Creare un array con tutti i **titoli dei film**.                                                       |
| 8   | `.map()`         | Creare un array di stringhe descrittive tipo: `"Inception di Christopher Nolan, 148 min, rating 8.8"`. |
| 9   | `.filter()`      | Ottenere film con durata maggiore di **150 minuti**.                                                   |
| 10  | `.filter()`      | Ottenere film pubblicati **dopo il 2000**.                                                             |
| 11  | `.filter()`      | Filtrare tutti i film che **non sono diretti da Christopher Nolan**.                                   |
| 12  | `.filter()`      | Ottenere film con **rating maggiore di 8.5**.                                                          |
| 13  | `.find()`        | Trovare il film intitolato `"Pulp Fiction"`.                                                           |
| 14  | `.find()`        | Trovare il film con **esattamente 142 minuti**.                                                        |
| 15  | `.find()`        | Trovare il primo film con **rating 9.0**.                                                              |
| 16  | `.forEach()`     | Stampare tutti i **titoli uno per uno**.                                                               |
| 17  | `.forEach()`     | Stampare una frase per ciascun film, tipo: `"Il film 'Inception' dura 148 minuti"`.                    |
| 18  | `.forEach()`     | Stampare `"Titolo: [title], Regista: [director], Anno: [year]"` per ciascun film.                      |
| 19  | Mix              | Stampare **titolo e rating del penultimo film**.                                                       |
| 20  | Mix              | Creare un array con i **titoli dei film pubblicati prima del 1995**.                                   |
