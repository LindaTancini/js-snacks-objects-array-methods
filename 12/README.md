# Esercizi con Array di Oggetti (JavaScript)

## Array di partenza

```js
const cities = [
  {
    name: "Tokyo",
    country: "Giappone",
    population: 37,
    area: 2194,
    continent: "Asia",
  },
  {
    name: "New York",
    country: "USA",
    population: 19,
    area: 783,
    continent: "America",
  },
  {
    name: "Parigi",
    country: "Francia",
    population: 11,
    area: 105,
    continent: "Europa",
  },
  {
    name: "San Paolo",
    country: "Brasile",
    population: 22,
    area: 1521,
    continent: "America",
  },
  {
    name: "Sydney",
    country: "Australia",
    population: 5,
    area: 12368,
    continent: "Oceania",
  },
];
```

| #   | Metodo           | Descrizione                                                                                      |
| --- | ---------------- | ------------------------------------------------------------------------------------------------ |
| 1   | `.length`        | Contare quante città ci sono nell’array.                                                         |
| 2   | Accesso          | Accedere alla **prima città**.                                                                   |
| 3   | Accesso          | Accedere all’**ultima città**.                                                                   |
| 4   | Dot notation     | Stampare **nome e paese della seconda città**.                                                   |
| 5   | Bracket notation | Stampare **nome e popolazione della terza città**.                                               |
| 6   | `.map()`         | Creare un array con i **nomi di tutte le città**.                                                |
| 7   | `.map()`         | Creare un array di stringhe tipo: `"Tokyo (Giappone) - Popolazione: 37M, Area: 2194 km²"`.       |
| 8   | `.filter()`      | Ottenere città con **più di 10 milioni di abitanti**.                                            |
| 9   | `.filter()`      | Ottenere città che si trovano in **Europa**.                                                     |
| 10  | `.filter()`      | Filtrare tutte le città che **non sono in Asia**.                                                |
| 11  | `.find()`        | Trovare la città chiamata `"New York"`.                                                          |
| 12  | `.find()`        | Trovare la città con **area esattamente 2194 km²**.                                              |
| 13  | `.find()`        | Trovare la prima città con **popolazione inferiore a 5 milioni**.                                |
| 14  | `.forEach()`     | Stampare tutti i **nomi delle città uno per uno**.                                               |
| 15  | `.forEach()`     | Stampare una frase tipo: `"La città di Tokyo si trova in Giappone e ha 37 milioni di abitanti"`. |
| 16  | Mix              | Stampare **nome e popolazione della penultima città**.                                           |
| 17  | Mix              | Creare un array con i **nomi delle città con area maggiore di 2000 km²**.                        |
| 18  | Mix              | Calcolare il **totale degli abitanti** sommando tutte le popolazioni.                            |
| 19  | Mix              | Creare un array con `"Nome - Paese"` per ogni città.                                             |
| 20  | Mix              | Ordinare le città in **ordine decrescente di popolazione** e stamparle.                          |
