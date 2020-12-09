/*
* Exercice 1
*
* Inverser des valeurs de deux variables
*
* A partir des variables suivantes, faire en sorte d'inverser leur valeur
*   var a = 1
*   var b = 5
* Respecter l'affichage suivant
*
* "---------- Avant inversion ----------");
*   A : 1
*   B : 5
* "---------- Après inversion ----------");
*   A : 5
*   B : 1
*/

var a = 1;
var b = 2;

console.log("---------- Avant inversion ----------");
console.log("A : " + a);
console.log("B : " + b);

a = a + b;
b = a - b;
a = a - b;

console.log("---------- Après inversion ----------");
console.log("A : " + a);
console.log("B : " + b);