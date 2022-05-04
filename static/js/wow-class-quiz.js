"use strict";
window.onload = function() {
	if (localStorage.state == "submit") {
		localStorage.setItem("state", "parse");
		window.location.href = "result.html";
	}
	if (localStorage.state == "parse") {
		//sorting an object; first add each key-value pair as an array
		//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
		let results = JSON.parse(localStorage.result);
		let resultValues = [];
		for (var value in results) {
			resultValues.push([value, results[value]]);
		}
		//sort the array
		resultValues.sort(function(a, b) {
			return b[1] - a[1];
		});
		console.log("Your top result: " + resultValues[0][0]);
		console.log(resultValues);
		//results(resultValues[0][0];
		//timeout to prevent loop refreshing page
		setTimeout(function() {
			localStorage.setItem("state", "submit");
		}, 25);
	}
	document.getElementById("progress").value = (progress/(sessionStorage.length-1))
}
//declaration of variables
const CLASSES = function() {
	this.afflictionWarlock = 0;
	this.arcaneMage = 0;
	this.armsWarrior = 0;
	this.assassinationRogue = 0;
	this.balanceDruid = 0;
	this.beastmasteryHunter = 0;
	this.bloodDeathKnight = 0;
	this.combatRogue = 0;
	this.demonologyWarlock = 0;
	this.destructionWarlock = 0;
	this.disciplinePriest = 0;
	this.elementalShaman = 0;
	this.enhancementShaman = 0;
	this.feralDruid = 0;
	this.fireMage = 0;
	this.frostDeathKnight = 0;
	this.frostMage = 0;
	this.furyWarrior = 0;
	this.holyPaladin = 0;
	this.holyPriest = 0;
	this.marksmanshipHunter = 0;
	this.protectionPaladin = 0;
	this.protectionWarrior = 0;
	this.restorationDruid = 0;
	this.restorationShaman = 0
	this.retributionPaladin = 0;
	this.shadowPriest = 0;
	this.subtletyRogue = 0;
	this.survivalHunter = 0;
	this.unholyDeathKnight = 0;
}
var counter = new CLASSES();
let progress = parseInt(sessionStorage.progress);
//"next" function for instructional page
function instructionNext() {
	//calculating the .length of an Object
	//https://stackoverflow.com/questions/5223/length-of-a-javascript-object
	let selection = Object.keys(document.querySelectorAll("input:checked"));
	if (selection.length == 4) {
		//all 4 options have been checked
		restart();
	} else {
		document.getElementById("error").style.visibility = "visible";
	}		
}
function restart() {
	sessionStorage.clear();
	localStorage.clear();
	//question number tracker reset
	var progress = 1;
	sessionStorage.setItem("progress", progress);
	//placeholders for each question. this is used to track total progress
	sessionStorage.setItem(1, undefined);
	sessionStorage.setItem(2, undefined);
	sessionStorage.setItem(3, undefined);
	sessionStorage.setItem(4, undefined);
	window.location.href = 'wow-class-quiz-1.html';
}
function back() {
	let progress = parseInt(sessionStorage.progress);
	progress -= 1;
	sessionStorage.setItem("progress", progress)
	//go to previous question
	window.location.href = `wow-class-quiz-${progress}.html`;
}

//next function for the rest of the pages
function next() {
	//find the answer selected
	let selection = document.querySelector("input:checked");
	if (selection) {
		let question = selection.id+"()";
		sessionStorage.setItem(progress, question);
		progress += 1;
		//if not at question
		if (progress < sessionStorage.length) {
			sessionStorage.setItem("progress", progress)
			//go to next question
			window.location.href = `wow-class-quiz-${progress}.html`;
		//at last question
		} else {
			//execute calculator functions based of answers
			//these functions affect the counter object created from CLASSES
			eval(sessionStorage.getItem(1));
			eval(sessionStorage.getItem(2));
			eval(sessionStorage.getItem(3));
			eval(sessionStorage.getItem(4));
			localStorage.setItem("result", JSON.stringify(counter));
			localStorage.setItem("state", "submit");
			window.location.href = "result.html";
		}
	//none of the checkmarks are selected
	} else {
		document.getElementById("error").style.visibility = "visible";
	}
}
