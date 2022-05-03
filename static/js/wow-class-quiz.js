"use strict";
window.onload = function() {
	var tracker = 0;
	
}
//tracker for the answer from each question
let question = [
	undefined,
	undefined,
	undefined,
	undefined,
];
let validateSelection = function() {
		OPTIONS.forEach(selection => { 
			if (selection.value=true) {
				return selection.id;
				console.log(selection.id);
			}
		})
	}
let next = function() {

	question[0] = validateSelection();
}