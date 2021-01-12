/*
* Exercice 7
*
* Fonctions & Modulo
*
* Réaliser une fonction qui permet de vérifier si un chiffre passé en paramètre est divisible par 3 et si c'est le cas,
* afficher le résultat de l'opération.
*
* Vous avez en input 2 variables :
*   var c1 = 123;
*   var c2 = 20;
*
*   _________________________________________________
*   |                                               |
*   |   Le résultat de 123 / 3 = 41                 |
*   |   Le chiffre 20 n'est pas divisible par 3     |
*   |_______________________________________________|
 */

var c1 = 123;
var c2 = 20;

showResult(c1);
showResult(c2);

function showResult(integer)
{
    switch (integer % 3)
    {
        case 0 :
            var result = integer / 3;
            console.log("Le résultat de " + integer + " / 3 = " + result);
            break
        default :
            console.log("Le chiffre " + integer + " n'est pas divisible par 3")
    }


}