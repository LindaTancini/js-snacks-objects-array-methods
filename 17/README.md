# Esercizi con Array di Oggetti (JavaScript)

## Array di partenza

```js
const games = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    year: 2017,
    price: 60,
    genre: "Adventure",
    rating: 97,
  },
  {
    id: 2,
    title: "Elden Ring",
    developer: "FromSoftware",
    year: 2022,
    price: 70,
    genre: "RPG",
    rating: 96,
  },
  {
    id: 3,
    title: "Minecraft",
    developer: "Mojang",
    year: 2011,
    price: 30,
    genre: "Sandbox",
    rating: 93,
  },
  {
    id: 4,
    title: "The Witcher 3: Wild Hunt",
    developer: "CD Projekt",
    year: 2015,
    price: 40,
    genre: "RPG",
    rating: 94,
  },
  {
    id: 5,
    title: "Among Us",
    developer: "InnerSloth",
    year: 2018,
    price: 5,
    genre: "Party",
    rating: 85,
  },
];
```

| #   | Metodo / Tipo                | Descrizione                                                                           |
| --- | ---------------------------- | ------------------------------------------------------------------------------------- |
| 1   | `for`                        | Stampare tutti i titoli dei videogiochi.                                              |
| 2   | `for`                        | Calcolare il prezzo totale di tutti i videogiochi.                                    |
| 3   | `for`                        | Stampare i videogiochi pubblicati prima del 2016.                                     |
| 4   | `forEach`                    | Stampare sviluppatore e anno di pubblicazione di ogni videogioco.                     |
| 5   | `map`                        | Creare un array con solo i prezzi dei videogiochi.                                    |
| 6   | `filter`                     | Ottenere tutti i videogiochi con rating >= 95.                                        |
| 7   | `find`                       | Trovare il primo videogioco con prezzo inferiore a 20€.                               |
| 8   | `map`                        | Creare un array di frasi tipo: `"[title] sviluppato da [developer]"`.                 |
| 9   | `filter`                     | Ottenere tutti i videogiochi del genere "RPG".                                        |
| 10  | `find`                       | Trovare il videogioco intitolato "Minecraft".                                         |
| 11  | `forEach`                    | Stampare titolo e rating di ogni videogioco.                                          |
| 12  | `map`                        | Creare un array con gli anni di pubblicazione.                                        |
| 13  | Accesso                      | Stampare il titolo del primo videogioco.                                              |
| 14  | Accesso                      | Stampare il prezzo dell’ultimo videogioco.                                            |
| 15  | `length`                     | Stampare quanti videogiochi ci sono nell’array.                                       |
| 16  | Accesso                      | Stampare titolo e sviluppatore del penultimo videogioco.                              |
| 17  | Condizione                   | Verificare se ci sono videogiochi con rating < 90 e stampare un messaggio.            |
| 18  | Misti (`filter` + `map`)     | Creare un array con i titoli dei videogiochi con prezzo ≥ 40.                         |
| 19  | Misti (`filter` + `forEach`) | Stampare i videogiochi con rating > 90 con frase tipo `"[title] ha rating [rating]"`. |
| 20  | Misti (`filter` + `map`)     | Creare un array con titoli e rating dei videogiochi pubblicati dopo il 2017.          |
