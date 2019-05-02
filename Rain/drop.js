class Drop {
	constructor(xPosition, yPosition, dropSpeed, dropWidth, dropHeight, xDirection, bgcolor, dropColor) {
		this.xPosition = xPosition;
		this.yPosition = yPosition;
		this.dropSpeed = dropSpeed;
		this.dropWidth = dropWidth;
		this.dropHeight = dropHeight;
		this.xDirection = xDirection;
		this.bgcolor = bgcolor;
		this.dropColor = dropColor;
		this.element;
	}

	show() {
		this.element = document.createElement("div");
		this.element.className += "rainDrop";
		this.element.style.top = this.yPosition + "px";
		this.element.style.left = this.xPosition + "px";
		this.element.style.width = this.dropWidth + "px";
		this.element.style.height = this.dropHeight + "px";

		let el = document.getElementById("drops-section");
		el.appendChild(this.element);
		this.element.style.background = 'linear-gradient(180deg, '+bgcolor+', '+dropColor+' 90%, '+dropColor+')';
	}

	fall() {
		const makeItRain = () => {
			this.yPosition = this.yPosition + this.dropSpeed;
			this.element.style.top = this.yPosition +"px";

			this.xPosition = this.xPosition + this.xDirection;
			this.element.style.left = this.xPosition +"px";

			if(this.yPosition > window.innerHeight) {
				this.yPosition = -200;
				this.xPosition= Math.floor(Math.random() * (window.innerWidth));


			}		
			if(this.xPosition > window.innerWidth) {
				this.xPosition = -10;	
			}
			else if (this.xPosition < 0) {
				this.xPosition = window.innerWidth;	
			}
			requestAnimationFrame(makeItRain);
		}
		requestAnimationFrame(makeItRain);
	}
}