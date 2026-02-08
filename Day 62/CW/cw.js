let h2 = document.getElementById("title");
function setFontSize() {
  let size = prompt("შემოიტანე რიცხვი:");
  h2.style.fontSize = size + "px";
}
h2.onclick = setFontSize;
