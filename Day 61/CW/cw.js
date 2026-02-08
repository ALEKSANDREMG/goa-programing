let number = 0;

while (number < 100) {
  console.log(number);
  number = number + 5;
}

function correctUserPassword() {
  let correctPassword = "12345";
  let userInput;
  let attempts = 0;
  while (userInput !== correctPassword) {
    userInput = prompt("შეიყვანეთ პაროლი:");
    attempts++;
  }
  alert("correct guess! ცდების რაოდენობა: " + attempts);
}

correctUserPassword();

window.onload = function() {
  correctUserPassword();
};
