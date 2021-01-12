/*
 * Exercice 18
 *
 * Addition 10 premiers chiffres
 *
 * Réaliser un programme qui additionne les 10 premiers chiffres et qui affiche à chaque étape le cumul
 *
 *  _________________________________________________________
 *  |                                                       |
 *  |   Etape 1 : 1                                         |
 *  |   Etape 2 : 3                                         |
 *  |   Etape 3 : 6                                         |
 *  |   Etape 4 : 10                                        |
 *  |   Etape 5 : 15                                        |
 *  |   Etape 6 : 21                                        |
 *  |   Etape 7 : 28                                        |
 *  |   Etape 8 : 36                                        |
 *  |   Etape 9 : 45                                        |
 *  |   Etape 10 : 55                                       |
 *  |   Le résultat des 10 premiers chiffres est égal à 55  |
 *  |_______________________________________________________|
 */

let sum = 0;

for (let i = 1; i <= 10; i++){
    sum += i;
    console.log("Etape " + i + " : " + sum)
}

console.log("Le résultat des 10 premiers chiffres est égal à " + sum)