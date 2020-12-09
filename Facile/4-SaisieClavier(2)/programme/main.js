/*
*   Exercice 4
*
* Saisie clavier
*
* Vous devez réaliser un programme permettant de saisir le nom, le prénom et l'âge d'un utilisateur
*
* Le programme affiche ensuite le message suivant :
*   ________________________________________
*   |                                       |
*   |   Quel est votre nom ? GASTON         |
*   |   Quel est votre prénom ? Matthieu    |
*   |   Quel est votre âge ? 30             |
*   |                                       |
*   |   ----------BIENVENUE----------       |
*   |                                       |
*   |   Votre nom est : GASTON              |
*   |   Votre prénom est : Matthieu         |
*   |   Vous avez 30ans                     |
*   |_______________________________________|
*
 */


var scan = require("readline-sync");

var name = scan.question("Quel est votre nom ? ");
var firstname = scan.question("Quel est votre prénom ? ");
var age = parseInt(scan.question("Quel est votre âge ? "));

var txt = "-----------------------------\n";
txt += "----------BIENVENUE----------\n";
txt += "-----------------------------\n";
txt += "Votre nom est : " + name + "\n";
txt += "Votre prénom est : " + firstname + "\n";
txt += "Vous avez " + age + " ans";

console.log(txt);