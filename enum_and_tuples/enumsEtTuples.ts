// Enums & Tuples
/*
Enum : collection de valeurs qui ont un lien entre elles ( jour de la semaine) numérique ou chaine de charactére

Tuple: similaire aux arrays mais ne peut contenir qu'une valeur dy type spécifié


*/
// ENUMS
enum Weekdays {
  Lundi = 23,
  Mardi,
  Mercredi
}

console.log("reer"+ Weekdays[1]);
console.log(Weekdays[2]);


// TUPLES

let identity: [string, number] = ['Alex',42];
console.log(identity);