"use strict";
function result(values) {
	document.getElementById("title").innerHTML= values + deCamelise(values);
	
}
let deCamelise = function(string) {
	return string.match(/[A-Z][a-z]+/g);
}