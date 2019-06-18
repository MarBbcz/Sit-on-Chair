//Slider

var sliderPrev = document.querySelector(".sliderPrev");
var sliderNext = document.querySelector(".sliderNext");
var visImg = 0;

var listElements = document.querySelectorAll(".sliderImg li");
listElements[visImg].classList.add("visible");
console.log(listElements[visImg]);


sliderNext .addEventListener("click", function () {
    listElements[visImg].classList.remove("visible");
    visImg++;
    if (visImg >= listElements.length  || visImg === 0) {
        visImg = 0;
    }
    listElements[visImg].classList.add("visible");

});

sliderPrev.addEventListener("click", function () {
    listElements[visImg].classList.remove("visible");
    visImg--;
    if (visImg < 0) {
        visImg = listElements.length - 1;
    }
    listElements[visImg].classList.add("visible");
});


//Hiding product bar

var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");


box1.addEventListener("mouseover", function () {
    var boxBar = box1.querySelector("p");
    boxBar.style.display = "none";
});

box1.addEventListener("mouseout", function () {
    var boxBar = box1.querySelector("p");
    boxBar.style.display = "block";
});

box2.addEventListener("mouseover", function () {
    var boxBar = box2.querySelector("p");
    boxBar.style.display = "none";
});

box2.addEventListener("mouseout", function () {
    var boxBar = box2.querySelector("p");
    boxBar.style.display = "block";
});