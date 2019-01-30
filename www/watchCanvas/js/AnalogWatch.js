
const PI = 3.141592653589793;
class AnalogWatch extends DigitalWatch {

	static get PI() {return 3.141592653589793;}

	constructor(_ctx, _width = 100, _height = 100) {
		super();

		this.ctx = _ctx;
		this.width = _width;
		this.height = _height;

		this.color = '#17A589';
		this.colorLine = '#76D7C4';
		this.colorMinute = '#F8F9F9';
		this.colorHour = '#F8F9F9';
		this.colorNum = '#F8F9F9';
		this.colorCirclMini = '#76D7C4';

		this.lineWidth = 5;
		this.radiusCirclMini = 20;
		this.radius = (_width < _height ? _width / 2 : _height / 2) - this.lineWidth;

		this.ctx.font = this.radius * 0.15 + 'px arial';
		this.ctx.textBaseline = 'middle';
		this.ctx.textAlign = 'center';

		this.draw();
	}


	changeTime() {
		super.changeTime();
		this.draw();
	}


	draw() {
		if (this.ctx === undefined) return;

		this.ctx.clearRect( -this.width / 2, -this.height / 2, this.width, this.height);

		this.drawCircl();
		this.drawTime();
		this.drawNumbers();
		this.drawCirclMini();
	}


	drawCircl() {
		this.ctx.beginPath();
		this.ctx.fillStyle = this.color;
		this.ctx.lineWidth = 5;
		this.ctx.strokeStyle = this.colorLine;
		this.ctx.arc(0, 0, this.radius, 0, 2 * PI);
		this.ctx.fill();
		this.ctx.stroke();
	}


	drawCirclMini() {
		this.ctx.beginPath();
		this.ctx.fillStyle = this.colorCirclMini;
		this.ctx.lineWidth = 1;
		this.ctx.arc(0, 0, this.radiusCirclMini, 0, 2 * PI);
		this.ctx.fill();
		this.ctx.stroke();
	}


	drawNumbers() {

		let ang;
		this.ctx.fillStyle = this.colorNum;

		for (var i = 1; i < 13; i++){
			ang = i * PI / 6;
			this.ctx.rotate(ang);
			this.ctx.translate(0, -this.radius*0.85);
			this.ctx.rotate(-ang);
			this.ctx.fillText(i.toString(), 0, 0);
			this.ctx.rotate(ang);
			this.ctx.translate(0, this.radius*0.85);
			this.ctx.rotate(-ang);
		}
	}


	drawTime(){

		let hour = this.hour % 12;
		hour = (this.hour * PI / 6) + (this.minutes * PI / (6 * 60));
		this.drawHand(hour, this.radius * 0.5, this.radius * 0.07, this.colorHour);

		let minute = (this.minutes * PI / 30);
		this.drawHand(minute, this.radius * 0.7, this.radius * 0.03, this.colorMinute);
	}


	drawHand(_pos = 0, _length = 100, _width = 5, _color = '#ff0000') {

		this.ctx.beginPath();
		this.ctx.fillStyle = _color;
		this.ctx.strokeStyle = _color;

		this.ctx.lineWidth = _width;
		this.ctx.lineCap = "round";

		this.ctx.moveTo(0,0);
		this.ctx.rotate(_pos);
		this.ctx.lineTo(0, - _length);
		this.ctx.stroke();
		this.ctx.rotate(-_pos);
	}
}
