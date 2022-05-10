"use strict";
window.onload = () => {
	if (sessionStorage.state == "submit") {
		//execute calculator functions based of answers
		//these functions affect the counter object created from CLASSES
		sessionStorage.removeItem("progress");
		sessionStorage.removeItem("state");
		Object.keys(sessionStorage).forEach((key) => {
			eval(sessionStorage.getItem(key));
		})
		sessionStorage.setItem("state", "submit");
		//sorting an object; first add each key-value pair as an array
		//https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
		let values = [];
		for (var value in counter) {
			values.push([value, counter[value]]);
		}
		//sort the array
		values.sort((a, b) => {
			return b[1] - a[1];
		});
		getResult(values);
	} else { 
		window.location.href=("index.html");
	}
}
//declaration of variables
const classes = function() {
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
let counter = new classes();
const parseResult = function(string) {
	//some guidance for match function found here	//https://stackoverflow.com/questions/7888238/javascript-split-string-on-uppercase-characters
	this.spec = string[0].toUpperCase() + (string.match(/[a-z]+/g)[0]).slice(1);
	this.getClass = function() {
		let className = string.match(/[A-Z][a-z]+/g)
		if (className.length > 1) {
			let name = [(className[0] + " " + className[1])]
			return name;
		} else {
			return className;
		}
	}
	parseResult.prototype.parseSpec = function() {
		return this.spec + " " + this.getClass()
	}
}
let tableLabels = document.querySelectorAll("table div");
let tableProgress = document.querySelectorAll("table progress");
const classInfo = (values) => {
	let topMatch = new parseResult(values[0]);
	document.getElementById("title").innerHTML= topMatch.parseSpec();
	let classBanner = topMatch.getClass()[0].replace(" ", "-") + "-" + "class" + "-"+ "banner" + ".png";
	document.querySelector("#result-output img").src= `static/media/${classBanner}`
	document.getElementById("specialisation-information").innerHTML = "";
	let proff= (JSON.stringify(topMatch.getClass()[0]).replaceAll("\"", ""));
	let specialisations = Object.keys(counter);
	specialisations = specialisations.filter(value => value.includes(proff)&&value!=values[0]);
	let offspecOne= new parseResult(specialisations[0]);
	document.querySelector("#role-1 h6").innerHTML = offspecOne.spec;
	let offspecTwo= new parseResult(specialisations[1]);
	document.querySelector("#role-2 h6").innerHTML = offspecTwo.spec;
}
function getResult(values) {
	let results = values.slice(0,5);
	tableLabels[0].parentNode.parentNode.classList.add("specFocus");
	classInfo(results[0]);
	results.forEach((each, i) => {
		let temp = new parseResult(results[i][0]);
		tableLabels[i].innerHTML = temp.parseSpec();
		tableProgress[i].value = results[i][1];
		tableLabels[i].parentNode.parentNode.addEventListener("click", function() {
			tableLabels.forEach((node) => {
				node.parentNode.parentNode.classList.remove("specFocus");
			})
			classInfo(results[i]);
			this.classList.add("specFocus");
		})
	})
}