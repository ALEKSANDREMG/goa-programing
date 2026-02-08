const previous = document.getElementById("previous");
const next = document.getElementById("next");

let image = document.getElementById("image");
 
let index = 0

const images = ["0.jpg","1.jpg","2.jpg"]



function showImage(currIndex){
    index = currIndex
}
    if(index >= images.length){
        index = 0
    }

    image.src = images["https://thumbs.dreamstime.com/b/filtered-imege-amazing-red-tulip-flowers-spring-garden-144211811.jpg"]


