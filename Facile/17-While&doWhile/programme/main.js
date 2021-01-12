/*
 * Exercice 17
 *
 * Forcer la saisie d'un chiffre
 *
 * Faire un programme qui force la saisie du chiffre 3, tant que ce chiffre n'est pas saisi,
 * le programme recommence sa demande
 *
 *  _________________________________________________
 *  |                                               |
 *  |   Saisir le chiffre 3 : 2                     |
 *  |   Vous n'avez pas saisi le bon chiffre...     |
 *  |   Saisir le chiffre 3 : 4                     |
 *  |   Vous n'avez pas saisi le bon chiffre...     |
 *  |   Saisir le chiffre 3 : 3                     |
 *  |   Bravo ! Vous avez saisi un 3                |
 *  |_______________________________________________|
 *
 */


const scan = require("readline-sync");

let input = parseInt(scan.question("Saisir le chiffre 3 : "));

// L'instruction While vérifie puis réalise l'action contenue si besoin

// while (input != 3) {
//     console.log("Vous n'avez pas saisi le bon chiffre...")
//     input = parseInt(scan.question("Saisir le chiffre 3 : "));
// }

// L'instruction do...While réalise l'action contenue une fois avant de vérifier

do {
    console.log("Vous n'avez pas saisi le bon chiffre...")
    input = parseInt(scan.question("Saisir le chiffre 3 : "));
} while (input != 3)

console.log("Bravo vous avez bien saisi un 3")
