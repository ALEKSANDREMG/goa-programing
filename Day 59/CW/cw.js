let input = prompt("შეიყვანე რიცხვი:");

let number = Number(input);

if (ProcessingInstruction(number)) {
  alert("გთხოვთ, შეიყვანეთ სწორი რიცხვი.");
} else if (number % 2 === 0) {
  alert(number + " არის ლუწი რიცხვი.");
} else {
  alert(number + " არის კენტი რიცხვი.");
}

let person = {
  name: {
    first: "Giorgi",
    middle: "Nika",
    last: "Beridze"
  },
  age: {
    years: 25,
    months: 3,
    days: 10
  }
};

let put = document.createElement("input");
input.type = "text";
input.name = "username";
input.placeholder = "შეიყვანე სახელი";

let button = document.createElement("button");
button.textContent = "დადასტურება";

document.body.appendChild(input);
document.body.appendChild(button);

button.onclick = function() {
  let usernameInput = document.getElementsByName("username")[0];
  let value = usernameInput.value;
  alert(value);
  usernameInput.value = "";
};

