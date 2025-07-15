function discountFunc() {
  let age = prompt("შეიყვანე შენი ასაკი:");
  age = Number(age);

  if (isNaN(age)) {
    alert("გთხოვთ, შეიყვანეთ სწორი რიცხვი.");
    return;
  }

  if (age < 18) {
    alert("შენ გაქვს 20% ფასდაკლება.");
  } else if (age >= 18 && age < 65) {
    alert("შენ გაქვს 5% ფასდაკლება.");
  } else {
    alert("შენ გაქვს 10% ფასდაკლება.");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.createElement("button");
  button.textContent = "გაიგე ფასდაკლება";
  document.body.appendChild(button);
  button.addEventListener("click", discountFunc);
});
