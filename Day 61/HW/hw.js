let num2 = Number(prompt("Enter a number:"));
if (num2 % 2 === 0) {
  alert("Even");
} else {
  alert("Odd");
}

let score3 = Number(prompt("Enter your score:"));
if (score3 >= 90) {
  alert("Grade A");
} else if (score3 >= 80) {
  alert("Grade B");
} else if (score3 >= 70) {
  alert("Grade C");
} else if (score3 >= 60) {
  alert("Grade D");
} else {
  alert("Fail");
}

let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let c = Number(prompt("Enter third number:"));
if (a === b && b === c) {
  alert("All numbers are equal");
} else if (a >= b && a >= c) {
  alert("Largest: " + a);
} else if (b >= a && b >= c) {
  alert("Largest: " + b);
} else {
  alert("Largest: " + c);
}

let ch = prompt("Enter a single character:").toLowerCase();
if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
  alert("Vowel");
} else {
  alert("Consonant");
}

let num6 = Number(prompt("Enter a number:"));
if (num6 % 3 === 0 && num6 % 5 === 0) {
  alert("Divisible by both");
} else if (num6 % 3 === 0) {
  alert("Divisible by 3 only");
} else if (num6 % 5 === 0) {
  alert("Divisible by 5 only");
} else {
  alert("Not divisible by 3 or 5");
}

let age7 = Number(prompt("Enter age:"));
if (age7 >= 0 && age7 <= 12) {
  alert("Child");
} else if (age7 >= 13 && age7 <= 19) {
  alert("Teenager");
} else if (age7 >= 20 && age7 <= 59) {
  alert("Adult");
} else if (age7 >= 60) {
  alert("Senior");
} else {
  alert("Invalid age");
}

let i8 = 1;
while (i8 <= 5) {
  console.log(i8);
  i8++;
}

let i9 = 2;
while (i9 <= 10) {
  console.log(i9);
  i9 += 2;
}

let i10 = 10;
while (i10 >= 1) {
  console.log(i10);
  i10--;
}

for (let i11 = 1; i11 <= 10; i11++) {
  console.log(i11);
}

for (let i12 = 1; i12 <= 5; i12++) {
  console.log(i12 * 3);
}

for (let i13 = 10; i13 >= 1; i13--) {
  console.log(i13);
}

for (let i14 = 1; i14 <= 20; i14++) {
  if (i14 % 2 === 0) {
    console.log(i14);
  }
}

let sum15 = 0;
for (let i15 = 1; i15 <= 5; i15++) {
  sum15 += i15;
}
console.log("Sum:", sum15);
