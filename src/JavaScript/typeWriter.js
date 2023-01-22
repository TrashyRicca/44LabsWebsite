// set up text to print, each item in array is new line
var aText = new Array(
	"- Dealer Lootboxes (Whitelabel)<br>- Staking Platform<br>- Raffles And Auctions<br>- Art Upgrade Platform<br>- Website Development<br>- Minting Platform<br>- more to come...");
var iSpeed = 40; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typeWriter() {
	sContents = ' ';
	iRow = Math.max(0, iIndex - iScrollAt);
	var destination = document.getElementById("typeWriterText");

	while (iRow < iIndex) {
		sContents += aText[iRow++] + "<br><br>";
	}

	var helper = aText[iIndex].substring(iTextPos, iTextPos + 2)
	if (helper === "<s") {
		iTextPos += 5;
	} else if (helper === "</") {
		iTextPos += 6;
	} else if (helper === "<b") {
		iTextPos += 3;
	}

	destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "</span><span class='blink'>_<span>";
	if (iTextPos++ == iArrLength) {
		iTextPos = 0;
		iIndex++;
		if (iIndex != aText.length) {
			iArrLength = aText[iIndex].length;
			setTimeout("typeWriter()", 500);
		}
	} else {
		setTimeout("typeWriter()", iSpeed);
	}
}