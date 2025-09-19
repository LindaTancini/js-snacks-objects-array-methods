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

// LENGTH - ACCESSO - NOTATION //

// Contare quante città ci sono nell’array
console.log(`Ci sono ${cities.length} città`);
console.log("-------------------------------");
// Accedere alla prima città.
const primo = cities[0];
console.log("Prima città:", primo);
console.log("-------------------------------");
// Accedere all’ultima città.
const ultimo = cities[cities.length - 1];
console.log("Ultima città:", ultimo);
console.log("-------------------------------");
// Stampare nome e paese della seconda città
const secondo = cities[1];
console.log("Nome seconda città:", secondo.name);
console.log("Paese seconda cittò:", secondo.country);
console.log("-------------------------------");
// Stampare nome e popolazione della terza città.
const terzo = cities[2];
console.log("Nome terza città:", terzo["name"]);
console.log("Popolazione terza città:", terzo["population"]);
console.log("-------------------------------");
// MAP //

// Creare un array con i nomi di tutte le città.
const nomi = cities.map((e) => e.name);
console.log(nomi);
console.log("-------------------------------");
// 	Creare un array di stringhe tipo: "Tokyo (Giappone) - Popolazione: 37M, Area: 2194 km²".
const stringa = cities.map(
  (e) =>
    `${e.name} (${e.country}) - Popolazione: ${e.population} M, Area: ${e.area} km`
);
console.log(stringa);
console.log("-------------------------------");

// FILTER //

// Ottenere città con più di 10 milioni di abitanti.
const dieciMilioni = cities.filter((e) => e.population > 10);
console.log(dieciMilioni);
console.log("-------------------------------");
// Ottenere città che si trovano in Europa.
const europa = cities.filter((e) => e.continent === "Europa");
console.log(europa);
console.log("-------------------------------");
// Filtrare tutte le città che non sono in Asia.
const noAsia = cities.filter((e) => !e.continent.includes("Asia"));
console.log(noAsia);
console.log("-------------------------------");

// FIND //

// Trovare la città chiamata "New York".
const newYork = cities.find((e) => e.name === "New York");
console.log(newYork);
console.log("-------------------------------");
// Trovare la città con area esattamente 2194 km².
const area = cities.find((e) => e.area === 2194);
console.log(area);
console.log("-------------------------------");
// Trovare la prima città con popolazione inferiore a 5 milioni.
const popolazioniMinore = cities.find((e) => e.population < 5);
console.log(popolazioniMinore);
console.log("-------------------------------");

// FOR EACH //

// Stampare tutti i nomi delle città uno per uno.
cities.forEach((e) => console.log(e.name));
console.log("-------------------------------");
// Stampare una frase tipo: "La città di Tokyo si trova in Giappone e ha 37 milioni di abitanti".
cities.forEach((e) =>
  console.log(
    `La città di ${e.name} si trova in ${e.country} e ha ${e.population} milioni di abitanti`
  )
);
console.log("-------------------------------");

// MIX //

// Stampare nome e popolazione della penultima città.
const penultima = cities[cities.length - 2];
console.log("Nome penultima città:", penultima.name);
console.log("Popolazione penultima città:", penultima.population);
console.log("-------------------------------");
// Creare un array con i nomi delle città con area maggiore di 2000 km².
const nomiCittà = cities.filter((e) => e.area > 2000).map((e) => e.name);
console.log(nomiCittà);
console.log("-------------------------------");
// Calcolare il totale degli abitanti sommando tutte le popolazioni.
const totale = cities.map((e) => e.population).reduce((sum, e) => sum + e, 0);
console.log("Popolazione totale in milioni:", totale);
console.log("-------------------------------");
// Creare un array con "Nome - Paese" per ogni città.
const descrizione = cities.map((e) => `${e.name} - ${e.country}`);
console.log(descrizione);
console.log("-------------------------------");
// Ordinare le città in ordine decrescente di popolazione e stamparle.
const cittàDecr = [...cities].sort((a, b) => b.population - a.population);
cittàDecr.forEach((e) => console.log(`${e.name} - ${e.population} milioni`));
