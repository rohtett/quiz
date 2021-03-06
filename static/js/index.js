"use strict";
//class information
//question one answer one
let questionCount = 1;
const playstyleCareful = () => {
	counter.afflictionWarlock += 2;
	counter.shadowPriest += 2;
	counter.restorationDruid += 2;
	counter.holyPriest += 2;
	counter.subtletyRogue += 2;
	counter.marksmanshipHunter += 2;
	counter.demonologyWarlock += 2;
	counter.feralDruid += 1;
	counter.restorationShaman += 1;
	counter.balanceDruid += 1;
	counter.frostMage += 1;
	counter.survivalHunter -= 1;
	counter.protectionPaladin -= 1;
	counter.bloodDeathKnight -= 1;
	counter.protectionWarrior -= 1;
	counter.enhancementShaman -= 1;
	counter.disciplinePriest -= 1;
	counter.arcaneMage -= 2;
	counter.combatRogue -= 2;
	counter.furyWarrior -= 2;
	counter.retributionPaladin -= 2;
	counter.elementalShaman -= 2;
	counter.frostDeathKnight -= 2;
}

const playstyleAdapt = () => {
	counter.feralDruid += 2;
	counter.holyPaladin += 2;
	counter.demonologyWarlock += 2;
	counter.protectionWarrior += 2;
	counter.enhancementShaman += 2;
	counter.holyPriest += 2;
	counter.fireMage += 2;
	counter.armsWarrior += 2;
	counter.disciplinePriest += 1;
	counter.balanceDruid += 1;
	counter.restorationShaman += 1;
	counter.protectionPaladin += 1;
	counter.bloodDeathKnight += 1;
	counter.afflictionWarlock += 1;
	counter.beastmasteryHunter += 1;
	counter.destructionWarlock += 1;
	counter.restorationDruid -= 1;
	counter.survivalHunter -= 1;
	counter.furyWarrior -= 1;
	counter.elementalShaman -= 2;
	counter.assassinationRogue -= 2;
	counter.retributionPaladin -= 2;
	counter.arcaneMage -= 2;
}

const playstyleReckless = () => {
	counter.elementalShaman += 2;
	counter.arcaneMage += 2;
	counter.combatRogue += 2;
	counter.frostDeathKnight += 2;
	counter.assassinationRogue += 2;
	counter.retributionPaladin += 2;
	counter.armsWarrior += 1;
	counter.survivalHunter += 1;
	counter.furyWarrior += 1;
	counter.bloodDeathKnight += 1;
	counter.protectionPaladin += 1;
	counter.disciplinePriest += 1;
	counter.frostMage += 1;
	counter.feralDruid -= 1;
	counter.holyPaladin -= 1;
	counter.protectionWarrior -= 1;
	counter.balanceDruid -= 1;
	counter.restorationShaman -= 1;
	counter.shadowPriest -= 1;
	counter.fireMage -= 1;
	counter.marksmanshipHunter -= 1;
	counter.restorationDruid -= 1;
	counter.afflictionWarlock -= 2;
	counter.enhancementShaman -= 2;
	counter.subtletyRogue -= 2;
	counter.holyPriest -= 2;
	counter.demonologyWarlock -= 3;
}

const playstyleUtility = () => {
	counter.elementalShaman += 2;
	counter.restorationDruid += 2;
	counter.survivalHunter += 2;
	counter.disciplinePriest += 2;
	counter.bloodDeathKnight += 2;
	counter.restorationShaman += 2;
	counter.retributionPaladin += 1;
	counter.shadowPriest += 1;
	counter.destructionWarlock += 1;
	counter.demonologyWarlock += 1;
	counter.protectionPaladin += 1;
	counter.unholyDeathKnight += 1;
	counter.holyPaladin += 1;
	counter.protectionWarrior += 1;
	counter.balanceDruid += 1;
	counter.fireMage += 1;
	counter.arcaneMage -= 1;
	counter.marksmanshipHunter -= 2;
	counter.frostMage -= 2;
	counter.enhancementShaman -= 2;
	counter.holyPriest -= 2;
	counter.frostDeathKnight -= 2;
	counter.beastmasteryHunter -= 2;
	counter.furyWarrior -= 2;
}

