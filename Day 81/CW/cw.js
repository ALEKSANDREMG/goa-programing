const languages = ["Java", "Python", "JavaScript", "C++", "TypeScript", "holic"];

const index = languages.findIndex(lang => lang.length > 8);

console.log(index); 
console.log(languages[index]); 

const arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];

const index1 = arr.indexOf(1);
const lastIndex1 = arr.lastIndexOf(1);
const index5 = arr.indexOf(5);
const lastIndex5 = arr.lastIndexOf(5);

console.log(index1);
console.log(lastIndex1);
console.log(index5);
console.log(lastIndex5);

