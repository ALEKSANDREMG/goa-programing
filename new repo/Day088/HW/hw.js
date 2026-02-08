setTimeout(function() {
  console.log("Hello");
}, 2000);

setTimeout(function() {
  document.getElementById("myPara").textContent = "Text changed after 1 second";
}, 1000);

setTimeout(function() {
  alert("This alert appears 3 seconds after page load");
}, 3000);

setTimeout(function() {
  console.log("Time's up!");
}, 5000);

localStorage.setItem("username", "JohnDoe");

var savedUser = localStorage.getItem("username");
console.log("Saved username: " + savedUser);

localStorage.removeItem("username");

localStorage.clear();
