"use strict";
window.onload = function() {
	if (localStorage.state == "submit") {
		localStorage.setItem("state", "parse");
		window.location.href = "result.html";
	}
	if (localStorage.state == "parse") {
		let results = JSON.parse(localStorage.result);
		let resultValues = [];
		for (var value in results) {
			resultValues.push([value, results[value]]);
		}
		resultValues.sort(function(a, b) {
			return b[1] - a[1];
		});
		console.log(resultValues);
		setTimeout(function() {
			localStorage.setItem("state", "submit");
		}, 25);
	}
}	
//"next" function for instructional page
function instructionNext() {
	if (
		OPTIONS[0].checked===true&&
		OPTIONS[1].checked===true&&
		OPTIONS[2].checked===true&&
		OPTIONS[3].checked===true
	) {
		restart();
	} else {
		OPTIONS[3].focus();
		document.getElementById("error").style.visibility = "visible";
	}		
}
function restart() {
	sessionStorage.clear();
	localStorage.clear();
	//question number tracker
	var progress = 1;
	sessionStorage.setItem("progress", progress);
	//tracker for the answer from each question
	sessionStorage.setItem(1, undefined);
	sessionStorage.setItem(2, undefined);
	sessionStorage.setItem(3, undefined);
	sessionStorage.setItem(4, undefined);
	window.location.href = 'wow-class-quiz-1.html';
}
	
function next() {
	for (let i = 0; i < OPTIONS.length; i++) {
		if (OPTIONS[i].checked===true) {
			let progress = parseInt(sessionStorage.progress);
			let question = sessionStorage.getItem(progress)
			question = OPTIONS[i].id+"()";
			sessionStorage.setItem(progress, question);
			progress += 1;
			if (progress < sessionStorage.length) {
				sessionStorage.setItem("progress", progress)
				window.location.href = `wow-class-quiz-${progress}.html`;
				break
			} else {
				eval(sessionStorage.getItem(1));
				//eval(sessionStorage.getItem(2));
				//eval(sessionStorage.getItem(3));
				//eval(sessionStorage.getItem(4));
				localStorage.setItem("result", JSON.stringify(counter));
				localStorage.setItem("state", "submit");
				window.location.href = "result.html";
			}
		} else {
			document.getElementById("error").style.visibility = "visible";
		}
	}
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
const OPTIONS = document.querySelectorAll("#options input");