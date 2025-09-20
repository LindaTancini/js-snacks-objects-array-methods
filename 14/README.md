# Esercizi con Array di Oggetti (JavaScript)

## Array di partenza

```js
const pets = [
  { name: "Luna", type: "gatto", age: 2, vaccinated: true },
  { name: "Rocky", type: "cane", age: 5, vaccinated: false },
  { name: "Nemo", type: "pesce", age: 1, vaccinated: false },
  { name: "Kira", type: "coniglio", age: 3, vaccinated: true },
  { name: "Milo", type: "gatto", age: 4, vaccinated: true },
  { name: "Buddy", type: "cane", age: 7, vaccinated: true },
];
```

| #   | Metodo        | Esercizio                                                                           |
| --- | ------------- | ----------------------------------------------------------------------------------- |
| 1   | `.length`     | Contare quanti animali ci sono nell’array.                                          |
| 2   | Accesso       | Stampare il nome del primo animale.                                                 |
| 3   | Accesso       | Stampare il nome dell’ultimo animale.                                               |
| 4   | Accesso       | Stampare il tipo del penultimo animale.                                             |
| 5   | Accesso       | Stampare nome e tipo del secondo animale.                                           |
| 6   | Dot / Bracket | Stampare il nome e tipo terzo animale.                                              |
| 7   | `.map()`      | Creare un array con solo i nomi degli animali.                                      |
| 8   | `.map()`      | Creare un array di stringhe tipo: `"Luna (gatto), 2 anni, vaccinato: sì/no"`.       |
| 9   | `.map()`      | Creare un array con tutte le età moltiplicate per 2.                                |
| 10  | `.map()`      | Creare un array che contiene solo la tipologia degli animali.                       |
| 11  | `.filter()`   | Ottenere tutti i gatti.                                                             |
| 12  | `.filter()`   | Ottenere tutti gli animali vaccinati.                                               |
| 13  | `.filter()`   | Ottenere gli animali con età maggiore di 3 anni.                                    |
| 14  | `.filter()`   | Filtrare solo i cani non vaccinati.                                                 |
| 15  | `.filter()`   | Filtrare tutti gli animali che hanno età pari (2, 4, 6...).                         |
| 16  | `.find()`     | Trovare il primo animale che si chiama `"Milo"`.                                    |
| 17  | `.find()`     | Trovare il primo animale con età inferiore a 2 anni.                                |
| 18  | `.find()`     | Trovare il primo coniglietto.                                                       |
| 19  | `.find()`     | Trovare il primo animale vaccinato con età maggiore di 5.                           |
| 20  | `.forEach()`  | Stampare una frase per ogni animale: `"L’animale Luna è un gatto di 2 anni"`.       |
| 21  | `mix`         | Creare un array con i nomi degli animali vaccinati.                                 |
| 22  | `mix`         | Creare un array di stringhe per animali non vaccinati tipo: `"[name] è un [type]"`. |
