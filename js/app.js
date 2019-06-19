//Dropdown menu
var liElements = document.querySelectorAll("nav>ul>li");


for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener("mouseover", function () {
        var dropListElements = liElements[i].querySelector(":scope ul");
        if (dropListElements != null) {
            dropListElements.style.display = "block";
        } else {
            return null
        }
    })
}

for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener("mouseout", function () {
        var dropListElements = liElements[i].querySelector(":scope ul");
        if (dropListElements != null) {
            dropListElements.style.display = "none";
        } else {
            return null
        }

    })
}

//Slider

var sliderPrev = document.querySelector(".sliderPrev");
var sliderNext = document.querySelector(".sliderNext");
var visImg = 0;

var listElements = document.querySelectorAll(".sliderImg li");
listElements[visImg].classList.add("visible");


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

//Price calculator

var chairName = document.querySelector(".chairName");
var chairColor = document.querySelector(".chairColor");
var chairFabric = document.querySelector(".chairFabric");

var checkbox = document.querySelector(".checkbox");
var checkboxInput = document.querySelector("input[type=checkbox]");


var showChairName = document.querySelector(".showName");
var showChairColor = document.querySelector(".showColor");
var showChairFabric = document.querySelector(".showFabric");

var selectedChairName = document.querySelector(".panel_left .title");
var selectedChairColor = document.querySelector(".panel_left .color");
var selectedChairFabric = document.querySelector(".panel_left .pattern");
var selectedTransport = document.querySelector(".panel_left .transport");

var chairNamePrice = document.querySelector(".panel_right .title.value");
var chairColorPrice = document.querySelector(".panel_right .color.value");
var chairFabricPrice = document.querySelector(".panel_right .pattern.value");
var transportPrice = document.querySelector(".panel_right .transport.value");

var sum = document.querySelector(".sum");
var sumChairPrice = 0;
var sumColorPrice = 0;
var sumFabricPrice = 0;
var sumTransportPrice = 0;

chairName.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("optionSelected");
    chairColor.nextElementSibling.classList.remove("optionSelected");
    chairFabric.nextElementSibling.classList.remove("optionSelected");

    for (var i = 0; i < this.nextElementSibling.children.length; i++) {
        this.nextElementSibling.children[i].addEventListener('click', function() {

            showChairName.innerText = this.innerText;
            selectedChairName.innerText = this.innerText;
            chairNamePrice.innerText = this.dataset.chairPrice;

            sumChairPrice =+ parseInt(this.dataset.chairPrice);
            sum.innerHTML = sumChairPrice + sumColorPrice + sumFabricPrice + sumTransportPrice;

        })
    }

});

chairColor.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("optionSelected");
    chairName.nextElementSibling.classList.remove("optionSelected");
    chairFabric.nextElementSibling.classList.remove("optionSelected");

    for (var i = 0; i < this.nextElementSibling.children.length; i++) {
        this.nextElementSibling.children[i].addEventListener('click', function() {

            showChairColor.innerText = this.innerText;
            selectedChairColor.innerText = this.innerText;
            chairColorPrice.innerText = this.dataset.colorPrice;

            sumColorPrice = sumColorPrice + parseInt(this.dataset.colorPrice);
            sum.innerHTML = sumChairPrice + sumColorPrice + sumFabricPrice + sumTransportPrice;

        })
    }
});

chairFabric.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("optionSelected");
    chairColor.nextElementSibling.classList.remove("optionSelected");
    chairName.nextElementSibling.classList.remove("optionSelected");

    for (var i = 0; i < this.nextElementSibling.children.length; i++) {
        this.nextElementSibling.children[i].addEventListener('click', function() {

            showChairFabric.innerText = this.innerText;
            selectedChairFabric.innerText = this.innerText;
            chairFabricPrice.innerText = this.dataset.fabricPrice;

            sumFabricPrice = sumFabricPrice + parseInt(this.dataset.fabricPrice);
            sum.innerHTML = sumChairPrice + sumColorPrice + sumFabricPrice + sumTransportPrice;
        })
    }

});

checkbox.addEventListener("click", function () {
    chairColor.nextElementSibling.classList.remove("optionSelected");
    chairName.nextElementSibling.classList.remove("optionSelected");
    chairFabric.nextElementSibling.classList.remove("optionSelected");

    if (checkboxInput.checked) {
        selectedTransport.innerText = "Transport";
        transportPrice.innerText = checkboxInput.dataset.transportPrice;

        sumTransportPrice = sumTransportPrice + parseInt(checkboxInput.dataset.transportPrice);
        sum.innerText = sumChairPrice + sumColorPrice + sumFabricPrice + sumTransportPrice;
    } else {
        selectedTransport.innerText = "";
        transportPrice.innerText = "";
        sumTransportPrice = 0;
        sum.innerHTML = sumChairPrice + sumColorPrice + sumFabricPrice;
    }
});

