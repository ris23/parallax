var container = document.getElementById("container");

var layerOne = document.getElementById("layerOne");
var layerTwo = document.getElementById("layerTwo");
var layerThree = document.getElementById("layerThree");
var layerFour = document.getElementById("layerFour");
var layerFive = document.getElementById("layerFive");

var mouseX = 0;
var mouseY = 0;

var centerScreen = (1000 / 2) - (1000/2);

window.addEventListener("mousemove", onMouseMove);

function onMouseMove(event)
{
    mouseX = event.pageX - container.offsetLeft;
    mouseY = event.pageY;

    layerOne.style.left = -mouseX * 0.05  + centerScreen + "px";
    layerTwo.style.left = -mouseY * 0.04 + centerScreen + "px";
    layerThree.style.left = -mouseX * 0.03 + centerScreen + "px";
    layerFour.style.left = -mouseY * 0.02 + centerScreen + "px";
    layerFive.style.left = -mouseX * 0.01 + centerScreen + "px";
}
