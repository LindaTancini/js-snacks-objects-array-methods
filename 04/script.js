const fruits = [
  { id: 1, name: "Mela", color: "rosso", calories: 95 },
  { id: 2, name: "Banana", color: "giallo", calories: 105 },
  { id: 3, name: "Arancia", color: "arancione", calories: 62 },
  { id: 4, name: "Pera", color: "verde", calories: 85 },
  { id: 5, name: "Mango", color: "arancione", calories: 150 },
];

// Stampa in console il nome di ogni frutto.
fruits.forEach((e) => console.log(e.name));
console.log("---");

// Crea un array con solo i colori dei frutti.
const colori = fruits.map((e) => e.color);
console.log(`Colori dei frutti: ${colori}`);
console.log("---");

// Prendi solo i frutti con meno di 100 calorie.
const leggeri = fruits.filter((e) => e.calories < 100);
console.log(leggeri);
console.log("---");

// Trova il frutto con id === 4.
const trovaFrutto = fruits.find((e) => e.id === 4);
console.log(trovaFrutto);
console.log("---");

// Quanti frutti ci sono nell’array?
console.log(`Ci sono ${fruits.length} frutti`);
console.log("---");

// Stampa il terzo frutto dell’array.
const terzo = fruits[2];
console.log(terzo);
console.log("---");

// Crea frasi come: "La Mela ha 95 calorie".
const descrizione = fruits.map((e) =>
  console.log(`Il frutto ${e.name} ha ${e.calories} calorie`)
);
console.log("---");

// Ottieni solo i nomi dei frutti di colore "arancione".
const arancioni = fruits
  .filter((e) => e.color === "arancione")
  .map((e) => e.name);
console.log(arancioni);
console.log("---");

// Trova il frutto con più di 120 calorie.
const calorico = fruits.find((e) => e.calories > 120);
console.log(calorico);
console.log("---");

// Quanti frutti hanno meno di 100 calorie?
const menoCalorie = fruits.filter((e) => e.calories < 100);
console.log(`I frutti che hanno meno calorie sono ${menoCalorie.length}`);
console.log("---");

// Crea un array con stringhe in maiuscolo: "MELA", "BANANA", ...
const maiuscolo = fruits.map((e) => e.name.toUpperCase());
console.log(maiuscolo);
console.log("---");

// Stampa solo i nomi dei frutti di colore "verde".
fruits.forEach((e) => {
  if (e.color === "verde") {
    console.log(e.name);
  }
});
console.log("---");

// Prendi i frutti che hanno tra 80 e 120 calorie.
const medi = fruits.filter((e) => e.calories <= 120 && e.calories >= 80);
console.log(medi);
console.log("---");

// Crea un array con oggetti semplificati: { nome: "Mela", kcal: 95 }
const semplificati = fruits.map((e) => ({ nome: e.name, kcal: e.calories }));
console.log(semplificati);
console.log("---");

// Trova il frutto che si chiama "Banana".
const banana = fruits.find((e) => e.name === "Banana");
console.log(banana);
