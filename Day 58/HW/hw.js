let num = Number(prompt("შეიყვანე რიცხვი:"));

if (isNaN(num)) {
  alert("ეს არ არის რიცხვი.");
} else if (num > 0) {
  alert("რიცხვი დადებითია.");
} else if (num < 0) {
  alert("რიცხვი უარყოფითია.");
} else {
  alert("რიცხვი არის ნული.");
}

let age = Number(prompt("შეიყვანე ასაკი:"));

if (isNaN(age)) {
  alert("გთხოვთ, შეიყვანეთ რიცხვი.");
} else if (age >= 18) {
  alert("შეგიძლია ხმის მიცემა!");
} else {
  alert("არ ხარ ხმის მიცემის უფლების მქონე.");
}
 
let num1 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
let num2 = Number(prompt("შეიყვანე მეორე რიცხვი:"));

if (isNaN(num1) || isNaN(num2)) {
  alert("გთხოვთ, ორივე რიცხვი სწორად შეიყვანეთ.");
} else if (num1 > num2) {
  alert("პირველი რიცხვი მეტია.");
} else if (num1 < num2) {
  alert("მეორე რიცხვი მეტია.");
} else {
  alert("ორივე რიცხვი ტოლია.");
}
