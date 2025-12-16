// Définition des personnages
let fighter1 = {
    name: 'Yon', //Nom str
    pv: 350, //PV int(x>0)
    maxPv: 350, //PV max int(x>0)
    shield: 100, //Bouclier int(x>0)
    precision: 60/100, //Précision float(0<x<1) en fraction pour que ce soit plus lisible
    buffChance: 5/100, //Chance float(0<x<1) Chance que le personnage gagne 25% de force
    healChance: 7/100, //Chance float(0<x<1) Chance que le personnage regagne 5% de ses pv
    force: 30, //Force int(x>0) nombre de dégats que fera le combattant si l'attaque réussi
    icon: '🟢' //Symbole str(emoji) Petit emoji pour mieux se repérer
}

let fighter2 = {
    name: 'Declics', //nom str
    pv: 690, //PV int(x>0)
    maxPv: 690, //PV max (x>0)
    shield: 300, //Bouclier int(x>0)
    precision: 10/100, //Précision float(0<x<1)
    buffChance: 5/100, //Chance float(0<x<1) Chance que le personnage gagne 25% de force
    healChance: 1/100, //Chance float(0<x<1) Chance que le personnage regagne 5% de ses pv
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
        if (Math.random() < .1) { //Critique (1 chance sur 100)
            if (cible.shield > 0) {
                cible.shield -= self.force
                if (cible.shield < 0) {
                    cible.shield = 0
                }
                console.log(`⚔️💫 Attaque CRITIQUE ! \n${cible.name} prends ${self.force*2} dans le bouclier\n`)
            } else {
                cible.pv -= self.force*2
                console.log(`⚔️💫 Attaque CRITIQUE ! \n${cible.name} perds ${self.force*2} PV\n`)
            }
        } else { // Attaque normale
            if (cible.shield > 0) {
                cible.shield -= self.force
                if (cible.shield < 0) {
                    cible.shield = 0
                }
                console.log(`⚔️ Attaque réussi ! \n${cible.name} prends ${self.force} dans le bouclier\n`)

            } else {
                cible.pv -= self.force
                console.log(`⚔️ Attaque réussi ! \n${cible.name} perds ${self.force} PV\n`)
            }
        }
    } else {
        console.log(`❌ Raté !\n`)
    }
}

function combatEvent() {
    if (Math.random()<fighter1.healChance) {
        console.log(`➕ ${fighter1.name} utilise du soin et récupère ${fighter1.pv*.5}PV`)
        fighter1.pv += Math.round(fighter1.pv*.25)
        if (fighter1.pv>fighter1.maxPv) {fighter1.pv = fighter1.maxPv}
    }
    if (Math.random()<fighter2.healChance) {
        console.log(`➕ ${fighter2.name} utilise du soin et récupère ${fighter2.pv*.5}PV`)
        fighter2.pv += Math.round(fighter2.pv*.25)
        if (fighter2.pv>fighter2.maxPv) {fighter2.pv = fighter2.maxPv}
    }
    if (Math.random()<fighter1.buffChance) {
        console.log(`💪 ${fighter1.name} gagne ${fighter1.force*.25} de force !`)
        fighter1.force += Math.round(fighter1.force*.25)
    }
    if (Math.random()<fighter2.buffChance) {
        console.log(`💪 ${fighter2.name} gagne ${fighter2.force*.25} de force !`)
        fighter2.force += Math.round(fighter2.force*.25)
    }
    console.log()
}

function bilan() { //Fonction qui renvoie le nombre de PV
    console.log(`PV restants:\n${fighter1.icon}${fighter1.name} : ${fighter1.pv}❤️ (${fighter1.shield}🛡️)\n${fighter2.icon}${fighter2.name} : ${fighter2.pv}❤️ (${fighter2.shield}🛡️)\n`)
}

//------ Début du combat --------
console.log(`Début du combat entre :`)
console.log(`\n${fighter1.icon} ${fighter1.name} ${fighter1.icon}\n[${fighter1.pv}❤️]\n[${fighter1.shield}🛡️]\n[${fighter1.precision*100}/100🎯]\n[${fighter1.force}💪]`)
console.log(`\n${fighter2.icon} ${fighter2.name} ${fighter2.icon}\n[${fighter2.pv}❤️]\n[${fighter2.shield}🛡️]\n[${fighter2.precision*100}/100🎯]\n[${fighter2.force}💪]`)
while (fighter1.pv>0 && fighter2.pv>0) {
    console.log('============\n')
    attack(fighter1,fighter2)
    attack(fighter2,fighter1)
    combatEvent()
    bilan()
}

if (fighter1.pv<0) {fighter1.pv=0}
if (fighter2.pv<0) {fighter2.pv=0}
 
console.log(`🏳️FIN DU COMBAT !🏳️\n`)
if (fighter1.pv==0 && fighter2.pv==0) {
    console.log('Match nul ! Les deux combats sont KO')
} else {
    if (fighter1.pv>fighter2.pv) {
        console.log(`🏆 VICTOIRE DE ${fighter1.icon}${fighter1.name.toUpperCase()}${fighter1.icon} PAR KO 🏆`)
    } else {
        console.log(`🏆 VICTOIRE DE ${fighter2.icon}${fighter2.name.toUpperCase()}${fighter2.icon} PAR KO 🏆`)
    }
}