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

// LENGTH - ACCESSO - NOTATION //

// Contare quante ricette ci sono nell’array.
console.log(`Ci sono ${recipes.length} ricette`);
console.log("-------------------------------");
// Stampare il nome della prima ricetta.
const primo = recipes[0];
console.log("Prima ricetta:", primo.name);
console.log("-------------------------------");
// Stampare il nome dell’ultima ricetta.
const ultimo = recipes[recipes.length - 1];
console.log("Ultima ricetta:", ultimo.name);
console.log("-------------------------------");
// Stampare il nome della penultima ricetta.
const penultima = recipes[recipes.length - 2];
console.log("Penultima ricetta:", penultima.name);
console.log("-------------------------------");
// Stampare nome e cucina della prima ricetta.
console.log("Nome prima ricetta:", primo.name);
console.log("Cucina prima ricetta:", primo.cuisine);
console.log("-------------------------------");
// Stampare nome e tempo di preparazione della seconda ricetta.
const secondo = recipes[1];
console.log("Nome seconda ricetta:", secondo["name"]);
console.log("Tempo prep seconda ricetta:", secondo["time"]);
console.log("-------------------------------");

// MAP //

// Creare un array con i nomi di tutte le ricette.
const nomiRicette = recipes.map((e) => e.name);
console.log("Nomi ricette:", nomiRicette);
console.log("-------------------------------");
// Creare un array di stringhe tipo: "Carbonara (Italiana), 25 min, 6 ingredienti".
const stringa = recipes.map(
  (e) => `${e.name} (${e.cuisine}), ${e.time}, ${e.ingredients} ingredienti`
);
console.log("Array di stringhe:", stringa);
console.log("-------------------------------");
// Creare un array con i tempi raddoppiati (simulando preparazione lenta).
const raddoppiati = recipes.map((e) => e.time * 2);
console.log("Tempi di prep raddoppiati:", raddoppiati);
console.log("-------------------------------");

// FILTER //

// Ottenere tutte le ricette vegetariane.
const vegetariane = recipes.filter((e) => e.vegetarian === true);
console.log("Ricette vegetariane:", vegetariane);
console.log("-------------------------------");
// Ottenere tutte le ricette con tempo superiore a 30 minuti.
const tempoSuperiore = recipes.filter((e) => e.time > 30);
console.log("Tempo superiore a 30:", tempoSuperiore);
console.log("-------------------------------");
// Filtrare le ricette che hanno più di 7 ingredienti.
const più7 = recipes.filter((e) => e.ingredients > 7);
console.log("Ricette con più di 7 ingredienti:", più7);
console.log("-------------------------------");
// 	Ottenere tutte le ricette della cucina Italiana.
const italiana = recipes.filter((e) => e.cuisine === "Italiana");
console.log("Ricette cucina Italiana:", italiana);
console.log("-------------------------------");

// FIND //

// Trovare la ricetta chiamata "Curry".
const curry = recipes.find((e) => e.name === "Curry");
console.log(curry);
console.log("-------------------------------");
// Trovare la prima ricetta con esattamente 4 ingredienti.
const quattroIngr = recipes.find((e) => e.ingredients === 4);
console.log(quattroIngr);
console.log("-------------------------------");
// Trovare la prima ricetta con tempo di preparazione di 60 minuti.
const prep60 = recipes.find((e) => e.time === 60);
console.log(prep60);
console.log("-------------------------------");

// FOR EACH //

// Stampare i nomi di tutte le ricette uno per uno.
recipes.forEach((e) => console.log(`Nome ricetta: ${e.name}`));
console.log("-------------------------------");
// Stampare una frase per ogni ricetta: "La ricetta <name> richiede <time> minuti".
recipes.forEach((e) =>
  console.log(`La ricetta ${e.name} richiede ${e.time} minuti`)
);
console.log("-------------------------------");
// Stampare "Nome: [name], Cucina: [cuisine], Ingredienti: [ingredients]" per ogni ricetta.
recipes.forEach((e) =>
  console.log(`Nome: ${e.name} , Ingredienti: ${e.ingredients}`)
);
console.log("-------------------------------");
// MIX //

// Stampare nome e tempo dell’ultima ricetta nell’array.
console.log("Nome ultima ricetta:", ultimo.name);
console.log("Tempo ultima ricetta:", ultimo.time);
