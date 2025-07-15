// ობიექტის შექმნა
let person = {
  name: "ალექსანდრე",
  surname: "მგალობლიშვილი",
  academy: "GOA",
  num: 7,
  favColor: "ლურჯი",
  isGoaStudent: true,

  // მეთოდი greet
  greet: function() {
    console.log("hello");
  }
};

// მთლიანი ობიექტის დაბეჭდვა
console.log(person);

// ერთ-ერთი კუთვნილების დაბეჭდვა
console.log(person.favColor);

// greet მეთოდის გამოძახება
person.greet();

// AND ოპერატორი (&&)
console.log(true && true);   // true - ორივე პირობა ჭეშმარიტია
console.log(true && false);  // false - ერთი პირობა ცრუა
console.log(false && true);  // false - ერთი პირობა ცრუა
console.log(false && false); // false - ორივე პირობა ცრუა

// OR ოპერატორი (||)
console.log(true || true);   // true - ორივე პირობა ჭეშმარიტია
console.log(true || false);  // true - ერთი მაინც ჭეშმარიტია
console.log(false || true);  // true - ერთი მაინც ჭეშმარიტია
console.log(false || false); // false - ორივე პირობა ცრუა

// ობიექტის შექმნა
let myObj = {
  name: "ნიკა",
  age: 16,
  city: "თბილისი",

  // მეთოდი 1
  printName: function() {
    console.log("Name:", this.name);
  },

  // მეთოდი 2
  printAge: function() {
    console.log("Age:", this.age);
  },

  // მეთოდი 3
  printCity: function() {
    console.log("City:", this.city);
  }
};

// მეთოდების გამოძახება
myObj.printName();  // გამოიტანს name
myObj.printAge();   // გამოიტანს age
myObj.printCity();  // გამოიტანს city
