// 1. Create an empty object
let emptyObject = {};

// 2. Create an object with your name, age, and city
let person = {
  name: "ალექსანდრე",
  age: 15,
  city: "თბილისი"
};

// 3. Access the value of a property in an object
console.log(person.name);  // ალექსანდრე

// 4. Add a new property to an existing object
person.hobby = "ფეხბურთი";
console.log(person);  // ობიექტში დაემატება hobby: "ფეხბურთი"

// 5. Create a nested object (an object inside another object)
let student = {
  personalInfo: {
    name: "ანა",
    age: 14
  },
  school: "GOA"
};
console.log(student.personalInfo.name);  // ანა

// 6. Change the value of an existing property in an object
person.age = 16;
console.log(person.age);  // 16

// 8. Check if two numbers are both greater than 10
let a = 12;
let b = 15;
console.log(a > 10 && b > 10); // true – ორივე რიცხვი მეტია 10-ზე

// 9. Check if at least one of two conditions is true
let x = 5;
let y = 20;
console.log(x > 10 || y > 10); // true – ერთი მაინც (y) მეტია 10-ზე

// 10. Use the NOT operator to invert a boolean value
let isHappy = true;
console.log(!isHappy); // false – ინვერსია: true გახდა false

// 11. Combine multiple logical operations in a single expression
let age = 17;
let hasID = true;
console.log((age >= 18 && hasID) || age >= 16); 
// false && true → false, შემდეგ: false || true → true
