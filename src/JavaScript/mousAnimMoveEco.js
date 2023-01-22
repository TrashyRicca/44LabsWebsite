let mouseMoveObjects;
const maxDistance = 40;
const speed = 0.25;
let timeStamp = 0;
let distancePercent = [];
let currentPosition = [];
let mousX = 0;
let mousY = 0;

$(document).ready(function() {
	document.body.addEventListener("mousemove", safeMousPos);
	mouseMoveObjects = document.getElementsByClassName("mousAnimMove");
	distancePercent = [mouseMoveObjects.length];
	currentPosition = [mouseMoveObjects.length];
	for (var i = 0; i < mouseMoveObjects.length; i++) {
		currentPosition[i] = [0, 0];
	}

	timeStamp = Date.now();
	window = setInterval(animate, 10);
});

function animate() {
	let timeFrame = (Date.now() - timeStamp) / 100;
	timeStamp = Date.now();
	for (var i = 0; i < mouseMoveObjects.length; i++) {
		currentElement = mouseMoveObjects.item(i);
		distancePercent[i] = getdistancePercent(currentElement);
		var moveTo = [Math.max(Math.min((currentPosition[i][0] + ((distancePercent[i][0] * maxDistance - currentPosition[i][0]) * speed * timeFrame)), maxDistance), -maxDistance), Math.max(Math.min((currentPosition[i][1] + ((distancePercent[i][1] * maxDistance - currentPosition[i][1]) * speed * timeFrame)), maxDistance), -maxDistance)]
		currentElement.style.transform = "translate(" + (moveTo[0]-$("#ecoContainer>img").width()/2) + "px," + moveTo[1] + "px)";
		currentPosition[i] = [moveTo[0], moveTo[1]];
	}
}

function getdistancePercent(element) {
	var xCoord = element.getBoundingClientRect().left + ((element.getBoundingClientRect().right - element.getBoundingClientRect().left) / 2);
	var yCoord = element.getBoundingClientRect().top + ((element.getBoundingClientRect().bottom - element.getBoundingClientRect().top) / 2);
	var xDistance = Math.round(xCoord - mousX);
	var yDistance = Math.round(yCoord - mousY);
	var xPercentMovement = xDistance / (750 + Math.abs(xDistance));
	var yPercentMovement = yDistance / (750 + Math.abs(yDistance));
	return [xPercentMovement, yPercentMovement];
}

function safeMousPos(e) {
	mousX = e.clientX;
	mousY = e.clientY;
}