class Calculator {

	constructor(_ctx, _x = 0, _y = 0, _width = 100, _height = 100) {

		this.ctx = _ctx;
		this._x = _x;
		this._y = _y;
		this._width = _width;
		this._height = _height;

		this.indent = 5;
		this.lineWidth = 1
		//this.width deviation

		this.panel = new Panel(this.ctx, this._x, this._y, this._width, this._height);
		this.panel.width = this._width;

		this.input = new Input(
			this._x + this.indent + this.panel._lineWidth / 4,
			this._y + this.indent + this.panel._lineWidth / 4,
			this._width - this.panel._lineWidth - this.indent * 2,
			24 - this.indent / 2 // ? по другому размер самого инпута идет больше чем задано
		);

		this.draw();

		let w = (this.width - this.indent * 4) / 3;
		let y = this.input.y + this.input.height + this.indent + this.indent / 2;
		

		this.arrBut = [
			new Button(this._x + (this.indent + w) * 0 + this.indent, y, w, 30, 'sqr'),
			new Button(this._x + (this.indent + w) * 1 + this.indent, y, w, 30, 'sqrt'),
			new Button(this._x + (this.indent + w) * 2 + this.indent, y, w, 30, 'In'),
		];
		this.setFunBut();

		this.panel.height = this.arrBut[0].y - this._y + this.arrBut[0].height + this.indent;
		this._height = this.panel.height;
	}

	draw () {
		let y = this.input.y + this.input.height + this.indent + this.indent / 2 - this.lineWidth;

		this.ctx.lineWidth = 1;
		this.ctx.beginPath();
		this.ctx.moveTo(this._x + this.indent, y);
		this.ctx.lineTo(this._x + this._width - this.indent, y);
		this.ctx.stroke();
	}


	setFunBut() {
		let calc = this;

		this.arrBut[0].fun = function funSqr() {
			calc.input.text = calc.input.text ** 2;
		}

		this.arrBut[1].fun = function funSqrt() {

			if (calc.input.text * 1 < 0) {
				alert('NaN');
			} else {
				calc.input.text = calc.input.text ** (1 / 2);
			}
		}

		this.arrBut[2].fun = function In() {

			let val = Math.log(calc.input.text * 1);

			if (val === -Infinity || val === Infinity || calc.input.text * 1 < 0) {
				alert(val);
			} else {
				calc.input.text = val;
			}
		}
	}


	funSqrt() {
		trace('funSqrt')

	}

	funIn() {
		trace('funIn')

	}

	drag() {
		this.panel.x = this.x;
		this.panel.y = this.y;
		this.panel.width = this._width;

		this.input.x = this._x + this.indent + this.panel._lineWidth / 4;
		this.input.y = this._y + this.indent + this.panel._lineWidth / 4;
		this.input.width = this._width - this.panel._lineWidth - this.indent * 2;
		// this.lineWidth

		this.draw();

		let w = (this.width - this.indent * 4) / 3;
		let y = this.input.y + this.input.height + this.indent + this.indent / 2;

		for (var i = 0; i < this.arrBut.length; i++) {
			this.arrBut[i].x = this._x + (this.indent + w) * i + this.indent
			this.arrBut[i].y = y;
			this.arrBut[i].width = w;
		}

		this.panel.height = this.arrBut[0].y - this._y + this.arrBut[0].height + this.indent;
		this._height = this.panel.height;
	}


	set x(v) {
		if (this._x === v) return;

		this._x = v;
		this.drag();
	}
	get x() {
		return this._x;
	}

	set y(v) {
		if (this._y === v) return;

		this._y = v;
		this.drag();
	}
	get y() {
		return this._y;
	}

	set width(v) {
		if (this._width === v) return;

		this._width = v;
		this.drag();
	}
	get width() {
		return this._width;
	}

	set height(v) {
		if (this._height === v) return;

		this._height = v;
		this.drag();
	}
	get height() {
		return this._height;
	}
}