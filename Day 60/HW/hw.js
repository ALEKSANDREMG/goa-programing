console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("hello"));
console.log(Boolean(""));
console.log(Boolean(null));

let number = Number(prompt("Enter a number:"));
if (number % 2 === 0) {
  alert("Even number");
} else {
  alert("Odd number");
}

let score = Number(prompt("Enter your score (0-100):"));
if (score >= 90 && score <= 100) {
  alert("Grade: A");
} else if (score >= 80) {
  alert("Grade: B");
} else if (score >= 70) {
  alert("Grade: C");
} else if (score >= 60) {
  alert("Grade: D");
} else {
  alert("Grade: F");
}

let book = {
  title: "Your Book Title",
  author: "Your Name",
  genres: ["fiction", "adventure"]
};
console.log(book.genres[0]);
book.genres.push("mystery");
book.title = "Updated Book Title";
console.log(book);

let num1 = Number(prompt("Enter the first number:"));
let operator = prompt("Enter the operation (+, -, *, /):");
let num2 = Number(prompt("Enter the second number:"));
let result;
if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  alert("Invalid operator.");
}
if (result !== undefined) {
  alert("Result: " + result);
}

let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
if (name === "Alex" && age > 18) {
  alert("Welcome Alex!");
} else {
  alert("Access denied.");
}

let users = [
  { name: "Nika", age: 21 },
  { name: "Mariam", age: 19 }
];
console.log(users[0].name);
users[1].age = 20;
users.push({ name: "Giorgi", age: 25 });
console.log(users);

let input = prompt("Enter something:");
let converted = Number(input);
if (!isNaN(converted)) {
  alert("That’s a valid number!");
} else {
  alert("Not a number.");
}
