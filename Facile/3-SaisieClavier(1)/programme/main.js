/*
* Exercice 3
*
* Puissance de 2
*
* Réaliser un programme permettant à l'utilisateur de saisir la puissance de 2 qu'il souhaite afficher
*
*   _________________________________
*   |                               |
*   |   Puissance voulue ? 5        |
*   |   2 à la puissance 5 = 32     |
*   |_______________________________|
 */

// On installe le module 'readline-sync' en utilisant la commande 'npm install readline-sync'
// On appel le module permettant de lire une saisie clavier
var scan = require("readline-sync");

// On saisie la valeur dans une constante, déclarée en majuscule, et la puissance dans une variable
const V = 2;
var p = scan.question("Puissance voulue ? ");

console.log(V + " à la puissance " + p + " = " + Math.pow(V, p));