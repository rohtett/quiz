"use strict";
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
//"next" function for instructional page
let instructionNext = function() {
	if (
		OPTIONS[0].checked===true&&
		OPTIONS[1].checked===true&&
		OPTIONS[2].checked===true&&
		OPTIONS[3].checked===true
	) {
		window.location.href = 'wow-class-quiz.html';
	}
}
//question one answer one
var questionCount = 1;
let playstyleCareful = function() {
	counter.afflictionWarlock+=2;
	counter.shadowPriest+=2;
	counter.restorationDruid +=2;
	counter.holyPriest +=2;
	counter.subtletyRogue +=2;
	counter.marksmanshipHunter +=2;
	counter.demonologyWarlock +=2;

	counter.feralDruid +=1;
	counter.restorationShaman +=1;
	counter.balanceDruid +=1;
	counter.frostMage +=1;

	counter.survivalHunter -=1;
	counter.protectionPaladin -=1;
	counter.bloodDeathKnight -=1;
	counter.protectionWarrior -=1;
	counter.enhancementShaman -=1;
	counter.disciplinePriest -=1;

	counter.arcaneMage -=2;
	counter.combatRogue -=2;
	counter.furyWarrior -=2;
	counter.retributionPaladin -=2;
	counter.elementalShaman -=2;
	counter.frostDeathKnight -=2;
}