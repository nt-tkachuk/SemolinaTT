class Panel {

	constructor(_ctx, _x, _y, _width = 100, _height = 100) {

		this.ctx = _ctx;
		this._x = _x;
		this._y = _y;
		this._width = _width;
		this._height = _height;

		this._color = '#EEEEEE';
		this._colorBorder = '#C0C0C0';
		this._lineWidth = 3;

		this.draw();
	}


	draw() {
		if (this.ctx === undefined) return;

		this.clear();

		this.ctx.beginPath();
		this.ctx.rect(this._x, this._y, this._width, this._height);
		this.ctx.fillStyle = this._color;
		this.ctx.fill();
		this.ctx.lineWidth = this._lineWidth;
		this.ctx.strokeStyle = this._colorBorder;
		this.ctx.stroke();
	}

	clear() {
		this.ctx.clearRect(
			this._x - this.lineWidth,
			this._y - this.lineWidth,
			this._width + this.lineWidth * 2,
			this._height + this.lineWidth * 2
		);
	}


	set x(v) {
		if (this._x === v) return;

		this.clear();
		this._x = v;

		this.draw();
	}
	get x() {
		return this._x;
	}

	set y(v) {
		if (this._y === v) return;

		this.clear();
		this._y = v;

		this.draw();
	}
	get y() {
		return this._y;
	}

	set width(v) {
		if (this._width === v) return;

		this.clear();
		this._width = v;
		this.draw();
	}
	get width() {
		return this._width;
	}

	set height(v) {
		if (this._height === v) return;

		this.clear();
		this._height = v;
		this.draw();
	}
	get height() {
		return this._height;
	}

	set color(v) {
		if (this._color === v) return;
		this._color = v;
		this.draw();
	}
	get color() {
		return this._color;
	}

	set colorBorder(v) {
		if (this._colorBorder === v) return;
		this._colorBorder = v;
		this.draw();
	}
	get colorBorder() {
		return this._colorBorder;
	}

	set lineWidth(v) {
		if (this._lineWidth === v) return;
		this._lineWidth = v;
		this.draw();
	}
	get lineWidth() {
		return this._lineWidth;
	}
}
