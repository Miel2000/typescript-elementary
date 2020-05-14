"use strict";
// Les interfaces.
// Les propriétés optionelles ou immuable dans une interface.
// L'héritage avec les interfaces.
// les interfaces et les fonctions. 
function hello(person) {
    console.log("Bonjour a toi " + person.name + " tu as " + person.age + " ans et tu viens de " + person.city);
}
var person = {
    name: "Alex",
    city: "Marseille",
    age: 65
};
var user1 = {
    name: "le user1",
    city: "Paris",
    age: 422
};
hello(person);
hello(user1);
//  Les propriétés optionelles ou immuable dans une interface
console.log("--------- Propriété optionelles ou immuables dans une interface --------");
var user2 = {
    firstName: "JeanPol",
    nickname: "JP1001",
    // age: 33,
    password: "idk"
};
user2.nickname = "YYYYU";
console.log(user2);
// l'héritage avec les interfaces
console.log("--------- l'héritage avec les interfaces --------");
var userExtended = {
    firstName: "Alexis",
    nickname: "AleX6",
    password: "idk22",
    hobbies: ["jogging", "piscine"],
    color: "red",
    isMajeur: true
};
var userT = {
    color: 'red'
};
userT.color = "greeeen";
console.log(userExtended);
console.log(userT);
// les interfaces et les fonctions 
console.log('--------- les interfaces et les fonctions --------------');
var sayHello = function (name, age) {
    console.log("Hello mam\u00E9ne " + name + " tu as " + age + " ans");
};
var myFriendAge = 4555;
var sayFriend = function (name, age) {
    console.log("Salut d'une autre facon " + name + ", et a " + age + " puis " + FriendAge("yeet") + " et " + myFriendAge + " ");
};
var FriendName = function (name) { return name; };
var FriendAge = function (age) { return age; }; // ne marche pas car il est calqué sur le modéle de mon interface et ira forcement chercher le premier argument qui est ici la string name donc pas un number attendu, donc ca plante normal poto
sayHello('ANTOINE', 9000);
sayFriend('TOTO', 45);
console.log("" + FriendName('la besta, argument de la fonction Friend(name)'));
console.log(FriendAge('yeyeye', 4) + " et aussi $");
