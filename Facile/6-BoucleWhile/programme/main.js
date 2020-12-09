/*
* Exercice 6
*
* Saisie d'un chiffre et vérification de sa valeur
*
* Permettre à l'utilisateur de réaliser une saisie clavier
*
* Si la saie n'est pas un chiffre, l'utilisateur doit recommencer
*
 */

var scan = require("readline-sync");

var value = parseInt(scan.question("Quel nombre voulez-vous saisir ? "));

while (isNaN(value))
{
    console.log("La valeur saisie n'est pas un nombre")
    value = scan.question("Quel nombre voulez-vous saisir ? ")
}

console.log("La valeur saisie est : " + value);