class DigitalWatch {

	constructor() {
		this.changeTime();
		this.startInterval();
	}


	startInterval() {
		let spaceWatch = this;

		let seconds = 60 - this.date.getSeconds();
		let milliseconds = seconds * 1000;

		setTimeout(
			function() {
				spaceWatch.update1();
				spaceWatch.timer = setInterval(() => spaceWatch.changeTime(), 60000);
			}
		, milliseconds);
	}


	changeTime() {
		this.date = new Date();
		this.hour = this.date.getHours();
		this.minutes = this.date.getMinutes();
		this.seconds = this.date.getSeconds();
	}
}