const rangeRanged = () => {
	counter.afflictionWarlock += 2;
	counter.shadowPriest += 2;
	counter.restorationDruid += 2;
	counter.holyPriest += 2;
	counter.restorationShaman += 2;
	counter.destructionWarlock += 2;
	counter.survivalHunter += 2;
	counter.marksmanshipHunter += 2;
	counter.disciplinePriest += 2;
	counter.arcaneMage += 2;
	counter.elementalShaman += 2;
	counter.balanceDruid += 1;
	counter.frostMage += 1;
	counter.fireMage += 1;
	counter.demonologyWarlock += 1;
	counter.enhancementShaman -= 1;
	counter.subtletyRogue -= 1;
	counter.assassinationRogue -= 1;
	counter.combatRogue -= 1;
	counter.feralDruid -= 2;
	counter.armsWarrior -= 2;
	counter.unholyDeathKnight -= 2;
	counter.beastmasteryHunter -= 2;
	counter.protectionPaladin -= 2;
	counter.bloodDeathKnight -= 2;
	counter.protectionWarrior -= 2;
	counter.furyWarrior -= 2;
	counter.retributionPaladin -= 2;
	counter.frostDeathKnight -= 2;
}

const rangeMelee = () => {
	counter.feralDruid += 2;
	counter.assassinationRogue += 2;
	counter.retributionPaladin += 2;
	counter.protectionWarrior += 2;
	counter.enhancementShaman += 2;
	counter.protectionPaladin += 2;
	counter.bloodDeathKnight += 2;
	counter.armsWarrior += 2;
	counter.combatRogue += 2;
	counter.subtletyRogue += 2;
	counter.frostDeathKnight += 2;
	counter.unholyDeathKnight += 2;
	counter.holyPaladin += 1;
	counter.fireMage -= 1;
	counter.balanceDruid -= 1;
	counter.frostMage -= 1;
	counter.holyPriest -= 2;
	counter.disciplinePriest -= 2;
	counter.restorationShaman -= 2;
	counter.afflictionWarlock -= 2;
	counter.beastmasteryHunter -= 2;
	counter.destructionWarlock -= 2;
	counter.shadowPriest -= 2;
	counter.marksmanshipHunter -= 2;
	counter.restorationDruid -= 2;
	counter.survivalHunter -= 2;
	counter.furyWarrior -= 2;
	counter.elementalShaman -= 2;
	counter.arcaneMage -= 2;
}

const rangeSupport = () => {
	counter.holyPriest += 2;
	counter.restorationDruid += 2;
	counter.disciplinePriest += 2;
	counter.bloodDeathKnight += 2;
	counter.restorationShaman += 2;
	counter.feralDruid += 2;
	counter.protectionPaladin += 2;
	counter.holyPaladin += 2;
	counter.protectionWarrior += 2;
	counter.elementalShaman += 1;
	counter.shadowPriest += 1;
	counter.balanceDruid += 1;
	counter.unholyDeathKnight -= 1;
	counter.frostDeathKnight -= 1;
	counter.fireMage -= 2;
	counter.assassinationRogue -= 2;
	counter.combatRogue -= 2;
	counter.subtletyRogue -= 2;
	counter.afflictionWarlock -= 2;
	counter.arcaneMage -= 2;
	counter.destructionWarlock -= 2;
	counter.demonologyWarlock -= 2;
	counter.marksmanshipHunter -= 2;
	counter.frostMage -= 2;
	counter.enhancementShaman -= 2;
	counter.beastmasteryHunter -= 2;
	counter.furyWarrior -= 2;
}

const rangeIndifferent = () => {
	counter.holyPriest += 2;
	counter.restorationDruid += 2;
	counter.disciplinePriest += 2;
	counter.bloodDeathKnight += 2;
	counter.restorationShaman += 2;
	counter.feralDruid += 2;
	counter.protectionPaladin += 2;
	counter.holyPaladin += 2;
	counter.protectionWarrior += 2;
	counter.elementalShaman += 2;
	counter.shadowPriest += 2;
	counter.balanceDruid += 2;
	counter.unholyDeathKnight += 2;
	counter.frostDeathKnight += 2;
	counter.fireMage += 2;
	counter.assassinationRogue += 2;
	counter.combatRogue += 2;
	counter.subtletyRogue += 2;
	counter.afflictionWarlock += 2;
	counter.arcaneMage += 2;
	counter.destructionWarlock += 2;
	counter.demonologyWarlock += 2;
	counter.marksmanshipHunter += 2;
	counter.frostMage += 2;
	counter.enhancementShaman += 2;
	counter.beastmasteryHunter += 2;
	counter.furyWarrior += 2;
}
const roleHealer = () => {
	counter.restorationDruid += 3;
	counter.holyPriest += 3;
	counter.restorationShaman += 3;
	counter.disciplinePriest += 3;
	counter.holyPaladin += 3;
	counter.elementalShaman += 2;
	counter.shadowPriest += 2;
	counter.balanceDruid += 2;
	counter.enhancementShaman += 1;
	counter.retributionPaladin += 1;
	counter.protectionPaladin += 1;
	counter.frostMage -= 1;
	counter.fireMage -= 1;
	counter.demonologyWarlock -= 1;
	counter.subtletyRogue -= 2;
	counter.assassinationRogue -= 2;
	counter.combatRogue -= 2;
	counter.armsWarrior -= 2;
	counter.unholyDeathKnight -= 2;
	counter.beastmasteryHunter -= 2;
	counter.bloodDeathKnight -= 2;
	counter.protectionWarrior -= 2;
	counter.furyWarrior -= 2;
	counter.frostDeathKnight -= 2;
	counter.destructionWarlock -= 2;
	counter.survivalHunter -= 2;
	counter.marksmanshipHunter -= 2;
	counter.arcaneMage -= 2;
	counter.afflictionWarlock -= 2;
 }

