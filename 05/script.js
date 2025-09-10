const drinks = [
  { id: 1, name: "Coca Cola", sugar: 35, type: "gassata" },
  { id: 2, name: "Succo d'arancia", sugar: 20, type: "frutta" },
  { id: 3, name: "Tè freddo", sugar: 25, type: "tè" },
  { id: 4, name: "Acqua", sugar: 0, type: "naturale" },
  { id: 5, name: "Energy Drink", sugar: 45, type: "energetica" },
];

// Stampa in console il nome di ogni bevanda.
drinks.forEach((e) => console.log(e.name));
console.log("-----");

// Crea un array con solo i valori di zucchero (sugar).
const zucchero = drinks.map((e) => e.sugar);
console.log(zucchero);
console.log("-----");

// Trova le bevande con meno di 30 grammi di zucchero.
const menoZucchero = drinks.filter((e) => e.sugar < 30);
console.log(menoZucchero);
console.log("-----");

// Trova la bevanda con id === 5.
const trovaBevanda = drinks.find((e) => e.id === 5);
console.log(trovaBevanda);
console.log("-----");

// Quante bevande ci sono in totale?
console.log(`Ci sono ${drinks.length} drinks`);
console.log("-----");

// Stampa la prima bevanda
console.log(drinks[0]);
console.log("-----");

// Stampa la terza bevanda
console.log(drinks[2]);
console.log("-----");

// Crea un array con frasi tipo: "La Coca Cola contiene 35g di zucchero".
const descrizione = drinks.map((e) =>
  console.log(`Il drink ${e.name} contiene ${e.sugar}g di zucchero`)
);
console.log("-----");

// Ottieni i nomi delle bevande di tipo "gassata".
const gassata = drinks.filter((e) => e.type === "gassata").map((e) => e.name);
console.log(gassata);
console.log("-----");

// Trova la bevanda che si chiama "Tè freddo".
const teFreddo = drinks.find((e) => e.name === "Tè freddo");
console.log(teFreddo);
console.log("-----");

// Quante bevande hanno più di 30g di zucchero?
const zuccherose = drinks.filter((e) => e.sugar > 30);
console.log(zuccherose.length);
console.log("-----");

// Crea un array con i nomi scritti in MAIUSCOLO.
const maiuscolo = drinks.map((e) => e.name.toUpperCase());
console.log(maiuscolo);
console.log("-----");

// Stampa solo i nomi delle bevande con zucchero = 0.
drinks.forEach((e) => {
  if (e.sugar === 0) {
    console.log(e.name);
  }
});
console.log("-----");

// Prendi le bevande che hanno tra 10 e 30g di zucchero.
const medie = drinks.filter((e) => e.sugar > 10 && e.sugar < 30);
console.log(medie);
console.log("-----");

// Crea un nuovo array con oggetti semplificati: { nome: "Coca Cola", zucchero: 35 }
const semplificati = drinks.map((e) => ({ nome: e.name, zucchero: e.sugar }));
console.log(semplificati);
