// Les interfaces.
// Les propriétés optionelles ou immuable dans une interface.
// L'héritage avec les interfaces.
// les interfaces et les fonctions. 

interface PersonId {
  name: string;
  city: string;
  age:number;
}

function hello(person: PersonId) {
  console.log(`Bonjour a toi ${person.name} tu as ${person.age} ans et tu viens de ${person.city}`);
}

const person = {
  name: "Alex",
  city: "Marseille",
  age:65
}

const user1: PersonId = {
  name: "le user1",
  city: "Paris",
  age: 422
}


hello(person);

hello(user1);



//  Les propriétés optionelles ou immuable dans une interface
console.log("--------- Propriété optionelles ou immuables dans une interface --------");

interface IUserProfile {
  readonly firstName: string;
  nickname: string;
  age?: number;
  password: string;
}

const user2: IUserProfile = {
  firstName: "JeanPol",
  nickname: "JP1001",
  // age: 33,
  password: "idk"
}


user2.nickname = "YYYYU";
console.log(user2);

// l'héritage avec les interfaces
console.log("--------- l'héritage avec les interfaces --------");

interface IAdvancedUserProfile extends IUserProfile {
  hobbies: string[];
  color: string;
  isMajeur: boolean;
}

const userExtended: IAdvancedUserProfile = {
  firstName:"Alexis",
  nickname:"AleX6",
  password: "idk22",
  hobbies: ["jogging", "piscine"],
  color: "red",
  isMajeur: true

}

const userT = <IAdvancedUserProfile>{
  color:'red'
}
userT.color = "greeeen";

console.log(userExtended);
console.log(userT);

// les interfaces et les fonctions 
console.log('--------- les interfaces et les fonctions --------------');

interface IHello {
  (name: string, age?: number): void;
}
const sayHello: IHello = (name, age) => {
  console.log(`Hello maméne ${name} tu as ${age} ans`)
}
const myFriendAge = 4555;

const sayFriend: IHello = (name, age) => {
  console.log(`Salut d'une autre facon ${name}, et a ${age} puis ${FriendAge("yeet")} et ${myFriendAge} `)
}

const FriendName: IHello = name => name;
const FriendAge: IHello = age => age; // ne marche pas car il est calqué sur le modéle de mon interface et ira forcement chercher le premier argument qui est ici la string name donc pas un number attendu, donc ca plante normal poto



sayHello('ANTOINE',9000);
sayFriend('TOTO', 45);

console.log(`${FriendName('la besta, argument de la fonction Friend(name)')}`);
console.log(`${FriendAge('yeyeye', 4)} et aussi $`);

