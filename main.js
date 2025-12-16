// // EXERCICE 1
// //Exo 1 & 2
// const firstName = 'Terry' 
// const age = 18

// console.log(firstName, age, 'ans')

// //Exo 3
// a = 1
// b = 2

// console.log('a + b =', a+b)
// console.log('a * b =', a*b)
// console.log('a / b =', a/b)
// console.log('a - b =', a-b)

// //Exo 4
// const isDoorOpen = true

// if (isDoorOpen) {
//     console.log('La porte est ouverte')
// } else {
//     console.log('La porte est fermée')
// }

// //Exo 5
// const userName = prompt('Quel est ton nom ?')

// if (userName == null || userName.replaceAll(' ','') == '') {
//     console.log("Tu veux pas donner ton nom ? T'es un agent secret ou quoi ?")
// } else {
//     console.log(`Le nom de l'utilisateur est ${userName}`)
// }

// //Exo 6
// const secretCode = '2149'
// const userAttempt = prompt('Code du coffre')

// if (secretCode == userAttempt) {
//     console.log('code bon')
// } else {
//     console.log('code érroné')
// }

// // EXERCICE 2
// //Exo 1
// function helloWorld () {
//     console.log('Hello World !')
// } 
// helloWorld()

// //Exo 2
// function greets (text) {
//     console.log(`Bonjour ${text}`)
// } 
// greets('User')

// //Exo 3
// function addition (a, b) {
//     console.log(`${a} + ${b} = ${a+b}`)
// }
// addition(1,2)

// //Exo 4
// function additionPlus (a, b, c) {
//     if (c == '+') {
//         console.log(`${a} + ${b} = ${a+b}`)
//     } else {
//         console.log(`${a} - ${b} = ${a-b}`)
//     }
// }
// additionPlus(1,2,'-')

// //Exo 5
// function count () {
//     for (let i=1; i<=5; i++) {
//         console.log(i)
//     }
// }
// count()

// //Exo 6
// function repeat (text) {
//     for (let i=0; i<5; i++) {
//         console.log(text)
//     }
// }
// repeat ('Test')

// //Exo machine à café
// function coffee (number) {
//     let water = 2000
//     let mold = 1000
//     let money = 0
//     let clients = 0

//     for (let i=1; i<=number; i++) {
//         console.log(`Préparation du café n°${i}`)

//         if (water >= 60 && mold >= 8) {
//             water -= 60
//             mold -= 8
//             money += 1.45
//             console.log('✅ Café servi !')
//             console.log(`Eau restant : ${water}ml\nCafé restant : ${mold}g\nArgent gagné : ${money}€`)
//         } else {
//             console.log("❌ Il n'y a plus assez de ressource pour servir les clients")
//             break
//         }

//         clients = i
//     }
//     console.log(`Nombre de cafés distribués : ${clients}\nNombre de clients restants : ${number-clients}\nEau restante : ${water}ml\nCafé restant : ${mold}g\nArgent gagné : ${money}€`)
// }
// coffee(100)

// EXERCICES Tableaux Array + Dico
// Exo 1
let colors = ['blue','red','green']
colors.forEach(color => console.log(color))

// Exo 2
colors.unshift('grey')
colors.splice(-1,1)
for (const color of colors) {
    console.log(color);
}

// Exo 3
let pommes = ['jaune','verte','rouge','verte','jaune','rouge','verte','rouge','jaune','rouge']
let jaune = 0
let verte = 0
let rouge = 0
pommes.forEach(pomme => {
    if (pomme=='jaune') {jaune++}
    if (pomme=='verte') {verte++}
    if (pomme=='rouge') {rouge++}
})
console.log(`Il y a :\n${jaune} pommes jaunes\n${verte} pommes vertes\n${rouge} pommes rouges`)

// Exo 4
let user1 = {
    nom: 'Octerry',
    age: 18,
    sentMsg: false
}

// Exo 5
let user2 = {
    nom: 'Noctarex',
    age: 3,
    sentMsg: false
}
let user3 = {
    nom: 'Thomas shrimp',
    age: 75,
    sentMsg: false
}
let user4 = {
    nom: 'Gautier',
    age: 7,
    sentMsg: false
}

let users = [user1, user2, user3, user4]

// Exo 6
let minor = []
users.forEach(user => {
    if (user.age < 18) {
        minor.push(user.nom)
    } else {
        user.sentMsg = true
    }
})
if (minor.length > 0) {
    console.log(`Tous les messages ont été envoyés, sauf aux personnes mineures suivantes : ${minor.join(', ')}`)
} else {
    console.log('Tous les messages ont été envoyés !')
}