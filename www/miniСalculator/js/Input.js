class Input {

	constructor( _x, _y, _width = 100, _height = 24) {

		this._x = _x;
		this._y = _y;
		this._width = _width;
		this._height = _height;

		// this._color = '#ff0000'; // цвет текст
		// this._backgroundColor = '#ffffff'; // цвет фона
		this._borderColor = '#a9a9a9'; // цвет рамки

		this.createElement();
	}

	createElement () {
		this.htmlElement = document.createElement('input');
		this.htmlElement.id = "input" + Math.random();
		this.htmlElement.name = this.htmlElement.id;
		this.htmlElement.type = 'text';

		this.htmlElement.style.position = 'fixed';
		this.htmlElement.style.top = '0px';
		this.htmlElement.style.left = '0px';
		this.htmlElement.style.zIndex = '1';

		this.htmlElement.style.left = this._x +'px';
		this.htmlElement.style.top = this._y +'px';

		this.htmlElement.style.width = this._width + 'px';
		this.htmlElement.style.height = this._height + 'px';

		this.htmlElement.style.border= "1px solid";
		this.htmlElement.style.borderColor = this.toRGB(this._borderColor)


		this.htmlElement.onkeyup = function(e) {
			this.value = this.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
		}

		document.body.appendChild(this.htmlElement);
	}


	toRGB (color) {
		color = ""+color;

		if(color[0]!="#"){
			color = Number(color).toString(16);
			if(color == 0) color = "000000";
			color = "#"+color;
		}
		return color;
	}


	set x(v) {
		if (this._x === v) return;

		this._x = v;
		this.htmlElement.style.left = this._x + 'px';
	}
	get x() {
		return this._x;
	}

	set y(v) {
		if (this._y === v) return;

		this._y = v;
		this.htmlElement.style.top = this._y + 'px';
	}
	get y() {
		return this._y;
	}

	set width(v) {
		if (this._width === v) return;

		this._width = v;
		this.htmlElement.style.width = this._width + 'px';
	}
	get width() {
		return this._width;
	}
	
	set height(v) {
		if (this._height === v) return;

		this._height = v;
		this.htmlElement.style.height = this._height + 'px';
	}
	get height() {
		return this._height;
	}

	set text(v) {
		if (this._text === v) return;

		this._text = v;
		this.htmlElement.value = this._text;
	
	}
	get text() {
		return this.htmlElement.value;
	}
	// ... color
	set borderColor(v) {
		if (this._borderColor === v) return;

		this._borderColor = v;
		this.htmlElement.style.borderColor = this.toRGB(v)
	}
	get borderColor() {
		return this.htmlElement.value;
	}
}