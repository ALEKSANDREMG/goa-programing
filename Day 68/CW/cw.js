function replaceParagraphWithButton() {
  const button = document.createElement("button");
  button.textContent ="goa";
  const paragraph = document.getElementById("myParagraph");
  const parent = paragraph.parentNode;
  parent.replaceChild(button, paragraph);
}


let paragraph = document.getElementById("myParagraph");

paragraph.onmouseover = function() {
  paragraph.textContent = "goa";
};


let counter = 0;
const h2 = document.getElementById('myHeading');

h2.addEventListener('mouseout', function () {
  counter += 1;
  console.log(counter);
});
