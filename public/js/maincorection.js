console.log("____1____");
// Exercice 1
// let chiffre = prompt("Ajoutez des chiffres")
// let reverseNumber = (n) => {
//     console.log(typeof n);
//     // n = n + ""
//     // n = n.split("123");
//     n = n.toString().split("").reverse().join("")
//     // console.log(n);
//     return n;
// }
// console.log(reverseNumber(123));


console.log("____2____");
// Exercice 2
// let chiffre = Number(prompt("Choisissez un chiffre"))
// const divPar2 = (b) => {
//     switch (b % 2) {
//         case 0:
//             alert(`Le num ${b} est divisible par 2 => ${b} / 2 : ${b/2}`)
//             break;
//         case 1:
//             alert("Ce nombre n'est pas divisible par 2")
//             break;
//         default:
//             alert("Ce que vous avez mis n'est pas un chiffre")
//             break;
//     }
// }
// divPar2(chiffre);


console.log("____3____");
// EXERCICE 3 

// const logIn = () => {
//     let count = 3
//     let mdp = prompt("Entrez un mot de passe").toLowerCase();
    
//     while (count > 0) {
//         if (mdp === 'mdp') {
//             return "Vous êtes connectés"
            
//         } else {
//             alert(`Mauvais mot de passe, vous avez encore ${count} essaie`)
//             mdp = prompt("Entrez un mot de passe").toLowerCase();
//             count--
//         }
//     }
// }

// console.log(logIn());


console.log("____4____");
// EXERCICE 4 
// v1
// let tab = []
let coding20 = [];
let rentrer = (...nom) => {  //desctruring
    // console.log();
    nom.forEach(el => {
        coding20.push(el)
    })   
    return (`${nom} est rentré dans la classe`);

}


let sortir = (nom) => {
    coding20 = coding20.filter(el => el !== nom)
    return(`${nom} est sorti de la classe`);

}


console.log("____4.levelUp____");

let boucle = true;
while (boucle && coding20.length < 11) {
    let stagiaire = prompt('Personne à introduire dans la coding ?')
    let rep = prompt("Veux tu faire une action avec l'étudiant ? (oui ou non) ").toLowerCase()
    if (rep === "oui") {
        let choix = prompt("Veux tu ajouter ou supprimer une personne? (ajou ou supp)")
        if (choix === "supp") {
            if (coding20.includes(stagiaire) == true) {
                sortir(stagiaire)
            } else {
                console.log("La personne n'existe pas, impossible de la supp");
            }
            console.log(coding20);

        } else if(choix === "ajou") {
            rentrer(stagiaire);
            console.log(coding20);
        } else {
            console.log(`Méthode non reconnu`)
        }
    } else if (rep === "non") {
        console.log(`D'accord voici la classe ${coding20}`)
        boucle = false;
    } else {
        console.log('ERROR, reponse non reconnu')
    }
}









// let coding = () => {
//     let boucle = true;
//         let stagiaire = prompt('Personne à introduire dans la coding ?')
//         let rep = prompt("Veux tu faire une action avec l'étudiant ? (oui ou non) ").toLowerCase()
//         if (rep === "oui") {
//             let choix = prompt("Veux tu ajouter ou supprimer une personne? (ajou ou supp)")
//             if (choix === "supp") {
//                 if (coding20.includes(stagiaire) == true) {
//                     coding20 = coding20.filter(el => el !== stagiaire)
//                     console.log(`${stagiaire} est sorti de la classe`);
//                 } else {
//                     console.log("La personne n'existe pas, impossible de la supp");
//                 }
//                 console.log(coding20);

//             } else if(choix === "ajou") {
//                 coding20.push(stagiaire)
//                 console.log(coding20);
//                 console.log(`${stagiaire} est rentré dans la classe`);
//             } else {
//                 console.log(`Méthode non reconnu`)
//             }

//         } else if (rep === "non") {
//             console.log(`D'accord voici la classe ${coding20}`)
//             boucle = false;
//         } else {
//             console.log('ERROR, reponse non reconnu')
//         }
//     }
// }
// coding()
// console.log(coding20);

