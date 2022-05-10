"use strict";
window.onload = () => {
	if (sessionStorage.state == "submit") {
		window.location.href = "result.html";
	}
	if (document.getElementById("progress")) {
	document.getElementById("progress").value = (progress/(sessionStorage.length-1))
}
}
let progress = parseInt(sessionStorage.progress);
//"next" function for instructional page
const instructionNext = () => {
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
const restart = () => {
	sessionStorage.clear();
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
const back = () => {
	let progress = parseInt(sessionStorage.progress);
	progress -= 1;
	sessionStorage.setItem("progress", progress)
	//go to previous question
	window.location.href = `wow-class-quiz-${progress}.html`;
}

//next function for the rest of the pages
const next = () => {
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
			sessionStorage.setItem("state", "submit");
			window.location.href = "result.html";
		}
	//none of the checkmarks are selected
	} else {
		document.getElementById("error").style.visibility = "visible";
	}
}
