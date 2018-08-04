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
	}
	let stations = new Route(arr, answer);
	stations.startRide();
	rl.question('Choose the big letter at the list! Where you now stand?! ', (answer) => {
		if (answer !== 'R' && answer !== 'K' && answer !== 'T' && answer !== 'V' && answer !== 'P') {
			console.log('Wrong position');
			rl.close();
		} else {
			console.log(`Good, you there: ${answer}`);
				rl.question('Choose the big letter at the list! Where you will go?! ', (answer1) => {
				if (answer1 !== 'R' && answer1 !== 'K' && answer1 !== 'T' && answer1 !== 'V' && answer1 !== 'P') {
					console.log('Wrong position');
			} else {
				console.log(`Good, you there: ${answer1}`)
			}
				stations.testFunc();

				if (answer === 'R' && answer1 === 'R') {
					console.log('nearest bus will come through 0 seconds');
				}
				if (answer === 'K' && answer1 === 'K') {
					console.log('nearest bus will come through 10 seconds');
				}
				if (answer === 'T' && answer1 === 'T') {
					console.log('nearest bus will come through 20 seconds');
				}
				if (answer === 'V' && answer1 === 'V') {
					console.log('nearest bus will come through 30 seconds');
				}
				if (answer === 'P' && answer1 === 'P') {
					console.log('nearest bus will come through 40 seconds');
				}

				if (answer === 'R' && answer1 === 'K') {
					console.log('you will ride 10 seconds');
					setTimeout(function() { console.log('You arrived!') }, 10000);
				}
				if (answer === 'R' && answer1 === 'T') {
					console.log('you will ride 20 seconds');
					setTimeout(function() { console.log('You arrived!') }, 20000);
				}
				if (answer === 'R' && answer1 === 'V') {
					console.log('you will ride 30 seconds');
					setTimeout(function() { console.log('You arrived!') }, 30000);
				}
				if (answer === 'R' && answer1 === 'P') {
					console.log('you will ride 40 seconds');
					setTimeout(function() { console.log('You arrived!') }, 40000);
				}
				if (answer === 'K' && answer1 === 'R') {
					console.log('you will ride 10 seconds');
					setTimeout(function() { console.log('You arrived!') }, 10000);
				}
				if (answer === 'K' && answer1 === 'T') {
					console.log('you will ride 20 seconds');
					setTimeout(function() { console.log('You arrived!') }, 20000);
				}
				if (answer === 'K' && answer1 === 'V') {
					console.log('you will ride 40 seconds');
					setTimeout(function() { console.log('You arrived!') }, 40000);
				}
				if (answer === 'K' && answer1 === 'P') {
					console.log('you will ride 50 seconds');
					setTimeout(function() { console.log('You arrived!') }, 50000);
				}
				if (answer === 'T' && answer1 === 'K') {
					console.log('you will ride 40 seconds');
					setTimeout(function() { console.log('You arrived!') }, 40000);
				}
				if (answer === 'T' && answer1 === 'R') {
					console.log('you will ride 60 seconds');
					setTimeout(function() { console.log('You arrived!') }, 60000);
				}
				if (answer === 'T' && answer1 === 'V') {
					console.log('you will ride 40 seconds');
					setTimeout(function() { console.log('You arrived!') }, 40000);
				}
				if (answer === 'T' && answer1 === 'P') {
					console.log('you will ride 50 seconds');
					setTimeout(function() { console.log('You arrived!') }, 50000);
				}
				if (answer === 'V' && answer1 === 'R') {
					console.log('you will ride 80 seconds');
					setTimeout(function() { console.log('You arrived!') }, 80000);
				}
				if (answer === 'V' && answer1 === 'K') {
					console.log('you will ride 60 seconds');
					setTimeout(function() { console.log('You arrived!') }, 60000);
				}
				if (answer === 'V' && answer1 === 'T') {
					console.log('you will ride 50 seconds');
					setTimeout(function() { console.log('You arrived!') }, 50000);
				}
				if (answer === 'V' && answer1 === 'P') {
					console.log('you will ride 50 seconds');
					setTimeout(function() { console.log('You arrived!') }, 50000);
				}
				if (answer === 'P' && answer1 === 'R') {
					console.log('you will ride 100 seconds');
					setTimeout(function() { console.log('You arrived!') }, 100000);
				}
				if (answer === 'P' && answer1 === 'K') {
					console.log('you will ride 80 seconds');
					setTimeout(function() { console.log('You arrived!') }, 80000);
				}
				if (answer === 'P' && answer1 === 'T') {
					console.log('you will ride 70 seconds');
					setTimeout(function() { console.log('You arrived!') }, 70000);
				}
				if (answer === 'P' && answer1 === 'V') {
					console.log('you will ride 60 seconds');
					setTimeout(function() { console.log('You arrived!') }, 60000);
				}
			rl.close();
		});
		}
});
