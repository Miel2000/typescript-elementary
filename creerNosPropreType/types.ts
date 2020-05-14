// Crée nos propres types


// on crée un type, ici Identity et Chats

type Identity = {
  name: string;
  age: number;
  isMajeur: boolean;
  hobbies: (string | number)[];
};

type Chats = {
  name: string;
  age: number;
  color: string[];
  hobbies: string[];
};
  
// on appel le mapping des données dans une variables et on y défini les informations en respectant les types des données
const monGars: Identity = {
  name: "Jean",
  age: 52,
  isMajeur:true,
  hobbies:["basket","piscine","lire",2]
};


const monGars2: Identity = {
  name: "POL",
  age: 5111,
  isMajeur:true,
  hobbies:["FOOT","escalade","lire",2]
};
const monChat: Chats = {
  name: "felix",
  age: 3,
  color:["red","blue","yellow"],
  hobbies:["yummy","zzzz","yummy"]
};

console.log(monGars);
console.log(monGars2);

console.log(monChat);

console.log('________________ TYPEOF & NEVER________________');

let value = 42;

if(typeof value == "number") console.log('Value est un nombre');

function foo(x: string | number): boolean {
  if (typeof x === "string"){
    return true;
  }
  else if (typeof x === "number") {
    return false;
  }
  return fail("Errrror toute rouge");
}

function fail(msg: string): never  {
  throw new Error(msg);
}
foo(3);

if (foo(value) == false) {
  console.log('yeet c false');
} else {
  console.log('cest bien true');
}
