const student = {
  name: "alexandre",
  surname: "mgaloblishvili",
  academy: "GOA",
  favColor: "black",
  favNumber: 22
};

const keys = [
  "name",
  "myName",
  "mySurname",
  "worstColor",
  "favColor",
  "favnumber",
  "favNumber"
];

keys.forEach(key => {
    console.log(Object.hasOwn(student, key))
})