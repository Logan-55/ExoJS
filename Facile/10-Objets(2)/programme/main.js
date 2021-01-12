/*
* Exercice 10
*
* Permettre la saisie des informations d'un objet
*
* A partir de l'objet suivant, permettre la saisie du nom et de l'âge (qui seront donc deux
* propriétés de l'objet personnage).
*
*   var personnage = {};
*
* Réaliser l'affichage suivant :
*
*   _________________________________
*   |                               |
*   |   Quel est le nom ? Toto      |
*   |   Quel âge ? 25               |
*   |   { nom: 'Toto', age: 25 }    |
*   |_______________________________|
 */

// On installe le module permettant la lecture clavier
var scan = require('readline-sync');

// Génération d'un objet vide
var personnage = {};

// On stocke les données saisies dans des variables + parse de l'âge en int
var name = scan.question("Quel est le nom ? ");
var age = parseInt(scan.question("Quel age ? "));

// Complétion de l'objet en ajoutant directement ses propriétés et en lui attribuant les valeurs
personnage.name = name;
personnage.age = age;

var carac = personnage.carac = {};
carac.strenght = 7;

// Affichage de l'objet
console.log(personnage);