# Esercizi con Array di Oggetti (JavaScript)

## Array di partenza

```js
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
```

| #   | Metodo       | Esercizio                                                                                    |
| --- | ------------ | -------------------------------------------------------------------------------------------- |
| 1   | `.length`    | Contare quanti giochi ci sono nell’array.                                                    |
| 2   | Accesso      | Stampare il titolo del primo gioco.                                                          |
| 3   | Accesso      | Stampare l’ultimo gioco della lista.                                                         |
| 4   | Accesso      | Stampare il genere del penultimo gioco.                                                      |
| 5   | Accesso      | Stampare titolo e anno del secondo gioco.                                                    |
| 6   | Dot/Bracket  | Stampare il titolo e genere del terzo gioco.                                                 |
| 7   | `.map()`     | Creare un array con solo i titoli dei giochi.                                                |
| 8   | `.map()`     | Creare un array di stringhe tipo: `"Zelda (avventura), 2017, multiplayer: sì/no"`.           |
| 9   | `.map()`     | Creare un array con tutti gli anni aumentati di 1.                                           |
| 10  | `.map()`     | Creare un array che contiene solo i generi dei giochi.                                       |
| 11  | `.filter()`  | Ottenere tutti i giochi multiplayer.                                                         |
| 12  | `.filter()`  | Ottenere tutti i giochi usciti dopo il 2015.                                                 |
| 13  | `.filter()`  | Ottenere i giochi di genere “RPG”.                                                           |
| 14  | `.filter()`  | Filtrare solo i giochi non multiplayer.                                                      |
| 15  | `.filter()`  | Filtrare tutti i giochi usciti in anni pari.                                                 |
| 16  | `.find()`    | Trovare il primo gioco che si chiama `"Minecraft"`.                                          |
| 17  | `.find()`    | Trovare il primo gioco uscito prima del 2012.                                                |
| 18  | `.find()`    | Trovare il primo gioco di genere “corsa”.                                                    |
| 19  | `.find()`    | Trovare il primo gioco multiplayer uscito dopo il 2018.                                      |
| 20  | `.forEach()` | Stampare una frase per ogni gioco: `"Il gioco Zelda è di genere avventura uscito nel 2017"`. |
| 21  | `mix`        | Creare un array con i titoli dei giochi non multiplayer.                                     |
| 22  | `mix`        | Creare un array di stringhe per giochi multiplayer tipo: `"[title] è un gioco [genre]"`.     |
