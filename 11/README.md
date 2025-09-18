# Esercizi con Array di Oggetti (JavaScript)

## Array di partenza

```js
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
```

| #   | Metodo           | Descrizione                                                                                               |
| --- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| 1   | `.length`        | Contare quanti videogiochi ci sono nell’array.                                                            |
| 2   | Accesso          | Accedere al **secondo gioco**.                                                                            |
| 3   | Accesso          | Accedere al **penultimo gioco**.                                                                          |
| 4   | Dot notation     | Stampare **titolo e piattaforma del primo gioco**.                                                        |
| 5   | Bracket notation | Stampare **titolo e anno di uscita del terzo gioco**.                                                     |
| 6   | `.map()`         | Creare un array con tutte le **piattaforme dei giochi**.                                                  |
| 7   | `.map()`         | Creare un array di stringhe tipo: `"The Witcher 3 (RPG, 2015) - rating 9.8"`.                             |
| 8   | `.filter()`      | Ottenere tutti i giochi con **rating maggiore di 9**.                                                     |
| 9   | `.filter()`      | Ottenere tutti i giochi usciti **prima del 2010**.                                                        |
| 10  | `.filter()`      | Filtrare i giochi che **non appartengono al genere RPG**.                                                 |
| 11  | `.find()`        | Trovare il gioco intitolato `"The Last of Us"`.                                                           |
| 12  | `.find()`        | Trovare il gioco con **anno 2017**.                                                                       |
| 13  | `.find()`        | Trovare il primo gioco con **piattaforma “Switch”**.                                                      |
| 14  | `.forEach()`     | Stampare tutti i **titoli con il loro genere**.                                                           |
| 15  | `.forEach()`     | Stampare una frase tipo: `"Il gioco 'God of War' è uscito nel 2018 sulla piattaforma PS4"`.               |
| 16  | Mix              | Stampare **titolo e rating dell’ultimo gioco**.                                                           |
| 17  | Mix              | Creare un array con i **titoli dei giochi che hanno come genere “Action”**.                               |
| 18  | Mix              | Trovare il numero totale di **anni di uscita sommati** di tutti i giochi (usando `.map()` + `.reduce()`). |
| 19  | Mix              | Creare un array con `"Titolo - [rating/10]"` per ogni gioco (es: `"Zelda - 9.7/10"`).                     |
| 20  | Mix              | Stampare tutti i giochi in ordine crescente di anno (puoi usare `.sort()`).                               |
