document.getElementById("btnChangeText").addEventListener("click", function () {
  document.getElementById("para").textContent = "Text changed!";
});

document.getElementById("btnChangeBg").addEventListener("click", function () {
  document.getElementById("box").style.backgroundColor = "skyblue";
});

document.getElementById("btnChangeFont").addEventListener("click", function () {
  document.getElementById("heading").style.fontSize = "40px";
});

document.getElementById("btnHideDiv").addEventListener("click", function () {
  document.getElementById("hiddenBox").style.display = "none";
});

document.getElementById("btnAlert").addEventListener("click", function () {
  alert("Custom alert message!");
});
