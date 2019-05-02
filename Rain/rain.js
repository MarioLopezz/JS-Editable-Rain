const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
var defaultNum = 100;
var speed=0;
var x=100;
var bgcolor='white';
var dropColor='black';
var size=0;

function makeItRain (num) {
	var ySpeed = document.getElementById("slider").value;
	var xDirection = document.getElementById("slider2").value;
	var size = document.getElementById("slider3").value;
	let elements = document.getElementById("drops-section");

	while (elements.hasChildNodes()) {
		elements.removeChild(elements.lastChild);
	}
	ySpeed=parseInt(ySpeed);
	xDirection=parseInt(xDirection);
	size=parseInt(size);
	
	for (let i = 0 ; i < num ; i ++) {
		let randomX = Math.floor(Math.random() * (pageWidth));
		let randomY = Math.floor(Math.random() * (pageHeight)) -300;
		let dropSpeed = Math.floor(Math.random() * (25 - 5)) + 5;
		let dropWidth = Math.floor(Math.random() * (dropSpeed/10 - 1)) + 1 + size;
		let dropHeight = Math.floor(Math.random() * (dropSpeed*2 - 3)) + 3 + (size*3);
		dropSpeed+=ySpeed;
		let d = new Drop(randomX, randomY, dropSpeed, dropWidth, dropHeight, xDirection, bgcolor, dropColor);

		d.show();
		d.fall();

	}

}

function update(){
	makeItRain(x);
}

function updateNumberInView (num) {
	let el = document.getElementById("dropsNum").firstChild;
	el.nodeValue = num;
}

function changeNumDrops (num) {
	x=num;
	updateNumberInView(num);
	makeItRain(num);
}

function changecolors(){
	bgcolor=document.getElementById("colorPicker").value;
	document.body.style.backgroundColor=bgcolor;
	dropColor=document.getElementById("colorPicker2").value;
	makeItRain(x);
}

updateNumberInView(defaultNum);
makeItRain(defaultNum);

