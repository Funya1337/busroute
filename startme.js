'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let arr = ["Ryazansky Prospect", "Kuzminki", "Tekstilshchiki", "Volgogradsky Prospekt", "Proletarskaya"];
class Route {
	constructor(stations) {
		this.stations = stations;
	}
	startRide() {
		console.log('---------------------');
		this.stations.forEach(function(element) {
			console.log(element[0], element);
			console.log('---------------------');
		});
	}
	startCheck(startPoint, endPoint) {
		if (startPoint === 'R' && endPoint === 'K') {
			console.log('you will ride 10 seconds');
			setTimeout(function() { console.log('You arrived!') }, 10000);
		}
		if (startPoint === 'R' && endPoint === 'T') {
			console.log('you will ride 20 seconds');
			setTimeout(function() { console.log('You arrived!') }, 20000);
		}
		if (startPoint === 'R' && endPoint === 'V') {
			console.log('you will ride 30 seconds');
			setTimeout(function() { console.log('You arrived!') }, 30000);
		}
		if (startPoint === 'R' && endPoint === 'P') {
			console.log('you will ride 40 seconds');
			setTimeout(function() { console.log('You arrived!') }, 40000);
		}
		if (startPoint === 'K' && endPoint === 'R') {
			console.log('you will ride 10 seconds');
			setTimeout(function() { console.log('You arrived!') }, 10000);
		}
		if (startPoint === 'K' && endPoint === 'T') {
			console.log('you will ride 20 seconds');
			setTimeout(function() { console.log('You arrived!') }, 20000);
		}
		if (startPoint === 'K' && endPoint === 'V') {
			console.log('you will ride 40 seconds');
			setTimeout(function() { console.log('You arrived!') }, 40000);
		}
		if (startPoint === 'K' && endPoint === 'P') {
			console.log('you will ride 50 seconds');
			setTimeout(function() { console.log('You arrived!') }, 50000);
		}
		if (startPoint === 'T' && endPoint === 'K') {
			console.log('you will ride 40 seconds');
			setTimeout(function() { console.log('You arrived!') }, 40000);
		}
		if (startPoint === 'T' && endPoint === 'R') {
			console.log('you will ride 60 seconds');
			setTimeout(function() { console.log('You arrived!') }, 60000);
		}
		if (startPoint === 'T' && endPoint === 'V') {
			console.log('you will ride 40 seconds');
			setTimeout(function() { console.log('You arrived!') }, 40000);
		}
		if (startPoint === 'T' && endPoint === 'P') {
			console.log('you will ride 50 seconds');
			setTimeout(function() { console.log('You arrived!') }, 50000);
		}
		if (startPoint === 'V' && endPoint === 'R') {
			console.log('you will ride 80 seconds');
			setTimeout(function() { console.log('You arrived!') }, 80000);
		}
		if (startPoint === 'V' && endPoint === 'K') {
			console.log('you will ride 60 seconds');
			setTimeout(function() { console.log('You arrived!') }, 60000);
		}
		if (startPoint === 'V' && endPoint === 'T') {
			console.log('you will ride 50 seconds');
			setTimeout(function() { console.log('You arrived!') }, 50000);
		}
		if (startPoint === 'V' && endPoint === 'P') {
			console.log('you will ride 50 seconds');
			setTimeout(function() { console.log('You arrived!') }, 50000);
		}
		if (startPoint === 'P' && endPoint === 'R') {
			console.log('you will ride 100 seconds');
			setTimeout(function() { console.log('You arrived!') }, 100000);
		}
		if (startPoint === 'P' && endPoint === 'K') {
			console.log('you will ride 80 seconds');
			setTimeout(function() { console.log('You arrived!') }, 80000);
		}
		if (startPoint === 'P' && endPoint === 'T') {
			console.log('you will ride 70 seconds');
			setTimeout(function() { console.log('You arrived!') }, 70000);
		}
		if (startPoint === 'P' && endPoint === 'V') {
			console.log('you will ride 60 seconds');
			setTimeout(function() { console.log('You arrived!') }, 60000);
		}
	}
	checkLength(startPoint, endPoint) {
		if (startPoint === 'R' && endPoint === 'R') {
			console.log('nearest bus will come through 0 seconds');
		}
		if (startPoint === 'K' && endPoint === 'K') {
			console.log('nearest bus will come through 10 seconds');
		}
		if (startPoint === 'T' && endPoint === 'T') {
			console.log('nearest bus will come through 20 seconds');
		}
		if (startPoint === 'V' && endPoint === 'V') {
			console.log('nearest bus will come through 30 seconds');
		}
		if (startPoint === 'P' && endPoint === 'P') {
			console.log('nearest bus will come through 40 seconds');
		}
	}
	simpleCheck(endPoint) {
		if (endPoint !== 'R' && endPoint !== 'K' && endPoint !== 'T' && endPoint !== 'V' && endPoint !== 'P') {
			console.log('Wrong position');
		} else {
			console.log(`Good, you there: ${endPoint}`)
		}
	}
}
let stations = new Route(arr);
stations.startRide();
rl.question('Choose the big letter at the list! Where you now stand?! ', (answer) => {
	if (answer !== 'R' && answer !== 'K' && answer !== 'T' && answer !== 'V' && answer !== 'P') {
		console.log('Wrong position');
		rl.close();
	} else {
		console.log(`Good, you there: ${answer}`);
		rl.question('Choose the big letter at the list! Where you will go?! ', (answer1) => {
			stations.simpleCheck(answer1);
			stations.startCheck(answer, answer1);
			stations.checkLength(answer, answer1);
			rl.close();
		});
	}
});
