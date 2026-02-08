let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log("Random 1-10:", random1to10);

let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll:", diceRoll);

let passwordLength = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
console.log("Random password length:", passwordLength);

let names = ["Alice", "Bob", "Charlie", "Diana"];
let randomIndex = Math.floor(Math.random() * names.length);
console.log("Selected name:", names[randomIndex]);

let now = new Date();
console.log("Current date and time:", now.toString());

let currentYear = now.getFullYear();
console.log("Current year:", currentYear);

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = daysOfWeek[now.getDay()];
console.log("Today is:", currentDay);
