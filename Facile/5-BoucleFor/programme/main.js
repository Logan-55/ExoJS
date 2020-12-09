/*
* Exercice 5
*
* Afficher une table de multiplication
*
* A partir d'un nombre saisi au clavier, afficher sa table de multiplication
* (les 10 premiers nombres)
*
 */

var scan = require("readline-sync");

var table = parseInt(scan.question("Quelle table de multiplication voulez-vous afficher ? "));

for (var i = 1; i <= 10; i++)
{
    var result = table * i
    console.log(table + " x " + i + " = " + result);
}