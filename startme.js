'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const arrNames = ["Ryazansky Prospect", "Kuzminki", "Tekstilshchiki", "Volgogradsky Prospekt", "Proletarskaya", "Barrikadnaya"];
const arr = ["R", "K", "T", "V", "P", "B"];
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
		if (arr.includes(endPoint)) {
			console.log(`Good, you there: ${endPoint}`);
			let indexStart = this.arr.indexOf(startPoint);
			let indexEnd = this.arr.indexOf(endPoint);
			let resTime = Math.abs((indexStart - indexEnd) * this.timeInterval);
	
			console.log(`nearest bus will come through ${resTime} seconds`);
		} else {
			console.log('Wrong position');
			rl.close();
		}
	}
}
let stations = new Route(arrNames, arr, 20);
stations.AppPreview();
rl.question('Choose the big letter at the list! Where you now stand?! ', (startPoint) => {
	const startPointCap = startPoint.toUpperCase();
	if (!arr.includes(startPointCap)) {
		console.log('Wrong position');
		rl.close();
	} else {
		console.log(`Good, you there: ${startPointCap}`);
		rl.question('Choose the big letter at the list! Where you will go?! ', (endPoint) => {
			const endPointCap = endPoint.toUpperCase();
			stations.CheckInterval(startPointCap, endPointCap);
			rl.close();
		});
	}
});

