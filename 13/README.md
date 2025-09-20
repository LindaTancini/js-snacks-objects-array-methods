# Esercizi con Array di Oggetti (JavaScript)

## Array di partenza

```js
const recipes = [
  {
    name: "Carbonara",
    cuisine: "Italiana",
    vegetarian: false,
    time: 25,
    ingredients: 6,
  },
  {
    name: "Sushi",
    cuisine: "Giapponese",
    vegetarian: false,
    time: 50,
    ingredients: 8,
  },
  {
    name: "Guacamole",
    cuisine: "Messicana",
    vegetarian: true,
    time: 10,
    ingredients: 4,
  },
  {
    name: "Curry",
    cuisine: "Indiana",
    vegetarian: true,
    time: 40,
    ingredients: 10,
  },
  {
    name: "Paella",
    cuisine: "Spagnola",
    vegetarian: false,
    time: 60,
    ingredients: 12,
  },
];
```

| #   | Metodo           | Esercizio                                                                                  |
| --- | ---------------- | ------------------------------------------------------------------------------------------ |
| 1   | `.length`        | Contare quante ricette ci sono nell’array.                                                 |
| 2   | Accesso          | Stampare il nome della **prima ricetta**.                                                  |
| 3   | Accesso          | Stampare il nome dell’**ultima ricetta**.                                                  |
| 4   | Accesso          | Stampare il nome della **penultima ricetta**.                                              |
| 5   | Dot notation     | Stampare nome e cucina della prima ricetta.                                                |
| 6   | Bracket notation | Stampare nome e tempo di preparazione della seconda ricetta.                               |
| 7   | `.map()`         | Creare un array con i nomi di tutte le ricette.                                            |
| 8   | `.map()`         | Creare un array di stringhe tipo: `"Carbonara (Italiana), 25 min, 6 ingredienti"`.         |
| 9   | `.map()`         | Creare un array con i tempi raddoppiati (simulando preparazione lenta).                    |
| 10  | `.filter()`      | Ottenere tutte le ricette vegetariane.                                                     |
| 11  | `.filter()`      | Ottenere tutte le ricette con tempo superiore a **30 minuti**.                             |
| 12  | `.filter()`      | Filtrare le ricette che hanno più di **7 ingredienti**.                                    |
| 13  | `.filter()`      | Ottenere tutte le ricette della cucina **Italiana**.                                       |
| 14  | `.find()`        | Trovare la ricetta chiamata `"Curry"`.                                                     |
| 15  | `.find()`        | Trovare la prima ricetta con esattamente **4 ingredienti**.                                |
| 16  | `.find()`        | Trovare la prima ricetta con tempo di preparazione di **60 minuti**.                       |
| 17  | `.forEach()`     | Stampare i nomi di tutte le ricette uno per uno.                                           |
| 18  | `.forEach()`     | Stampare una frase per ogni ricetta: `"La ricetta <name> richiede <time> minuti"`.         |
| 19  | `.forEach()`     | Stampare `"Nome: [name], Cucina: [cuisine], Ingredienti: [ingredients]"` per ogni ricetta. |
| 20  | Mix              | Stampare nome e tempo dell’ultima ricetta nell’array.                                      |