const roleTank = () => {
	counter.feralDruid += 3;
	counter.protectionWarrior += 3;
	counter.protectionPaladin += 3;
	counter.bloodDeathKnight += 3;
	counter.armsWarrior += 2;
	counter.frostDeathKnight += 2;
	counter.unholyDeathKnight += 2;
	counter.retributionPaladin += 2;
	counter.holyPaladin += 1;
	counter.balanceDruid += 1;
	counter.restorationDruid += 1;
	counter.enhancementShaman -= 1;
	counter.demonologyWarlock -= 1;
	counter.combatRogue -= 1;
	counter.subtletyRogue -= 1;
	counter.assassinationRogue -= 1;
	counter.fireMage -= 2;
	counter.frostMage -= 2;
	counter.holyPriest -= 2;
	counter.disciplinePriest -= 2;
	counter.restorationShaman -= 2;
	counter.afflictionWarlock -= 2;
	counter.beastmasteryHunter -= 2;
	counter.destructionWarlock -= 2;
	counter.shadowPriest -= 2;
	counter.marksmanshipHunter -= 2;
	counter.survivalHunter -= 2;
	counter.furyWarrior -= 2;
	counter.elementalShaman -= 2;
	counter.arcaneMage -= 2;
}

const roleDamage = () => {
	counter.fireMage += 3;
	counter.frostMage += 3;
	counter.arcaneMage += 3;
	counter.demonologyWarlock += 3;
	counter.combatRogue += 3;
	counter.subtletyRogue += 3;
	counter.assassinationRogue += 3;
	counter.afflictionWarlock += 3;
	counter.beastmasteryHunter += 3;
	counter.destructionWarlock += 3;
	counter.marksmanshipHunter += 3;
	counter.survivalHunter += 3;
	counter.elementalShaman += 1;
	counter.retributionPaladin += 1;
	counter.shadowPriest += 1;
	counter.balanceDruid -= 1;
	counter.armsWarrior -= 1;
	counter.furyWarrior -= 1;
	counter.unholyDeathKnight -= 1;
	counter.frostDeathKnight -= 1;
	counter.holyPriest -= 2;
	counter.disciplinePriest -= 2;
	counter.restorationShaman -= 2;
	counter.holyPaladin -= 2;
	counter.restorationDruid -= 2;
	counter.feralDruid -= 2;
	counter.protectionWarrior -= 2;
	counter.protectionPaladin -= 2;
	counter.bloodDeathKnight -= 2;
}

const roleFlexible = () => {
	counter.holyPriest += 2;
	counter.restorationDruid += 2;
	counter.disciplinePriest += 2;
	counter.bloodDeathKnight += 2;
	counter.restorationShaman += 2;
	counter.feralDruid += 2;
	counter.protectionPaladin += 2;
	counter.holyPaladin += 2;
	counter.protectionWarrior += 2;
	counter.elementalShaman += 2;
	counter.shadowPriest += 2;
	counter.balanceDruid += 2;
	counter.unholyDeathKnight += 2;
	counter.frostDeathKnight += 2;
	counter.fireMage += 2;
	counter.assassinationRogue += 2;
	counter.combatRogue += 2;
	counter.subtletyRogue += 2;
	counter.afflictionWarlock += 2;
	counter.arcaneMage += 2;
	counter.destructionWarlock += 2;
	counter.demonologyWarlock += 2;
	counter.marksmanshipHunter += 2;
	counter.frostMage += 2;
	counter.enhancementShaman += 2;
	counter.beastmasteryHunter += 2;
	counter.furyWarrior += 2;
}

