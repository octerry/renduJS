// Définition des personnages
let fighter1 = {
    name: 'Yon', //Nom str
    pv: 350, //PV int(x>0)
    precision: 60/100, //Précision float(0<x<1) en fraction pour que ce soit plus lisible
    force: 30, //Force int(x>0) nombre de dégats que fera le combattant si l'attaque réussi
    icon: '🟢' //Symbole str(emoji) Petit emoji pour mieux se repérer
}

let fighter2 = {
    name: 'Declics', //nom str
    pv: 790, //PV int(x>0)
    precision: 10/100, //Précision float(0<x<1)
    force: 120, //Force int(x>0)
    icon: '⚫' //Symbole str(emoji)
}

//Definition des fonctions
function precision(self) {
    const attackIndice = Math.random()
    return attackIndice < self.precision
}

function attack(self, cible) {
    console.log(`${self.icon}${self.name} => attaque => ${cible.icon}${cible.name}`)
    if (precision(self)) {
        cible.pv -= self.force
        console.log(`⚔️ Attaque réussi ! \n${cible.name} perds ${self.force} PV\n`)
    } else {
        console.log(`❌ Raté !\n`)
    }
}

function bilan() { //Fonction qui renvoie le nombre de PV
    console.log(`PV restants:\n${fighter1.icon}${fighter1.name} : ${fighter1.pv}❤️\n${fighter2.icon}${fighter2.name} : ${fighter2.pv}❤️\n`)
}

//------ Début du combat --------
console.log(`Début du combat entre :`)
console.log(`\n${fighter1.icon} ${fighter1.name} ${fighter1.icon}\n[${fighter1.pv}❤️]\n[${fighter1.precision*100}/100🎯]\n[${fighter1.force}💪]`)
console.log(`\n${fighter2.icon} ${fighter2.name} ${fighter2.icon}\n[${fighter2.pv}❤️]\n[${fighter2.precision*100}/100🎯]\n[${fighter2.force}💪]`)
while (fighter1.pv>0 && fighter2.pv>0) {
    console.log('============\n')
    attack(fighter1,fighter2)
    attack(fighter2,fighter1)
    bilan()
}

console.log(`🏳️FIN DU COMBAT !🏳️\n`)
if (fighter1.pv<=0 && fighter2.pv<=0) {
    console.log('Match nul ! Les deux combats sont KO')
} else {
    if (fighter1.pv>fighter2.pv) {
        console.log(`🏆 VICTOIRE DE ${fighter1.icon}${fighter1.name.toUpperCase()}${fighter1.icon} PAR KO 🏆`)
    } else {
        console.log(`🏆 VICTOIRE DE ${fighter2.icon}${fighter2.name.toUpperCase()}${fighter2.icon} PAR KO 🏆`)
    }
}