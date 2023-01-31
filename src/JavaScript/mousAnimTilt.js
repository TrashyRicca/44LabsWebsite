let mouseTiltObjects;
const maxTilt = 5.5;
const speedt = 0.25;
let timeStampt = 0;
let tiltPercent = [];
let currentTilt = [];
let mousXt = 0;
let mousYt = 0;

$(document).ready(function () {
	if (!(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) && !mobile.matches) {
		document.body.addEventListener("mousemove", safeMousPost);
		mouseTiltObjects = document.getElementsByClassName("mousAnimTilt");
		tiltPercent = [mouseTiltObjects.length];
		currentTilt = [mouseTiltObjects.length];
		for (var i = 0; i < mouseTiltObjects.length; i++) {
			currentTilt[i] = [0, 0];
		}

		timeStampt = Date.now();
		window = setInterval(animatet, 10);
	}
});

function animatet() {
	let timeFrame = (Date.now() - timeStampt) / 100;
	timeStampt = Date.now();
	for (var i = 0; i < mouseTiltObjects.length; i++) {
		currentElement = mouseTiltObjects.item(i);
		tiltPercent[i] = gettiltPercentt(currentElement);
		var tiltTo = [Math.max(Math.min((currentTilt[i][0] + ((tiltPercent[i][0] * maxTilt - currentTilt[i][0]) * speedt * timeFrame)), maxDistance), -maxDistance), Math.max(Math.min((currentTilt[i][1] + ((tiltPercent[i][1] * maxTilt - currentTilt[i][1]) * speedt * timeFrame)), maxDistance), -maxDistance)]
		currentElement.style.transform = "perspective(10000px) rotateX(" + tiltTo[1] + "deg) rotateY(" + -tiltTo[0] + "deg)";
		currentTilt[i] = [tiltTo[0], tiltTo[1]];
	}
}

function gettiltPercentt(element) {
	var xCoord = element.getBoundingClientRect().left + ((element.getBoundingClientRect().right - element.getBoundingClientRect().left) / 2);
	var yCoord = element.getBoundingClientRect().top + ((element.getBoundingClientRect().bottom - element.getBoundingClientRect().top) / 2);
	var xDistance = Math.round(xCoord - mousXt);
	var yDistance = Math.round(yCoord - mousYt);
	var xPercentTilt = xDistance / (100 + Math.abs(xDistance));
	var yPercentTilt = yDistance / (100 + Math.abs(yDistance));
	return [xPercentTilt, yPercentTilt];
}

function safeMousPost(e) {
	mousXt = e.clientX;
	mousYt = e.clientY;
}