const aestheticInnate = () => {
	counter.retributionPaladin += 2;
	counter.frostDeathKnight += 2;
	counter.bloodDeathKnight += 2;
	counter.restorationDruid += 2;
	counter.holyPriest += 2;
	counter.disciplinePriest += 2;
	counter.holyPaladin += 2;
	counter.feralDruid += 2;
	counter.shadowPriest += 1;
	counter.protectionPaladin += 1;
	counter.balanceDruid += 1;
	counter.afflictionWarlock -= 1;
	counter.destructionWarlock -= 1;
	counter.survivalHunter -= 1;
	counter.arcaneMage -= 1;
	counter.frostMage -= 1;
	counter.fireMage -= 1;
	counter.demonologyWarlock -= 1;
	counter.subtletyRogue -= 2;
	counter.assassinationRogue -= 2;
	counter.combatRogue -= 2;
	counter.marksmanshipHunter -= 2;
	counter.armsWarrior -= 2;
	counter.unholyDeathKnight -= 2;
	counter.beastmasteryHunter -= 2;
	counter.protectionWarrior -= 2;
	counter.furyWarrior -= 2;
}

const aestheticScholar = () => {
	counter.afflictionWarlock += 2;
	counter.fireMage += 2;
	counter.balanceDruid += 2;
	counter.frostMage += 2;
	counter.disciplinePriest += 2;
	counter.demonologyWarlock += 2;
	counter.destructionWarlock += 2;
	counter.shadowPriest += 2;
	counter.elementalShaman += 2;
	counter.arcaneMage += 2;
	counter.restorationDruid += 1;
	counter.holyPriest += 1;
	counter.restorationShaman += 1;
	counter.holyPaladin += 1;
	counter.enhancementShaman += 1;
	counter.feralDruid -= 1;
	counter.frostDeathKnight -= 1;
	counter.unholyDeathKnight -= 1;
	counter.assassinationRogue -= 2;
	counter.retributionPaladin -= 2;
	counter.protectionWarrior -= 2;
	counter.protectionPaladin -= 2;
	counter.bloodDeathKnight -= 2;
	counter.armsWarrior -= 2;
	counter.combatRogue -= 2;
	counter.subtletyRogue -= 2;
	counter.beastmasteryHunter -= 2;
	counter.marksmanshipHunter -= 2;
	counter.survivalHunter -= 2;
	counter.furyWarrior -= 2;
}

const aestheticMartial = () => {
	counter.subtletyRogue += 2;
	counter.assassinationRogue += 2;
	counter.combatRogue += 2;
	counter.marksmanshipHunter += 2;
	counter.armsWarrior += 2;
	counter.beastmasteryHunter += 2;
	counter.protectionWarrior += 2;
	counter.furyWarrior += 2;
	counter.survivalHunter += 1;
	counter.frostDeathKnight += 1;
	counter.bloodDeathKnight += 1;
	counter.retributionPaladin += 1;
	counter.shadowPriest -= 2;
	counter.balanceDruid -= 2;
	counter.restorationShaman -= 2;
	counter.elementalShaman -= 2;
	counter.afflictionWarlock -= 2;
	counter.destructionWarlock -= 2;
	counter.arcaneMage -= 2;
	counter.frostMage -= 2;
	counter.fireMage -= 2;
	counter.demonologyWarlock -= 2;
	counter.restorationDruid -= 2;
	counter.holyPriest -= 2;
	counter.disciplinePriest -= 2;
	counter.holyPaladin -= 2;
}

const aestheticIndifferent = () => {
	counter.holyPriest += 2;
	counter.restorationDruid += 2;
	counter.disciplinePriest += 2;
	counter.bloodDeathKnight += 2;
	counter.restorationShaman += 2;
	counter.feralDruid += 2;
	counter.protectionPaladin += 2;
	counter.holyPaladin += 2;
	counter.protectionWarrior += 2;
	counter.elementalShaman += 2;
	counter.shadowPriest += 2;
	counter.balanceDruid += 2;
	counter.unholyDeathKnight += 2;
	counter.frostDeathKnight += 2;
	counter.fireMage += 2;
	counter.assassinationRogue += 2;
	counter.combatRogue += 2;
	counter.subtletyRogue += 2;
	counter.afflictionWarlock += 2;
	counter.arcaneMage += 2;
	counter.destructionWarlock += 2;
	counter.demonologyWarlock += 2;
	counter.marksmanshipHunter += 2;
	counter.frostMage += 2;
	counter.enhancementShaman += 2;
	counter.beastmasteryHunter += 2;
	counter.furyWarrior += 2;
}