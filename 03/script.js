const snacks = [
  { id: 1, name: "Patatine", calories: 150, type: "salato" },
  { id: 2, name: "Cioccolato", calories: 250, type: "dolce" },
  { id: 3, name: "Popcorn", calories: 120, type: "salato" },
  { id: 4, name: "Caramelle", calories: 200, type: "dolce" },
  { id: 5, name: "Barretta proteica", calories: 180, type: "proteico" },
];

// Stampa in console il nome di ogni snack.
snacks.forEach((e) => console.log(e.name));
console.log("---");

// Crea un array con tutte le calorie degli snack.
const calorie = snacks.map((e) => e.calories);
console.log(calorie);
console.log("---");

// Prendi solo gli snack con meno di 200 calorie.
const pocheCalorie = snacks.filter((e) => e.calories < 200);
console.log(pocheCalorie);
console.log("---");

// Trova lo snack che ha id === 3.
const trovaID = snacks.find((e) => e.id === 3);
console.log(trovaID);
console.log("---");

// Quanti snack ci sono nell’array?
const lunghezzaSnack = snacks.length;
console.log(`Ci sono ${lunghezzaSnack} snacks`);
console.log("---");

// Stampa il secondo snack dell’array.
const secondo = snacks[1];
console.log(secondo);
console.log("---");

// Crea un array con frasi del tipo: "Lo snack Patatine ha 150 calorie".
const descrizione = snacks.map(
  (e) => `Lo Snack ${e.name} ha ${e.calories} calorie`
);
console.log(descrizione);
console.log("---");

// Ottieni solo i nomi degli snack di tipo "dolce".
const dolci = snacks.filter((e) => e.type === "dolce").map((e) => e.name);
console.log(dolci);
console.log("---");

// Trova lo snack con più di 200 calorie.
const calorico = snacks.find((e) => e.calories > 200);
console.log(calorico);
console.log("---");

// Quanti snack sono di tipo "salato"?
const salati = snacks.filter((e) => e.type === "salato");
console.log(`Ci sono ${salati.length} snacks salati`);
