"use strict";
window.onload = () => {
	if (sessionStorage.state == "submit") {
		//execute calculator functions based of answers
		//these functions affect the counter object created from CLASSES
		sessionStorage.removeItem("progress");
		sessionStorage.removeItem("state");
		Object.keys(sessionStorage).forEach((key) => {
			eval(sessionStorage.getItem(key)+"()");
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
//this function will extract the class values from the results
//for example if you input "subtletyRogue", it will return "Subtlety", Rogue" and "Subtlety Rogue"
let counter = new classes();
const parseResult = function(string) {
	//some guidance for match function found here
	//https://stackoverflow.com/questions/7888238/javascript-split-string-on-uppercase-characters
	//the spec refers to the specialisaiton... in this case "Subtlety"
	this.spec = string[0].toUpperCase() + (string.match(/[a-z]+/g)[0]).slice(1);
	//class refers to "Rogue"
	this.getClass = function() {
		let className = string.match(/[A-Z][a-z]+/g)
		//if the class has TWO words e.g. "DeathKnight"
		if (className.length > 1) {
			//puts them both together
			let name = [(className[0] + " " + className[1])]
			return name;
		} else {
			//just returns the value above
			return className;
		}
	}
	//parseResult will return "Subtlety Rogue"
	parseResult.prototype.parseSpec = function() {
		return this.spec + " " + this.getClass()
	}
}
let tableLabels = document.querySelectorAll("table div");
let tableProgress = document.querySelectorAll("table progress");
//these will fill in information on the results page
//write info about the top 5 results
function getResult(values) {
	//slice the results to get top 5
	let results = values.slice(0,5);
	//focuses the selected result. this will change to whichever result the user picks
	//from the list
	tableLabels[0].parentNode.parentNode.classList.add("specFocus");
	//call the function to view the TOP result
	classInfo(results[0]);
	results.forEach((each, i) => {
		//creates a temp object using the parseResult object creator to reference
		//to each of the class, spec, and class+spec values
		let temp = new parseResult(results[i][0]);
		//writes the parse spec value "Subtlety Rogue" and a percentage 80%
		tableLabels[i].innerHTML = temp.parseSpec()+ " " +((results[i][1]/10)*100)+"%";
		//inputs the value to the progress bar
		tableProgress[i].value = results[i][1];
		//click event which changes the topResult without changing the bar at the
		//bottom since the sessionStorage remains unchanged
		tableLabels[i].parentNode.parentNode.addEventListener("click", function() {
			tableLabels.forEach((node) => {
				//remove focus from all
				node.parentNode.parentNode.classList.remove("specFocus");
			})
			//call that result
			classInfo(results[i]);
			//focus the correct one
			this.classList.add("specFocus");
		})
	})
}
const classInfo = (values) => {
	//the title at the top which displays the top result
	let topMatch = new parseResult(values[0]);
	document.getElementById("title").innerHTML= topMatch.parseSpec();
	//the image
	let classBanner = topMatch.getClass()[0].replace(" ", "-") + "-" + "class" + "-"+ "banner" + ".png";
	document.querySelector("#result-output img").src= `static/media/${classBanner}`
	//empty for future implementation
	document.getElementById("specialisation-information").innerHTML = "";
	//get the other two specialisations available to this class
	let proff= (JSON.stringify(topMatch.getClass()[0]).replaceAll("\"", ""));
	let specialisations = Object.keys(counter);
	specialisations = specialisations.filter(value => value.includes(proff)&&value!=values[0]);
	let offspecOne= new parseResult(specialisations[0]);
	document.querySelector("#role-1 h6").innerHTML = offspecOne.spec;
	let offspecTwo= new parseResult(specialisations[1]);
	document.querySelector("#role-2 h6").innerHTML = offspecTwo.spec;
}