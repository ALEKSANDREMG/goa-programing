const items = {
  apple: 2,
  banana: 1.5,
  orange: 3
};

const itemStrings = Object.entries(items).map(
  ([item, price]) => `${item}: $${price}`
);
console.log(itemStrings);

const person = {
  name: "Anna",
  age: 25,
  city: "Yerevan"
};

const properties = ["name", "age", "country", "city"];
let validCount = 0;

properties.forEach(prop => {
  if (Object.hasOwn(person, prop)) {
    validCount++;
  }
});
console.log(validCount);

const product = {
  id: 101,
  title: "Book",
  price: 20
};

const keys = Object.keys(product);
console.log(keys.length);
console.log(keys.includes("price"));

const scores = {
  math: 80,
  physics: 95,
  chemistry: 88
};

const values = Object.values(scores);
console.log(values.reduce((a, b) => a + b, 0));
console.log(Math.max(...values));
