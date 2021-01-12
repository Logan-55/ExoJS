/*
 * Exercice 19
 *
 * La factorielle
 *
 * A partir d'un chiffre saisi, afficher la factorielle :
 *      Exemple : !5 = 1 * 2 * 3 * 4 * 5
 *      Exemple : !3 = 1 * 2 * 3
 *
 *  _____________________________________________
 *  |                                           |
 *  |   Factorielle de : 5                      |
 *  |   Etape 1 : 1                             |
 *  |   Etape 2 : 2                             |
 *  |   Etape 3 : 6                             |
 *  |   Etape 4 : 24                            |
 *  |   Etape 5 : 120                           |
 *  |   Le résultat de factorielle de 5 est 120 |
 *  |___________________________________________|
 */

const scan = require("readline-sync");

let length = scan.question("Factorielle de : ")
let factorial = factorielle(length);

console.log("Le résultat de la factorielle de " + length + " est " + factorial);

function factorielle(n)
{
    if (n > 1)
    {
        return n * factorielle(n - 1);
    }
    else
    {
        return 1;
    }
}

// let length = scan.question("Factorielle de : ")
// let factorial = 1;
//
// // for (let i = 1; i <= length; i++){
//     factorial *= i;
//     console.log("Etape " + i + " : " + factorial);
// }
//
// console.log("Le résultat de la factorielle de " + length + " est " + factorial);
