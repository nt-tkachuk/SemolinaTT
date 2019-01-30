// 3. Написать функцию на языке JavaScript, которая подсчитывает количество идущих подряд символов x и y в строке, без учета регистра.
function getNumOfConsChar(_str = '', _x = '', _y = '') {
	// let s = _x + _y + '';
	// let re = new RegExp(s, "gi")
	// let num = _str.match(re).length;

	let num = 0;

	let str = _str.toLowerCase();
	let x = _x.toLowerCase();
	let y = _y.toLowerCase();

	let array = str.split('');
	let st = ''

	array.forEach(function(element) {
		if (st.length === 0) {
			st = element === x ? x : '';
		} else {
			st += element === y ? y : '';
			num += st === x + y ? 1 : 0;

			st = '';
		}
	});

	return num;
}

let n = getNumOfConsChar('Pam pam pa1111', 'p', 'a');
