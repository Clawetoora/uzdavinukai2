// Pirma

console.log(`Pirma uzduotis --------`);

let person1 = "Leonardo DiCaprio";
let person2 = "Brad Pitt";

if (person1.length > person2.length) {
  console.log(person1);
}
if (person2.length > person1.length) {
  console.log(person2);
}
if (person1.length === person2.length) {
  console.log(`vienodo ilgio`);
}

// antra

console.log(`Antra uzduotis --------`);

console.log(person1.split(" ")[0].toUpperCase() + " " + person1.split(" ")[1]);

console.log(person2.split(" ")[0].toUpperCase() + " " + person2.split(" ")[1]);

// Trecia

console.log(`Trecia uzduotis--------`);

let person3 = "";

let firstLetter = person1.split(" ")[0].split("")[0];
let secondLetter = person1.split(" ")[1].split("")[0];
let thirdLetter = person2.split(" ")[0].split("")[0];
let fourthLetter = person2.split(" ")[1].split("")[0];

console.log(firstLetter + secondLetter + thirdLetter + fourthLetter);

// ketvirta

console.log(`Ketvirta uzduotis-------`);
let person4 = "";

let letters1 = person1.split(" ")[0].slice(-3);
let letters2 = person1.split(" ")[1].slice(-3);
let letters3 = person2.split(" ")[0].slice(-3);
let letters4 = person2.split(" ")[1].slice(-3);

person4 = letters1 + letters2 + letters3 + letters4;
console.log(person4);

// penkta
console.log(`Penkta uzduotis-------`);

let american = "An American in Paris";

console.log(american.replace(/a|A/g, "*"));

// Sesta
console.log(`Sesta uzduotis-------`);
console.log(american.replace(/[aeiou]/gi, " "));
console.log("Breakfast at Tiffany's".replace(/[aeiou]/gi, " "));

console.log("It's a Wonderful Life".replace(/[aeiou]/gi, " "));

// Septinta

console.log(`Septinta uzduotis-------`);

let starWars =
  "Star Wars: Episode " +
  " ".repeat(Math.ceil(Math.random() * 10)) +
  (Math.ceil(Math.random() * 7) + 1) +
  " - A New Hope";

console.log(starWars.match(/\d+/)[0]);

// AStunta

console.log(`Astunta uzduotis-------`);

let string1 =
  "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";

let splittedString1 = string1.split(" ");

let counter = 0;

for (let i = 0; i < splittedString1.length; i++) {
  if (splittedString1[i].length <= 5) {
    counter++;
  }
}
console.log(counter);

let string2 =
  "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
let splittedString2 = string2.split(" ");

let counter2 = 0;

for (let i = 0; i < splittedString2.length; i++) {
  if (splittedString2[i].length <= 5) {
    counter2++;
  }
}
console.log(counter2);

// Devinta

console.log("devinta uzduotis ---------");

let randomLetters = "";
let allowedLetters = "abcdefghijklmnopqrstuvwxyz";

for (let x = 0; x < 3; x++) {
  randomLetters += allowedLetters.charAt(
    Math.floor(Math.random() * allowedLetters.length)
  );
}
console.log(randomLetters);

// Desimta

console.log(`desimta uzduotis-------`);

let string3 =
  "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";

let string4 =
  "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";

let bendrasString = (string3 + " " + string4).split(" ");
console.log(bendrasString);

let randomWords = [];

for (let y = 0; randomWords.length < 10; y++) {
  choosingWord =
    bendrasString[Math.floor(Math.random() * bendrasString.length)];
  if (randomWords.indexOf(choosingWord) === -1) {
    randomWords.push(choosingWord);
  }
}

console.log(randomWords.join(" "));
