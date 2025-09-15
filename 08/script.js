const animals = [
  { id: 1, name: "Leone", habitat: "Savanna", legs: 4, carnivore: true },
  { id: 2, name: "Aquila", habitat: "Montagna", legs: 2, carnivore: true },
  { id: 3, name: "Elefante", habitat: "Savanna", legs: 4, carnivore: false },
  { id: 4, name: "Pinguino", habitat: "Antartide", legs: 2, carnivore: false },
  { id: 5, name: "Cane", habitat: "Casa", legs: 4, carnivore: true },
];

// map → Crea un array con i nomi di tutti gli animali in maiuscolo.
const maiuscolo = animals.map((e) => e.name.toUpperCase());
console.log(maiuscolo);
console.log("-----");
// map → Crea un array di frasi del tipo: "L'animale X vive in Y".
const frase = animals.map((e) =>
  console.log(`L'animale ${e.name} vive in ${e.habitat}`)
);
console.log("-----");
// filter → Trova tutti gli animali che hanno 4 zampe.
const quattroZampe = animals.filter((e) => e.legs === 4);
console.log(quattroZampe);
console.log("-----");
// filter → Trova tutti gli animali che non sono carnivori.
const noCarnivori = animals.filter((e) => e.carnivore === false);
console.log(noCarnivori);
console.log("-----");
// find → Trova l’animale che vive in "Casa".
const casa = animals.find((e) => e.habitat === "Casa");
console.log(casa);
console.log("-----");
// find → Trova il primo animale che ha 2 zampe.
const dueZampe = animals.find((e) => e.legs === 2);
console.log(dueZampe);
console.log("-----");
// forEach → Stampa in console una frase per ogni animale: "X ha Y zampe".
animals.forEach((e) => console.log(`${e.name} ha ${e.legs} zampe`));
console.log("-----");
// length → Quanti animali ci sono nell’array?
console.log(`Ci sono ${animals.length} animali`);
// posizione → Stampa il nome del quarto animale dell’array.
console.log(animals[3]);
// posizione + map → Prendi il primo animale dell’array e crea una frase "Il primo animale è X ed è carnivoro: true/false".
const primo = animals[0];

console.log(
  `Il primo animale è ${primo.name} ed è carnivoro: ${primo.carnivore}`
);
