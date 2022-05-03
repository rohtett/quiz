"use strict";
window.onload = function() {
}

let next = function() {
	for (let i = 0; i < OPTIONS.length; i++) {
		if (OPTIONS[i].checked===true) {
			let progress = parseInt(sessionStorage.progress);
			let question = sessionStorage.getItem(progress)
			console.log(question)
			question = OPTIONS[i].id+"()";
			sessionStorage.setItem(progress, question);
			progress += 1;
			if (progress < sessionStorage.length) {
				sessionStorage.setItem("progress", progress)
				window.location.href = `wow-class-quiz-${progress}.html`;
			} else {
				console.log(sessionStorage.getItem(1));
				window.location.href = "result.html";
			}
			break
		}
	}
}