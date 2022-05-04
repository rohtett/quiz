"use strict";
function parseResult(string) {
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

function getResult(values) {
	let results = values.slice(0,5);
	tableLabels[0].parentNode.parentNode.classList.add("specFocus");
	classInfo(results[0]);
	results.forEach(function(each, i) {
		let temp = new parseResult(results[i][0]);
		tableLabels[i].innerHTML = temp.parseSpec();
		tableProgress[i].value = results[i][1];
		tableLabels[i].parentNode.parentNode.addEventListener("click", function() {
			tableLabels.forEach(function(node) {
				node.parentNode.parentNode.classList.remove("specFocus");
			})
			classInfo(results[i]);
			this.classList.add("specFocus");
		})
	})
}
function classInfo(values) {
	let topMatch = new parseResult(values[0]);
		document.getElementById("title").innerHTML= topMatch.parseSpec();
		let classBanner = topMatch.getClass()[0].replace(" ", "-") + "-" + "class" + "-"+ "banner" + ".png";
		document.querySelector("#result-output img").src= `static/media/${classBanner}`
}