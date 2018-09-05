'use strict';
let startId, endId;
const arrNames = ["Ryazansky Prospect", "Kuzminki", "Tekstilshchiki", "Volgogradsky Prospekt", "Proletarskaya", "Barrikadnaya"];
const arr = ["R", "K", "T", "V", "P", "B"];
class Route {
	constructor(arrNames, arr, timeInterval) {
		this.arrNames = arrNames;
		this.arr = arr;
		this.timeInterval = timeInterval;
	}
	CheckInterval(startPoint, endPoint) {
		let indexStart = this.arr.indexOf(startPoint);
		let indexEnd = this.arr.indexOf(endPoint);
		let resTime = Math.abs((indexStart - indexEnd) * this.timeInterval);
		console.log(`nearest bus will come through ${resTime} seconds`);
		document.getElementById('result').innerHTML = `nearest bus will come through ${resTime} seconds`
	}
}
let stations = new Route(arrNames, arr, 20);

function getAllStations() {
	document.getElementById('stations').innerHTML = arrNames;
}
function take(id){
	startId = id;
	console.log(startId)
};

function take2(id2){
	endId = id2;
	console.log(endId);
};
function main() {
	let startPointCap = startId;
	let endPointCap = endId;
	if (startPointCap === endPointCap) {
		document.getElementById('result').innerHTML = 'wrong position'
	} else {
		stations.CheckInterval(startPointCap, endPointCap);
	}
}