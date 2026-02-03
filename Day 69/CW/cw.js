const p = document.getElementById("GOAISBEST");

p.addEventListener("click", function () {
    if (p.style.textAlign === "" || p.style.textAlign === "left") {
        p.style.textAlign = "center";
    } else if (p.style.textAlign === "center") {
        p.style.textAlign = "left";
    }
});
