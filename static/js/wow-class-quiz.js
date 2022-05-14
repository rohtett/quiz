"use strict";
window.onload = () => {
	if (sessionStorage.state == "submit") {
		window.location.href = "result.html";
	}
	if (document.getElementById("progress")) {
	document.getElementById("progress").value = (progress/(sessionStorage.length-1))
	}
	if (sessionStorage[parseInt(sessionStorage.progress)].length > 1) {
		document.getElementById(sessionStorage[parseInt(sessionStorage.progress)]).checked = "true";
	}
}
let progress = parseInt(sessionStorage.progress);
//"next" function for instructional page
const instructionNext = () => {
	let input = document.getElementById("4");
	if (input.checked) {
		//all 4 options have been checked
		if (sessionStorage.length > 0) {
			let progress = sessionStorage.getItem("progress");
			window.location.href = `wow-class-quiz-${progress}.html`;
		} else {
		confirmReset();
		}
	} else {
		document.getElementById("error").style.visibility = "visible";
	}		
}
const restart = () => {
	const modal = document.getElementById("modal-background")
	modal.style.display="block";
}
const closeModal = () => {
	const modal = document.getElementById("modal-background")
	modal.style.display="none";
}
const confirmReset = () => {
	sessionStorage.clear();
	//question number tracker reset
	let progress = 1;
	sessionStorage.setItem("progress", progress);
	//placeholders for each question. this is used to track total progress
	sessionStorage.setItem(1, "");
	sessionStorage.setItem(2, "");
	sessionStorage.setItem(3, "");
	sessionStorage.setItem(4, "");
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
		let question = selection.id;
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
