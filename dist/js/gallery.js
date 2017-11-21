var gallery = ["image-1.png", "image-2.png", "image-3.png"];
var counter = 1;

var arrowRight = document.querySelector(".arrow--right");
var arrowLeft = document.querySelector(".arrow--left");

arrowRight.addEventListener('click', scrollRight);
arrowLeft.addEventListener('click', scrollLeft);


function scrollRight() {
    counter += 1;

    var imageLeft = document.querySelector(".image--left");
    var imageCenter = document.querySelector(".image--center");
    var imageRight = document.querySelector(".image--right");

    if (counter >= gallery.length - 1) {
        imageRight.src = "/assets/img/" + gallery[0];
        arrowRight.classList.add("hidden");
    } else {
        arrowRight.classList.remove("hidden");
        arrowLeft.classList.remove("hidden");
        imageRight.src = "/assets/img/" + gallery[counter + 1];
    }

    imageLeft.src = "/assets/img/" + gallery[counter - 1];
    imageCenter.src = "/assets/img/" + gallery[counter];
}

function scrollLeft() {
    counter -= 1;

    var imageLeft = document.querySelector(".image--left");
    var imageRight = document.querySelector(".image--right");
    var imageCenter = document.querySelector(".image--center");


    if (counter === 0) {
        imageLeft.src = "/assets/img/" + gallery[2];
        arrowLeft.classList.add("hidden");
    } else {
        arrowLeft.classList.remove("hidden");
        arrowRight.classList.remove("hidden");
        imageLeft.src = "/assets/img/" + gallery[counter - 1];
    }

    imageCenter.src = "/assets/img/" + gallery[counter];
    imageRight.src = "/assets/img/" + gallery[counter + 1];
}
