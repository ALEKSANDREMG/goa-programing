let paragraph = document.createElement("p");
paragraph.textContent = "ეს არის პარაგრაფი";
document.body.appendChild(paragraph);

let myDiv = document.createElement("div");
let heading = document.createElement("h1");
heading.textContent = "ეს არის სათაური";
myDiv.appendChild(heading);
document.body.appendChild(myDiv);

let image = document.createElement("img");
image.src = "https://via.placeholder.com/150";
document.body.appendChild(image);

let button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

let list = document.createElement("ul");

let item1 = document.createElement("li");
item1.textContent = "პუნქტი 1";
list.appendChild(item1);

let item2 = document.createElement("li");
item2.textContent = "პუნქტი 2";
list.appendChild(item2);

let item3 = document.createElement("li");
item3.textContent = "პუნქტი 3";
list.appendChild(item3);

document.body.appendChild(list);
