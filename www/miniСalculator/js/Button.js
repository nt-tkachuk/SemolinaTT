class Button {

	constructor(_x = 0, _y = 0, _width = 100, _height = 24, _text = '', _fun) {

		this._x = _x;
		this._y = _y;
		this._width = _width;
		this._height = _height;
		this._text = _text;
		this.fun = _fun;

		this.lineWidth = 1;

		this.createElement();
		this.drag()
	}


	createElement () {
		this.htmlElement = document.createElement("BUTTON");
		this.htmlElement.id = "BUTTON" + Math.random();
		this.htmlElement.name = this.htmlElement.id;

		this.htmlElement.style.position = 'fixed';
		this.htmlElement.style.top = '0px';
		this.htmlElement.style.left = '0px';
		this.htmlElement.style.zIndex = '1';

		this.htmlElement.style.top = this._x +'px';
		this.htmlElement.style.left = this._y +'px';

		this.htmlElement.style.width = this._width + 'px';
		this.htmlElement.style.height = this._height + 'px';

		this.htmlElement.innerHTML = this.text;

		let spaceButton = this;

		this.htmlElement.onclick = function(e) {
			if (spaceButton.fun) spaceButton.fun();
		};

		document.body.appendChild(this.htmlElement);
	}


	drag() {
		this.htmlElement.style.left = this._x + 'px';
		this.htmlElement.style.top = this._y + 'px';
		this.htmlElement.style.width = this._width + 'px';
		this.htmlElement.style.height = this._height + 'px';
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

	set text(v) {
		if (this._text === v) return;
		this._text = v;

		this.htmlElement.innerHTML = v;
		this.drag();
	}
	get text() {
		return this._text;
	}
}