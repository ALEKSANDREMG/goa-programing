// 2. Check if Two Numbers Are Equal
let a = 10;
let b = 10;
console.log(a == b); // true

// 3. Check if a Number is Greater Than Another
let c = 20;
let d = 15;
console.log(c > d); // true

// 4. Check if a Number is Less Than or Equal to Another
let e = 12;
let f = 18;
console.log(e <= f); // true

// 5. Check if Two Numbers Are Not Equal
let g = 25;
let h = 30;
console.log(g != h); // true

// 6. Check if a Number is Greater Than or Equal to 100
let i = 105;
console.log(i >= 100); // true

// 7. Show confirm box and log result
let result1 = confirm("Are you sure?");
console.log(result1);

// 8. Confirm box on button click
function showConfirm() {
  let result2 = confirm("Do you agree?");
  console.log(result2);
}

// Add this button in your HTML:
// <button onclick="showConfirm()">Ask me</button>

// 9. Confirm on page load, alert result
window.onload = function () {
  let result3 = confirm("Do you accept terms?");
  alert(result3);
};

// 10. On form submit, log username
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload
  let username = this.elements.username.value;
  console.log(username);
});

// 11. Clear email on button click
function clearEmail() {
  let form = document.getElementById("myForm");
  form.elements.email.value = "";
}

// 12. Alert phone on button click
function alertPhone() {
  let form = document.getElementById("myForm");
  alert(form.elements.phone.value);
}
