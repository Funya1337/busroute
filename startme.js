'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let arrNames = ["Ryazansky Prospect", "Kuzminki", "Tekstilshchiki", "Volgogradsky Prospekt", "Proletarskaya"];
let arr = ["R", "K", "T", "V", "P"];
class Route {
	constructor(arrNames, arr, timeInterval) {
		this.arrNames = arrNames;
		this.arr = arr;
		this.timeInterval = timeInterval;
	}
	AppPreview() {
		console.log('---------------------');
		this.arrNames.forEach(function(element) {
			console.log(element[0], element);
			console.log('---------------------');
		});
	}
	CheckInterval(startPoint, endPoint) {
		let indexStart = this.arr.indexOf(startPoint);
		let indexEnd = this.arr.indexOf(endPoint);
		let resTimeFix = -1;
		let resTime = (indexStart - indexEnd) * this.timeInterval * resTimeFix;
		console.log(`nearest bus will come through ${resTime} seconds`);
}
	CheckWrongLetter(endPoint) {
		if (endPoint !== 'R' && endPoint !== 'K' && endPoint !== 'T' && endPoint !== 'V' && endPoint !== 'P') {
			console.log('Wrong position');
		} else {
			console.log(`Good, you there: ${endPoint}`)
		}
	}
}
let stations = new Route(arrNames, arr, 10);
stations.AppPreview();
rl.question('Choose the big letter at the list! Where you now stand?! ', (answer) => {
	if (answer !== 'R' && answer !== 'K' && answer !== 'T' && answer !== 'V' && answer !== 'P') {
		console.log('Wrong position');
		rl.close();
	} else {
		console.log(`Good, you there: ${answer}`);
		rl.question('Choose the big letter at the list! Where you will go?! ', (answer1) => {
			stations.CheckWrongLetter(answer1);
			stations.CheckInterval(answer, answer1);
			rl.close();
		});
	}
});
