// Enums & Tuples
/*
Enum : collection de valeurs qui ont un lien entre elles ( jour de la semaine) numérique ou chaine de charactére

Tuple: similaire aux arrays mais ne peut contenir qu'une valeur dy type spécifié


*/
// ENUMS
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Lundi"] = 23] = "Lundi";
    Weekdays[Weekdays["Mardi"] = 24] = "Mardi";
    Weekdays[Weekdays["Mercredi"] = 25] = "Mercredi";
})(Weekdays || (Weekdays = {}));
console.log("reer" + Weekdays[1]);
console.log(Weekdays[2]);
// TUPLES
var identity = ['Alex', 42];
console.log(identity);
